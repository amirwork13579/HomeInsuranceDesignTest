import { getD1 } from ".";
import {
  type EnquiryStatus,
  isEnquiryStatus,
} from "@/lib/enquiry-status";

export type NewEnquiry = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  claimType: string;
  message: string;
  source: "homepage" | "contact";
};

export type EnquiryRecord = NewEnquiry & {
  id: string;
  status: EnquiryStatus;
  createdAt: string;
};

export type EnquiryStats = {
  total: number;
  new: number;
  contacted: number;
  inProgress: number;
  resolved: number;
};

type EnquiryRow = Omit<EnquiryRecord, "status"> & { status: string };

type EnquiryStatsRow = {
  total: number;
  newCount: number;
  contactedCount: number;
  inProgressCount: number;
  resolvedCount: number;
};

export async function createEnquiry(enquiry: NewEnquiry) {
  const id = crypto.randomUUID();
  const result = await getD1()
    .prepare(
      `INSERT INTO enquiries (
        id,
        first_name,
        last_name,
        email,
        phone,
        claim_type,
        message,
        source
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      id,
      enquiry.firstName,
      enquiry.lastName,
      enquiry.email,
      enquiry.phone,
      enquiry.claimType,
      enquiry.message,
      enquiry.source
    )
    .run();

  if (!result.success) {
    throw new Error("D1 did not confirm the enquiry insert.");
  }

  return id;
}

export async function listEnquiries(options: {
  page: number;
  pageSize: number;
  query?: string;
  status?: EnquiryStatus;
}) {
  const database = getD1();
  const conditions: string[] = [];
  const bindings: string[] = [];
  const query = options.query?.trim().slice(0, 100).toLowerCase();

  if (options.status) {
    conditions.push("status = ?");
    bindings.push(options.status);
  }

  if (query) {
    conditions.push(`(
      LOWER(first_name || ' ' || last_name) LIKE ? OR
      LOWER(email) LIKE ? OR
      LOWER(phone) LIKE ? OR
      LOWER(claim_type) LIKE ?
    )`);
    const pattern = `%${query}%`;
    bindings.push(pattern, pattern, pattern, pattern);
  }

  const whereClause = conditions.length ? ` WHERE ${conditions.join(" AND ")}` : "";
  const countRow = await database
    .prepare(`SELECT COUNT(*) AS total FROM enquiries${whereClause}`)
    .bind(...bindings)
    .first<{ total: number }>();

  const offset = (options.page - 1) * options.pageSize;
  const rows = await database
    .prepare(
      `SELECT
        id,
        first_name AS firstName,
        last_name AS lastName,
        email,
        phone,
        claim_type AS claimType,
        message,
        source,
        status,
        created_at AS createdAt
      FROM enquiries${whereClause}
      ORDER BY created_at DESC, id DESC
      LIMIT ? OFFSET ?`
    )
    .bind(...bindings, options.pageSize, offset)
    .all<EnquiryRow>();

  return {
    enquiries: (rows.results ?? []).map((row) => ({
      ...row,
      status: isEnquiryStatus(row.status) ? row.status : "new",
    })),
    total: Number(countRow?.total ?? 0),
  };
}

export async function getEnquiryStats(): Promise<EnquiryStats> {
  const row = await getD1()
    .prepare(
      `SELECT
        COUNT(*) AS total,
        COALESCE(SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END), 0) AS newCount,
        COALESCE(SUM(CASE WHEN status = 'contacted' THEN 1 ELSE 0 END), 0) AS contactedCount,
        COALESCE(SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END), 0) AS inProgressCount,
        COALESCE(SUM(CASE WHEN status = 'resolved' THEN 1 ELSE 0 END), 0) AS resolvedCount
      FROM enquiries`
    )
    .first<EnquiryStatsRow>();

  return {
    total: Number(row?.total ?? 0),
    new: Number(row?.newCount ?? 0),
    contacted: Number(row?.contactedCount ?? 0),
    inProgress: Number(row?.inProgressCount ?? 0),
    resolved: Number(row?.resolvedCount ?? 0),
  };
}

export async function updateEnquiryStatus(id: string, status: EnquiryStatus) {
  const result = await getD1()
    .prepare("UPDATE enquiries SET status = ? WHERE id = ?")
    .bind(status, id)
    .run();

  return Number(result.meta.changes ?? 0) > 0;
}
