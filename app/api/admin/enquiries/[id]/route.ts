import { updateEnquiryStatus } from "@/db/enquiries";
import { getAdminUser } from "@/lib/admin-auth";
import { isEnquiryStatus } from "@/lib/enquiry-status";

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_BODY_BYTES = 1_024;

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const admin = await getAdminUser();
  if (!admin) {
    return Response.json({ error: "Administrator access is required." }, { status: 401 });
  }

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "This request is not allowed." }, { status: 403 });
  }

  const { id } = await context.params;
  if (!UUID_PATTERN.test(id)) {
    return Response.json({ error: "The enquiry reference is invalid." }, { status: 400 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "The request body is too large." }, { status: 413 });
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return Response.json({ error: "The request body could not be read." }, { status: 400 });
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return Response.json({ error: "The request body is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "A valid JSON body is required." }, { status: 400 });
  }

  const status =
    typeof body === "object" && body !== null && "status" in body
      ? body.status
      : undefined;

  if (!isEnquiryStatus(status)) {
    return Response.json({ error: "Select a valid enquiry status." }, { status: 400 });
  }

  try {
    const updated = await updateEnquiryStatus(id, status);
    if (!updated) {
      return Response.json({ error: "Enquiry not found." }, { status: 404 });
    }

    return Response.json({ ok: true, status });
  } catch (error) {
    console.error("Unable to update enquiry status", error);
    return Response.json(
      { error: "The status could not be updated. Please try again." },
      { status: 503 }
    );
  }
}
