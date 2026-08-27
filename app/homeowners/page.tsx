import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CarFront,
  Check,
  Clock3,
  CloudLightning,
  Droplets,
  FileCheck2,
  Flame,
  Hammer,
  Home,
  Hotel,
  Phone,
  ShieldCheck,
  Sofa,
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

import styles from "./homeowners.module.css";

export const metadata: Metadata = {
  title: "Home Insurance Claims | Homeowner Loss Assessor",
  description:
    "Independent loss assessor support for homeowners dealing with fire, flood, storm, escape of water, and impact damage claims across the UK.",
};

const damageTypes = [
  {
    title: "Fire & Smoke Damage",
    copy: "Structural repairs, smoke remediation, damaged contents, alternative accommodation, and full reinstatement after a house fire.",
    icon: Flame,
    href: "/fire-damage",
  },
  {
    title: "Flood Damage",
    copy: "Drying programmes, contamination clean-up, structural assessment, and contents claims following internal or external flooding.",
    icon: Waves,
    href: "/#perils",
  },
  {
    title: "Storm Damage",
    copy: "Roof repairs, water ingress, fallen trees, fencing, outbuildings, and emergency work after severe weather.",
    icon: CloudLightning,
    href: "/#perils",
  },
  {
    title: "Burst Pipes",
    copy: "Escape-of-water damage to ceilings, floors, electrics, and hidden areas behind walls, including trace and access work.",
    icon: Droplets,
    href: "/#perils",
  },
  {
    title: "Impact Damage",
    copy: "Vehicle collisions, falling trees and objects, plus the structural and contents damage caused by an accidental impact.",
    icon: CarFront,
    href: "/#perils",
  },
];

const policyCover = [
  { title: "Buildings cover", copy: "Walls, floors, ceilings, roofing, windows, fitted kitchens, and bathrooms.", icon: Home },
  { title: "Contents cover", copy: "Furniture, electronics, clothing, personal belongings, and insured valuables.", icon: Sofa },
  { title: "Alternative accommodation", copy: "Temporary housing while the property is unsafe or uninhabitable.", icon: Hotel },
  { title: "Emergency repairs", copy: "Making the property safe, secure, and weatherproof after the incident.", icon: Hammer },
  { title: "Professional fees", copy: "Surveyors, structural engineers, specialist reports, and professional assessments.", icon: FileCheck2 },
  { title: "Evidence and inventories", copy: "Detailed photographic records and itemised contents schedules supporting the claim.", icon: Camera },
];

const mistakes = [
  {
    title: "Accepting the first offer",
    copy: "An early offer may not reflect hidden damage, the true repair specification, or every part of your policy entitlement.",
  },
  {
    title: "Cleaning up before documenting",
    copy: "Photographs, video, and an inventory taken before disposal or repairs provide essential evidence for the claim.",
  },
  {
    title: "Undervaluing damaged contents",
    copy: "Items in cupboards, lofts, garages, and storage areas are easily forgotten, while replacement costs add up quickly.",
  },
  {
    title: "Missing accommodation costs",
    copy: "If the home is uninhabitable, temporary housing and related costs may form an important part of the settlement.",
  },
  {
    title: "Managing a complex claim alone",
    copy: "Insurers have experienced claims teams. Independent representation helps ensure your evidence and valuation receive equal weight.",
  },
];

const faqs = [
  {
    question: "What does a loss assessor do for a homeowner?",
    answer:
      "A loss assessor works for you, not the insurance company. They document the damage, prepare and value the claim, manage insurer communication, negotiate the settlement, and can coordinate reinstatement work.",
  },
  {
    question: "How quickly can the team respond?",
    answer:
      "Initial guidance is available immediately by phone. Once instructed, the team can begin insurer contact and arrange the first assessment, with urgent cases prioritised.",
  },
  {
    question: "Do I pay anything before the claim begins?",
    answer:
      "The initial consultation and assessment are free. Any fee for ongoing claim management is explained and agreed in writing before work starts.",
  },
  {
    question: "What kinds of property damage can you help with?",
    answer:
      "Support covers common insured events including fire and smoke, flood, burst pipes and escape of water, storm, and impact damage. The team can review unusual situations during the free consultation.",
  },
  {
    question: "Can you help after the insurer has already made an offer?",
    answer:
      "Yes. An existing offer can be reviewed against the policy, repair scope, contents valuation, and available evidence before further negotiation is considered.",
  },
];

