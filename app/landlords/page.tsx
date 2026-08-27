import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  Clock3,
  CloudLightning,
  Droplets,
  FileCheck2,
  Flame,
  Home,
  KeyRound,
  Phone,
  PoundSterling,
  ShieldCheck,
  UsersRound,
  Waves,
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

import styles from "./landlords.module.css";

export const metadata: Metadata = {
  title: "Landlord Insurance Claims | Rental Property Loss Assessor",
  description:
    "Independent landlord insurance claim support for rental property damage, lost rent, tenant liaison, and reinstatement across the UK.",
};

const rentalClaims = [
  {
    title: "Burst Pipes & Escape of Water",
    copy: "Leaks, frozen pipes, and escape of water affecting ceilings, floors, walls, electrics, kitchens, and landlord-owned contents.",
    icon: Droplets,
    href: "/#perils",
  },
  {
    title: "Flood Damage",
    copy: "River, surface-water, and drainage flooding, including contamination clean-up, specialist drying, and full reinstatement.",
    icon: Waves,
    href: "/flood-damage",
  },
  {
    title: "Fire & Smoke Damage",
    copy: "Structural and contents damage, smoke remediation, electrical work, temporary protection, and complete property restoration.",
    icon: Flame,
    href: "/fire-damage",
  },
  {
    title: "Storm Damage",
    copy: "Roof damage, water ingress, fallen trees, fencing, emergency repairs, and weatherproofing after severe conditions.",
    icon: CloudLightning,
    href: "/#perils",
  },
];

const tenantSteps = [
  {
    title: "Immediate communication",
    copy: "Tenants receive a clear explanation of what happens next and one reliable point of contact throughout the claim.",
  },
  {
    title: "Alternative accommodation",
    copy: "Where the home is uninhabitable and cover applies, suitable temporary housing is arranged without unnecessary delay.",
  },
  {
    title: "Access coordination",
    copy: "Inspections, surveys, drying visits, and repair works are scheduled around tenants while keeping the claim moving.",
  },
  {
    title: "Reinstatement and re-letting",
    copy: "Repairs are supervised through to handover so the property can return to a safe, lettable condition quickly.",
  },
];

const portfolioSupport = [
  {
    title: "Single point of contact",
    copy: "One dedicated claim manager coordinates insurers, adjusters, contractors, tenants, and letting agents across the case.",
    icon: UsersRound,
  },
  {
    title: "Consistent documentation",
    copy: "Every loss receives detailed photographs, schedules of damage, supporting reports, and properly costed repair specifications.",
    icon: FileCheck2,
  },
  {
    title: "Loss of rent recovery",
    copy: "Rental income is evidenced using tenancy agreements, payment records, agent statements, and market valuations where relevant.",
    icon: PoundSterling,
  },
  {
    title: "Buildings and contents",
    copy: "The building fabric, fixtures, white goods, furnishings, and other insured landlord-owned items are assessed together.",
    icon: Building2,
  },
];

const faqs = [
  {
    question: "How do you help landlords with insurance claims?",
    answer:
      "We manage the landlord insurance claim from assessment to settlement. That includes documenting damage, speaking with the insurer, coordinating tenants and repairs, valuing lost rental income, and negotiating on your behalf.",
  },
  {
    question: "Can you help me recover lost rental income?",
    answer:
      "Yes. Where your policy includes loss-of-rent cover, we prepare the evidence needed to show the income missed while insured damage prevents occupation or normal letting of the property.",
  },
  {
    question: "Will you liaise with my tenants during the claim?",
    answer:
      "Yes. We can provide claim updates, coordinate access for inspections and works, and help arrange alternative accommodation where the policy covers it. Your property manager or letting agent can remain informed without handling the daily administration.",
  },
  {
    question: "What types of rental property damage do you handle?",
    answer:
      "Support covers common insured events including burst pipes, escape of water, fire, flood, storm, impact, subsidence, and malicious damage. The team can review unusual circumstances during the initial consultation.",
  },
  {
    question: "How quickly can I re-let my property after a claim?",
    answer:
      "Timing depends on the damage and insurer approvals, but the process is structured to reduce avoidable delay. We coordinate assessments, evidence, contractors, and reinstatement so the property can return to a lettable standard as soon as practical.",
  },
  {
    question: "Do I need to inform tenants before appointing a loss assessor?",
    answer:
      "You may appoint a loss assessor at any stage. We then agree a communication plan with you and handle tenant contact professionally and sensitively as part of managing your claim.",
  },
];

