import type { Metadata } from "next";

import { ContactPage } from "./contact-page";

export const metadata: Metadata = {
  title: "Contact Us | Free Insurance Claim Consultation | Home Claims Assist",
  description:
    "Contact Home Claims Assist for a free, no-obligation property insurance claim consultation. Speak to an expert loss assessor anywhere in the UK.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
