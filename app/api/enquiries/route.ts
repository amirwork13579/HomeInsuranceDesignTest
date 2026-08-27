import { createEnquiry } from "@/db/enquiries";
import { enquirySchema } from "@/lib/enquiry-validation";

const MAX_BODY_BYTES = 16_384;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "This request is not allowed." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "The enquiry is too large." }, { status: 413 });
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return Response.json({ error: "The request body could not be read." }, { status: 400 });
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return Response.json({ error: "The enquiry is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "A valid JSON body is required." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      {
        error: "Please check the form and try again.",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  try {
    await createEnquiry(parsed.data);
    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Unable to save enquiry", error);
    return Response.json(
      { error: "We could not save your enquiry right now. Please call us or try again shortly." },
      { status: 503 }
    );
  }
}
