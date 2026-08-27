import { getD1 } from ".";

export type NewEnquiry = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  claimType: string;
  message: string;
  source: "homepage" | "contact";
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
