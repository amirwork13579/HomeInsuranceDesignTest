import { listEnquiriesForExport } from "@/db/enquiries";
import { getAdminUser } from "@/lib/admin-auth";
import {
  ENQUIRY_STATUS_LABELS,
  isEnquiryStatus,
} from "@/lib/enquiry-status";

function csvCell(value: unknown) {
  const raw = String(value ?? "");
  const formulaCandidate = raw.trimStart();
  const safe = /^[=+\-@]/.test(formulaCandidate) ? `'${raw}` : raw;
  return `"${safe.replace(/"/g, '""')}"`;
}

function sourceLabel(source: "homepage" | "contact") {
  return source === "homepage" ? "Homepage" : "Contact page";
}

export async function GET(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return Response.json(
      { error: "Administrator access is required." },
      { status: 401 }
    );
  }

  const url = new URL(request.url);
  const query = (url.searchParams.get("q") ?? "").trim().slice(0, 100);
  const rawStatus = url.searchParams.get("status");
  const status = isEnquiryStatus(rawStatus) ? rawStatus : undefined;

  try {
    const enquiries = await listEnquiriesForExport({ query, status });
    const header = [
      "Reference",
      "First name",
      "Last name",
      "Email",
      "Phone",
      "Claim type",
      "Message",
      "Source",
      "Status",
      "Received at (UTC)",
    ];
    const rows = enquiries.map((enquiry) => [
      enquiry.id,
      enquiry.firstName,
      enquiry.lastName,
      enquiry.email,
      enquiry.phone,
      enquiry.claimType,
      enquiry.message,
      sourceLabel(enquiry.source),
      ENQUIRY_STATUS_LABELS[enquiry.status],
      enquiry.createdAt,
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map(csvCell).join(","))
      .join("\r\n");
    const date = new Date().toISOString().slice(0, 10);

    return new Response(`\uFEFF${csv}\r\n`, {
      headers: {
        "Cache-Control": "private, no-store",
        "Content-Disposition": `attachment; filename="enquiries-${date}.csv"`,
        "Content-Type": "text/csv; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Unable to export enquiries", error);
    return Response.json(
      { error: "The enquiry export could not be generated." },
      { status: 503 }
    );
  }
}
