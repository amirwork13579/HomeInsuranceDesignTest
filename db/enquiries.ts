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

export type EnquiryActivityKind = "created" | "note" | "status_change";

export type EnquiryActivityRecord = {
  id: string;
  enquiryId: string;
  kind: EnquiryActivityKind;
  content: string;
  fromStatus: EnquiryStatus | null;
  toStatus: EnquiryStatus | null;
  actorEmail: string | null;
  actorName: string;
  createdAt: string;
};

type EnquiryActivityRow = Omit<
  EnquiryActivityRecord,
  "kind" | "fromStatus" | "toStatus"
> & {
  kind: string;
  fromStatus: string | null;
  toStatus: string | null;
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
  const activityId = crypto.randomUUID();
  const database = getD1();
  const results = await database.batch([
    database
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
      ),
    database
      .prepare(
        `INSERT INTO enquiry_activity (
          id,
          enquiry_id,
          kind,
          content,
          actor_name
        ) VALUES (?, ?, 'created', ?, 'Website')`
      )
      .bind(activityId, id, enquiry.source),
  ]);

  if (!results.every((result) => result.success)) {
    throw new Error("D1 did not confirm the enquiry transaction.");
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

export async function listEnquiryActivity(enquiryId: string) {
  const rows = await getD1()
    .prepare(
      `SELECT
        id,
        enquiry_id AS enquiryId,
        kind,
        content,
        from_status AS fromStatus,
        to_status AS toStatus,
        actor_email AS actorEmail,
        actor_name AS actorName,
        created_at AS createdAt
      FROM enquiry_activity
      WHERE enquiry_id = ?
      ORDER BY created_at DESC, id DESC
      LIMIT 100`
    )
    .bind(enquiryId)
    .all<EnquiryActivityRow>();

  return (rows.results ?? []).map((row): EnquiryActivityRecord => ({
    ...row,
    kind:
      row.kind === "note" || row.kind === "status_change" ? row.kind : "created",
    fromStatus: isEnquiryStatus(row.fromStatus) ? row.fromStatus : null,
    toStatus: isEnquiryStatus(row.toStatus) ? row.toStatus : null,
  }));
}

export async function addEnquiryNote(options: {
  enquiryId: string;
  note: string;
  actorEmail: string;
  actorName: string;
}) {
  const id = crypto.randomUUID();
  const result = await getD1()
    .prepare(
      `INSERT INTO enquiry_activity (
        id,
        enquiry_id,
        kind,
        content,
        actor_email,
        actor_name
      )
      SELECT ?, id, 'note', ?, ?, ?
      FROM enquiries
      WHERE id = ?`
    )
    .bind(
      id,
      options.note,
      options.actorEmail,
      options.actorName,
      options.enquiryId
    )
    .run();

  return Number(result.meta.changes ?? 0) > 0;
}

export async function updateEnquiryStatus(
  id: string,
  status: EnquiryStatus,
  actor: { email: string; name: string }
) {
  const database = getD1();
  const current = await database
    .prepare("SELECT status FROM enquiries WHERE id = ?")
    .bind(id)
    .first<{ status: string }>();

  if (!current) return { found: false, changed: false };

  const currentStatus = isEnquiryStatus(current.status) ? current.status : "new";
  if (currentStatus === status) return { found: true, changed: false };

  const activityId = crypto.randomUUID();
  const results = await database.batch([
    database
      .prepare("UPDATE enquiries SET status = ? WHERE id = ?")
      .bind(status, id),
    database
      .prepare(
        `INSERT INTO enquiry_activity (
          id,
          enquiry_id,
          kind,
          from_status,
          to_status,
          actor_email,
          actor_name
        ) VALUES (?, ?, 'status_change', ?, ?, ?, ?)`
      )
      .bind(activityId, id, currentStatus, status, actor.email, actor.name),
  ]);

  if (!results.every((result) => result.success)) {
    throw new Error("D1 did not confirm the status update transaction.");
  }

  return { found: true, changed: true };
}