export default function HomeownersPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Homeowners</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Homeowners</p>
            <h1>Protecting Your <em>Home</em> With Us</h1>
            <p className={styles.heroCopy}>
              Unexpected property damage can turn normal life upside down. Our independent loss assessors manage the claim, represent your interests, and make sure the full damage is properly valued.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.reassurance} aria-label="Service highlights">
              <span><Clock3 aria-hidden="true" /><strong>24/7 Support</strong><small>Call us anytime</small></span>
              <span><ShieldCheck aria-hidden="true" /><strong>Expert Guidance</strong><small>Years of experience</small></span>
              <span><Home aria-hidden="true" /><strong>Peace of Mind</strong><small>We handle your claim</small></span>
              <span><Check aria-hidden="true" /><strong>Trusted Support</strong><small>From start to settlement</small></span>
            </div>
          </div>
        </section>

        <section className={styles.damageSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="What We Cover"
              title="What Types of Property Damage Can Homeowners Claim For?"
              copy="We manage insurer communication, professional assessments, evidence, valuation, and negotiation across the most common forms of insured property damage."
            />
            <div className={styles.damageGrid}>
              {damageTypes.map(({ title, copy, icon: Icon, href }) => (
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
                <strong>Not sure what your policy covers?</strong>
                <p>If your home has suffered damage, let us review the situation before you accept an insurer&apos;s valuation.</p>
              </div>
              <Button asChild className="primary-button"><Link href="/#contact">Get free advice <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={`page-width ${styles.processLayout}`}>
            <div className={styles.processVisual} aria-hidden="true">
              <div className={styles.processBadge}><strong>98%</strong><span>Success rate</span></div>
              <div className={styles.processNote}><ShieldCheck /><span>Independent representation<br /><strong>Working for you</strong></span></div>
            </div>
            <div className={styles.processCopy}>
              <p className={styles.eyebrow}>The Claims Process</p>
              <h2>How Does a Home Insurance Claim Work?</h2>
              <p>
                Your insurer appoints a loss adjuster to assess the incident on its behalf. The adjuster follows professional standards, but their client remains the insurance company.
              </p>
              <p>
                A loss assessor represents you. We inspect and document the damage, examine the policy, prepare the repair and contents schedules, and manage negotiations through to settlement.
              </p>
              <ul>
                <li><Check aria-hidden="true" /> One point of contact throughout the claim</li>
                <li><Check aria-hidden="true" /> Detailed evidence and professional valuations</li>
                <li><Check aria-hidden="true" /> Direct negotiation with the insurer&apos;s team</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/#process">See our claims process <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.coverSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Policy Coverage"
              title="What Could Your Home Insurance Policy Cover?"
              copy="Every policy is different, but buildings and contents insurance commonly includes much more than the first visible repairs."
              light
            />
            <div className={styles.coverGrid}>
              {policyCover.map(({ title, copy, icon: Icon }) => (
                <article key={title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
            <p className={styles.coverFootnote}>
              A strong claim captures the visible loss, hidden damage, reasonable professional costs, and the work required to return your home to its pre-loss condition.
            </p>
          </div>
        </section>

        <section className={styles.mistakesSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Claims Advice"
              title="Five Mistakes Homeowners Make With Insurance Claims"
              copy="A few early decisions can materially affect the evidence available and the final value of a property claim."
            />
            <ol className={styles.mistakesGrid}>
              {mistakes.map((mistake, index) => (
                <li key={mistake.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{mistake.title}</h3>
                  <p>{mistake.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div className="page-width">
            <div>
              <p>Need help with your home insurance claim?</p>
              <h2>Let an experienced assessor handle the pressure.</h2>
            </div>
            <Button asChild className={styles.whiteButton}><Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Learn more about common home insurance claims and how independent representation protects your position."
            />
            <div className={styles.relatedGrid}>
              <Link href="/fire-damage"><Flame aria-hidden="true" /><span><strong>Fire Damage Claims</strong><small>Support for fire, smoke, contents, and reinstatement claims.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#perils"><Waves aria-hidden="true" /><span><strong>Flood Damage Claims</strong><small>Assessment, drying, decontamination, and full restoration.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#process"><ShieldCheck aria-hidden="true" /><span><strong>Our Claims Process</strong><small>See how we handle a claim from first contact to settlement.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>We&apos;ve Got Answers</p>
              <h2>Frequently Asked Questions</h2>
              <p>Still unsure where to begin? The initial conversation is free and carries no obligation.</p>
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
