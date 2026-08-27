"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  FileText,
  Home,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import styles from "../estate-agents/estate-agents.module.css";
import contactStyles from "./contact.module.css";

const claimTypes = [
  ["fire", "Fire Damage"],
  ["flood", "Flood Damage"],
  ["burst-pipes", "Burst Pipes"],
  ["storm", "Storm Damage"],
  ["impact", "Impact Damage"],
  ["other", "Other"],
];

const offices = [
  { city: "London", line1: "536 Barking Road", line2: "London, E13 8QE", phone: "020 3410 8351", phoneHref: "02034108351" },
  { city: "Newcastle", line1: "288a Stanhope Street", line2: "Newcastle upon Tyne, NE4 5JU", phone: "0191 691 3162", phoneHref: "01916913162" },
  { city: "Manchester", line1: "First Floor, Swan Buildings, 20 Swan Street", line2: "Manchester, M4 5JW" },
  { city: "Birmingham", line1: "Office 1, Izabella House, 24-26 Regent Place", line2: "Birmingham, B1 3NJ" },
  { city: "Leeds", line1: "Ground Floor, Radley House, Richardshaw Road", line2: "Leeds, LS28 6LE" },
  { city: "Liverpool", line1: "Level One, Basecamp Liverpool, 49 Jamaica Street", line2: "Liverpool, L1 0AH" },
  { city: "Glasgow", line1: "Office 1, Technology House, 9 Newton Place", line2: "Glasgow, G3 7PR" },
  { city: "Edinburgh", line1: "3F1, Third Floor, 3 Hill Street, New Town", line2: "Edinburgh, EH2 3JP" },
];

