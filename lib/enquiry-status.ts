export const ENQUIRY_STATUSES = [
  "new",
  "contacted",
  "in_progress",
  "resolved",
] as const;

export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export const ENQUIRY_STATUS_LABELS: Record<EnquiryStatus, string> = {
  new: "New",
  contacted: "Contacted",
  in_progress: "In progress",
  resolved: "Resolved",
};

export function isEnquiryStatus(value: unknown): value is EnquiryStatus {
  return ENQUIRY_STATUSES.includes(value as EnquiryStatus);
}