export default function LandlordsPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Landlords</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Landlord Insurance Claims</p>
            <h1>Safeguarding Your <em>Investments</em> With Us</h1>
            <p className={styles.heroCopy}>
              From emergency damage to lost rent and displaced tenants, our independent loss assessors manage the whole claim and help return your property to a lettable condition.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.reassurance} aria-label="Service highlights">
              <span><Clock3 aria-hidden="true" /><strong>24/7 Support</strong><small>Call us anytime</small></span>
              <span><PoundSterling aria-hidden="true" /><strong>Rent Recovery</strong><small>Document every covered loss</small></span>
              <span><UsersRound aria-hidden="true" /><strong>Tenant Liaison</strong><small>One point of contact</small></span>
              <span><KeyRound aria-hidden="true" /><strong>Ready to Re-let</strong><small>Repairs managed through handover</small></span>
            </div>
          </div>
        </section>

        <section className={styles.claimsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Rental Property Claims"
              title="What Are the Most Common Claims for Rental Properties?"
              copy="Tenant reporting, remote management, and the pressure to protect rental income make landlord claims different. We coordinate every moving part for you."
            />
            <div className={styles.claimsGrid}>
              {rentalClaims.map(({ title, copy, icon: Icon, href }) => (
                <article key={title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link href={href}>Learn more <ArrowRight aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
            <div className={styles.adviceCallout}>
              <div>
                <strong>Damage reported by a tenant?</strong>
                <p>Get advice before evidence is cleared away or permanent repairs begin.</p>
              </div>
              <Button asChild className="primary-button"><Link href="/#contact">Get free advice <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.rentSection}>
          <div className={`page-width ${styles.rentLayout}`}>
            <div className={styles.rentVisual} aria-hidden="true">
              <div className={styles.rentBadge}><PoundSterling /><span><strong>Lost rent</strong><small>Properly evidenced</small></span></div>
              <div className={styles.rentNote}><CalendarClock /><span>From first missed payment<br /><strong>Through reinstatement</strong></span></div>
            </div>
            <div className={styles.rentCopy}>
              <p className={styles.eyebrow}>Rental Income</p>
              <h2>Can Landlords Claim for Lost Rental Income?</h2>
              <p>
                Loss of rent is easily overlooked when attention is focused on repairing the building. If insured damage makes the property uninhabitable, a landlord policy may also protect the income missed during the reinstatement period.
              </p>
              <p>
                We gather tenancy agreements, rent records, letting-agent statements, and appropriate market valuations to demonstrate the loss. That evidence gives the insurer a clear, supportable calculation instead of an estimate that can be reduced or rejected.
              </p>
              <div className={styles.rentCovers}>
                <span><Check aria-hidden="true" /> Rent missed during covered repairs</span>
                <span><Check aria-hidden="true" /> Income lost through damage-related voids</span>
                <span><Check aria-hidden="true" /> Rent lost during drying and strip-out</span>
                <span><Check aria-hidden="true" /> Covered costs of returning to market</span>
              </div>
              <Button asChild className="primary-button"><Link href="/#contact">Review my claim <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.tenantSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Tenant Liaison"
              title="How Do You Manage Tenants During an Insurance Claim?"
              copy="Clear communication keeps tenants safe, reduces complaints, and lets assessors and contractors progress the claim without avoidable delays."
              light
            />
            <ol className={styles.tenantSteps}>
              {tenantSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
            <p className={styles.tenantFootnote}>
              If a letting agent manages the property, we work alongside them and keep their team updated while taking the day-to-day claim administration off their desk.
            </p>
          </div>
        </section>

        <section className={styles.portfolioSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Portfolio Support"
              title="How Does Claims Management Work for Property Portfolios?"
              copy="Whether you own one buy-to-let or a multi-property portfolio, every claim receives the same disciplined documentation, communication, and oversight."
            />
            <div className={styles.portfolioGrid}>
              {portfolioSupport.map(({ title, copy, icon: Icon }) => (
                <article key={title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
            <div className={styles.portfolioCallout}>
              <div><Building2 aria-hidden="true" /></div>
              <span><strong>HMOs and multi-unit properties</strong><small>We coordinate multiple tenancies, accommodation needs, repair access, and separate rental-income streams within one managed claim.</small></span>
            </div>
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div className="page-width">
            <div>
              <p>Rental property suffered damage?</p>
              <h2>Protect your investment and recover covered rental income.</h2>
            </div>
            <Button asChild className={styles.whiteButton}><Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Learn more about common rental-property losses and the professional support available throughout a claim."
            />
            <div className={styles.relatedGrid}>
              <Link href="/#perils"><Droplets aria-hidden="true" /><span><strong>Burst Pipe Claims</strong><small>Escape-of-water assessment, drying, evidence, and reinstatement.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#partners"><Home aria-hidden="true" /><span><strong>Estate Agent Partners</strong><small>Claims management support for managed-property portfolios.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#process"><ShieldCheck aria-hidden="true" /><span><strong>Our Claims Process</strong><small>See how we manage a claim from first contact to settlement.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>We&apos;ve Got Answers</p>
              <h2>Frequently Asked Questions</h2>
              <p>Tell us what happened and we&apos;ll explain the next steps for your property, tenants, and rental-income claim.</p>
              <a href="tel:02034108351"><Phone aria-hidden="true" /> Speak to our team</a>
            </div>
            <Accordion type="single" collapsible defaultValue="faq-0" className={styles.faqList}>
              {faqs.map((faq, index) => (
                <AccordionItem value={`faq-${index}`} key={faq.question} className={styles.faqItem}>
                  <AccordionTrigger className={styles.faqTrigger}>{faq.question}</AccordionTrigger>
                  <AccordionContent className={styles.faqContent}>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  light?: boolean;
}) {
  return (
    <div className={`${styles.sectionHeading} ${light ? styles.light : ""}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}