const faqs = [
  {
    question: "How do I start my insurance claim with Home Claims Assist?",
    answer:
      "Call us on 020 3410 8351 or complete the consultation form above. We will arrange a free, no-obligation conversation, discuss your situation, and explain how we can help. There is no upfront cost or commitment required.",
  },
  {
    question: "Do I have to pay anything to get started?",
    answer:
      "No. Your initial consultation and property assessment are completely free. Our fee structure is transparent and agreed in writing before we begin any work.",
  },
  {
    question: "How long does the claims process take?",
    answer:
      "Every claim is different. Minor claims may settle in a few weeks, while complex cases involving major structural damage can take several months. We work to progress your claim as quickly as possible and keep you informed at every stage.",
  },
  {
    question: "Can I contact you outside of office hours?",
    answer:
      "Yes. Our office hours are Monday to Friday, 9:30 AM to 5:30 PM, and a 24/7 emergency line is available for urgent situations. You can submit the consultation form at any time and we will respond promptly.",
  },
  {
    question: "Do you cover the whole of the UK?",
    answer:
      "Yes. With offices in London, Newcastle, Manchester, Birmingham, Leeds, Liverpool, Glasgow and Edinburgh, we provide nationwide coverage across England, Scotland and Wales. Our loss assessors travel to your property wherever you are in the UK.",
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          claimType: data.get("claimType") ?? "",
          message: data.get("message") ?? "",
          source: "contact",
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "We could not send your enquiry.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${contactStyles.contactPage}`}>
        <section className={`${styles.hero} ${contactStyles.contactHero}`}>
          <div className={`${styles.heroShade} ${contactStyles.contactHeroShade}`} />
          <div className={`page-width ${styles.heroInner} ${contactStyles.contactHeroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Contact Us</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Contact Us</p>
            <h1>Start Your <em>Claim Today</em></h1>
            <p className={styles.heroCopy}>
              Don&apos;t let your insurance company undervalue your claim. Contact us now for a free, no-obligation consultation and find out how much your claim could be worth.
            </p>
            <div className={contactStyles.heroContactRow} aria-label="Contact highlights">
              <a href="tel:02034108351"><Phone aria-hidden="true" /><span><strong>020 3410 8351</strong><small>24/7 emergency line</small></span></a>
              <a href="mailto:info@homeclaimsassist.co.uk"><Mail aria-hidden="true" /><span><strong>Email our team</strong><small>Reply within two hours</small></span></a>
              <span><Scale aria-hidden="true" /><span><strong>Free consultation</strong><small>No obligation</small></span></span>
            </div>
          </div>
        </section>

        <section className={contactStyles.contactSection}>
          <div className={`page-width ${contactStyles.contactLayout}`}>
            <div className={contactStyles.contactCopy}>
              <p className={styles.eyebrow}>Get In Touch</p>
              <h2>Talk to a loss assessor</h2>
              <p>Whether you&apos;re dealing with fire, flood, storm, burst pipes, or impact damage, our expert loss assessors are ready to help. Your initial consultation is free.</p>
              <div className={contactStyles.contactCards}>
                <a href="tel:02034108351"><Phone aria-hidden="true" /><span><small>London Office</small><strong>020 3410 8351</strong><em>536 Barking Road, London, E13 8QE</em></span><ArrowRight aria-hidden="true" /></a>
                <a href="tel:01916913162"><MapPin aria-hidden="true" /><span><small>Newcastle Office</small><strong>0191 691 3162</strong><em>288a Stanhope Street, Newcastle upon Tyne, NE4 5JU</em></span><ArrowRight aria-hidden="true" /></a>
                <a href="mailto:info@homeclaimsassist.co.uk"><Mail aria-hidden="true" /><span><small>Email Us</small><strong>info@homeclaimsassist.co.uk</strong><em>We respond within two hours</em></span><ArrowRight aria-hidden="true" /></a>
              </div>
              <div className={contactStyles.hoursCard}><Clock3 aria-hidden="true" /><span><strong>Opening Hours</strong><small>Mon–Fri: 9:30 AM–5:30 PM</small></span><em>24/7 emergency line available</em></div>
            </div>

            <form className={contactStyles.consultationForm} onSubmit={submitForm}>
              <div className={contactStyles.formHeading}><p>Free &amp; No Obligation</p><h2>Request a Free Consultation</h2><span>Tell us what happened and a member of our claims team will get back to you.</span></div>
              {submitted ? (
                <div className={contactStyles.formSuccess} role="status">
                  <i><Check aria-hidden="true" /></i>
                  <h3>Thank you — your enquiry has been received.</h3>
                  <p>Your enquiry has been saved. A member of the claims team will contact you shortly.</p>
                  <Button type="button" className="primary-button" onClick={() => { setSubmitted(false); setSubmitError(""); }}>Send another enquiry</Button>
                </div>
              ) : (
                <>
                  <div className={contactStyles.formGrid}>
                    <label htmlFor="firstName">First Name *<Input className={contactStyles.formInput} required id="firstName" name="firstName" placeholder="John" /></label>
                    <label htmlFor="lastName">Last Name *<Input className={contactStyles.formInput} required id="lastName" name="lastName" placeholder="Smith" /></label>
                    <label htmlFor="email">Email Address *<Input className={contactStyles.formInput} required id="email" type="email" name="email" placeholder="john@example.com" /></label>
                    <label htmlFor="phone">Phone Number *<Input className={contactStyles.formInput} required id="phone" type="tel" name="phone" placeholder="020 1234 5678" /></label>
                    <label className={contactStyles.fullField} htmlFor="claimType">Type of Claim
                      <Select name="claimType">
                        <SelectTrigger id="claimType" className={contactStyles.formSelect}><SelectValue placeholder="Select claim type..." /></SelectTrigger>
                        <SelectContent>
                          {claimTypes.map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </label>
                    <label className={contactStyles.fullField} htmlFor="message">Tell Us About Your Claim<Textarea className={contactStyles.formTextarea} id="message" name="message" placeholder="Brief description of the damage..." /></label>
                  </div>
                  {submitError && <p className={contactStyles.formError} role="alert">{submitError}</p>}
                  <Button type="submit" size="lg" className={`primary-button ${contactStyles.submitButton}`} disabled={submitting}>{submitting ? "Sending..." : "Get Your Free Consultation"} {!submitting && <ArrowRight aria-hidden="true" />}</Button>
                  <p className={contactStyles.formDisclaimer}>By submitting this form, you agree to be contacted by Home Claims Assist regarding your insurance claim.</p>
                </>
              )}
            </form>
          </div>
        </section>

        <section className={contactStyles.officesSection}>
          <div className="page-width">
            <SectionHeading eyebrow="Our Offices" title="Find Us Nationwide" copy="Eight offices across England and Scotland. Full UK coverage. Wherever the damage is, we're there." />
            <div className={contactStyles.officeGrid}>
              {offices.map((office) => (
                <article key={office.city}>
                  <MapPin aria-hidden="true" />
                  <h3>{office.city}</h3>
                  <address>{office.line1}<br />{office.line2}</address>
                  {office.phone && <a href={`tel:${office.phoneHref}`}><Phone aria-hidden="true" /> {office.phone}</a>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading eyebrow="Explore More" title="Related Services" copy="See how we manage your claim and how independent representation protects your position." />
            <div className={styles.relatedGrid}>
              <Link href="/our-process"><FileText aria-hidden="true" /><span><strong>Our Claims Process</strong><small>See how we handle your insurance claim step by step.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowner Claims</strong><small>Complete insurance claim support for property owners.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/loss-assessor-vs-loss-adjuster"><Scale aria-hidden="true" /><span><strong>Loss Assessor vs Adjuster</strong><small>Understand who works for you and who works for the insurer.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div><p className={styles.eyebrow}>Common Questions</p><h2>Frequently Asked Questions</h2><p>Call our claims team if you need an immediate answer about damage, cover, or the next step in your insurance claim.</p><a href="tel:02034108351"><Phone aria-hidden="true" /> Speak to our team</a></div>
            <Accordion type="single" collapsible defaultValue="faq-0" className={styles.faqList}>
              {faqs.map((faq, index) => (
                <AccordionItem value={`faq-${index}`} key={faq.question} className={styles.faqItem}><AccordionTrigger className={styles.faqTrigger}>{faq.question}</AccordionTrigger><AccordionContent className={styles.faqContent}>{faq.answer}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className={styles.sectionHeading}><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2><p>{copy}</p></div>;
}
