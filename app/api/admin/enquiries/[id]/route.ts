import {
  addEnquiryNote,
  listEnquiryActivity,
  updateEnquiryStatus,
} from "@/db/enquiries";
import { getAdminUser } from "@/lib/admin-auth";
import { isEnquiryStatus } from "@/lib/enquiry-status";

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_STATUS_BODY_BYTES = 1_024;
const MAX_NOTE_BODY_BYTES = 4_096;

type RouteContext = { params: Promise<{ id: string }> };
type JsonBodyResult =
  | { body: unknown; response?: never }
  | { body?: never; response: Response };

async function authenticateRequest(context: RouteContext) {
  const admin = await getAdminUser();
  if (!admin) {
    return Response.json(
      { error: "Administrator access is required." },
      { status: 401 }
    );
  }

  const { id } = await context.params;
  if (!UUID_PATTERN.test(id)) {
    return Response.json(
      { error: "The enquiry reference is invalid." },
      { status: 400 }
    );
  }

  return { admin, id };
}

function verifySameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

async function readJsonBody(
  request: Request,
  maxBytes: number
): Promise<JsonBodyResult> {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    return {
      response: Response.json(
        { error: "The request body is too large." },
        { status: 413 }
      ),
    };
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return {
      response: Response.json(
        { error: "The request body could not be read." },
        { status: 400 }
      ),
    };
  }

  if (new TextEncoder().encode(rawBody).byteLength > maxBytes) {
    return {
      response: Response.json(
        { error: "The request body is too large." },
        { status: 413 }
      ),
    };
  }

  try {
    return { body: JSON.parse(rawBody) as unknown };
  } catch {
    return {
      response: Response.json(
        { error: "A valid JSON body is required." },
        { status: 400 }
      ),
    };
  }
}

export async function GET(_request: Request, context: RouteContext) {
  const access = await authenticateRequest(context);
  if (access instanceof Response) return access;

  try {
    const activity = await listEnquiryActivity(access.id);
    return Response.json({ activity });
  } catch (error) {
    console.error("Unable to load enquiry activity", error);
    return Response.json(
      { error: "The enquiry history could not be loaded." },
      { status: 503 }
    );
  }
}

export async function POST(request: Request, context: RouteContext) {
  const access = await authenticateRequest(context);
  if (access instanceof Response) return access;

  if (!verifySameOrigin(request)) {
    return Response.json(
      { error: "This request is not allowed." },
      { status: 403 }
    );
  }

  const parsed = await readJsonBody(request, MAX_NOTE_BODY_BYTES);
  if ("response" in parsed) return parsed.response;

  const note =
    typeof parsed.body === "object" &&
    parsed.body !== null &&
    "note" in parsed.body &&
    typeof parsed.body.note === "string"
      ? parsed.body.note.trim()
      : "";

  if (!note || note.length > 2_000) {
    return Response.json(
      { error: "Enter a note between 1 and 2,000 characters." },
      { status: 400 }
    );
  }

  try {
    const created = await addEnquiryNote({
      enquiryId: access.id,
      note,
      actorEmail: access.admin.email,
      actorName: access.admin.fullName ?? access.admin.email,
    });

    if (!created) {
      return Response.json({ error: "Enquiry not found." }, { status: 404 });
    }

    const activity = await listEnquiryActivity(access.id);
    return Response.json({ ok: true, activity }, { status: 201 });
  } catch (error) {
    console.error("Unable to add enquiry note", error);
    return Response.json(
      { error: "The note could not be saved. Please try again." },
      { status: 503 }
    );
  }
}

export async function PATCH(request: Request, context: RouteContext) {
  const access = await authenticateRequest(context);
  if (access instanceof Response) return access;

  if (!verifySameOrigin(request)) {
    return Response.json(
      { error: "This request is not allowed." },
      { status: 403 }
    );
  }

  const parsed = await readJsonBody(request, MAX_STATUS_BODY_BYTES);
  if ("response" in parsed) return parsed.response;

  const status =
    typeof parsed.body === "object" && parsed.body !== null && "status" in parsed.body
      ? parsed.body.status
      : undefined;

  if (!isEnquiryStatus(status)) {
    return Response.json(
      { error: "Select a valid enquiry status." },
      { status: 400 }
    );
  }

  try {
    const result = await updateEnquiryStatus(access.id, status, {
      email: access.admin.email,
      name: access.admin.fullName ?? access.admin.email,
    });

    if (!result.found) {
      return Response.json({ error: "Enquiry not found." }, { status: 404 });
    }

    const activity = await listEnquiryActivity(access.id);
    return Response.json({ ok: true, status, changed: result.changed, activity });
  } catch (error) {
    console.error("Unable to update enquiry status", error);
    return Response.json(
      { error: "The status could not be updated. Please try again." },
      { status: 503 }
    );
  }
}
