import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Camera,
  Check,
  Clock3,
  CloudLightning,
  Droplets,
  Flame,
  Hammer,
  HeartHandshake,
  Home,
  Hotel,
  PackageCheck,
  Phone,
  Receipt,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Warehouse,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import styles from "./fire-damage.module.css";

export const metadata: Metadata = {
  title: "Fire Damage Claim | Independent Loss Assessors",
  description:
    "Independent fire damage insurance claim support for structural repairs, smoke and soot, contents, accommodation, rental income, and business interruption across the UK.",
};

const immediateSteps = [
  {
    title: "Make sure everyone is safe",
    copy: "Stay outside and do not re-enter until the emergency services confirm that the building is safe.",
    icon: AlertTriangle,
  },
  {
    title: "Notify your insurer",
    copy: "Report that a fire occurred. You can provide the detailed claim evidence after the immediate situation is controlled.",
    icon: Phone,
  },
  {
    title: "Document the damage",
    copy: "When it is safe, photograph and film affected rooms, belongings, smoke spread, and damage caused during firefighting.",
    icon: Camera,
  },
  {
    title: "Keep every receipt",
    copy: "Save evidence of hotels, meals, emergency clothing, travel, storage, and other necessary costs caused by displacement.",
    icon: Receipt,
  },
  {
    title: "Preserve damaged items",
    copy: "Do not dispose of contents until they have been recorded and the insurer or your assessor agrees they can be removed.",
    icon: PackageCheck,
  },
  {
    title: "Get independent advice",
    copy: "Early professional input helps protect evidence, identify hidden damage, and set the claim up correctly from the start.",
    icon: ShieldCheck,
  },
];

const coveredLosses = [
  {
    title: "Structural repairs",
    copy: "Demolition and rebuilding of fire-damaged walls, floors, ceilings, roofing, and structural elements.",
    icon: Hammer,
  },
  {
    title: "Contents replacement",
    copy: "Furniture, electronics, clothing, valuables, and other insured belongings damaged by fire, heat, smoke, or water.",
    icon: PackageCheck,
  },
  {
    title: "Smoke and soot damage",
    copy: "Contamination that spreads beyond the fire area into decorations, soft furnishings, ventilation, and electronics.",
    icon: SprayCan,
  },
  {
    title: "Emergency protection",
    copy: "Boarding, temporary fencing, security, weatherproofing, debris removal, and urgent work to make the site safe.",
    icon: ShieldCheck,
  },
  {
    title: "Alternative accommodation",
    copy: "Suitable temporary housing and related insured costs while a home is unsafe or uninhabitable.",
    icon: Hotel,
  },
  {
    title: "Specialist cleaning",
    copy: "Fire and smoke decontamination, odour treatment, surface cleaning, and restoration by appropriate specialists.",
    icon: Sparkles,
  },
  {
    title: "Loss of rental income",
    copy: "Covered rent missed while an insured rental property cannot be occupied during repairs.",
    icon: Building2,
  },
  {
    title: "Business interruption",
    copy: "Covered revenue losses and increased costs of working while commercial premises are restored.",
    icon: Warehouse,
  },
];

const assessorWork = [
  "Independent structural, heat, smoke, soot, and water-damage assessment",
  "Room-by-room contents inventory with supported replacement values",
  "Checks for hidden damage to electrics, insulation, voids, and structural materials",
  "Policy review covering buildings, contents, accommodation, rent, or interruption",
  "A documented repair scope and direct negotiation with the insurer's team",
];

const insurerRisks = [
  "The cause of the fire or policy compliance may be questioned",
  "Repair costs and contents can be valued below realistic replacement prices",
  "Hidden smoke, heat, water, and structural damage may be missed",
  "Items can be excluded when evidence or ownership is not properly demonstrated",
  "An early offer may arrive before the complete loss is understood",
];

const claimTimelines = [
  ["Minor", "A contained kitchen or single-room fire", "8–16 weeks"],
  ["Moderate", "Several rooms affected or smoke throughout", "3–6 months"],
  ["Major", "Structural damage or partial collapse", "6–12 months"],
  ["Total loss", "Extensive rebuilding or complete reinstatement", "9–18 months"],
];

const mistakes = [
  {
    title: "Accepting the first offer",
    copy: "An early settlement may arrive before hidden damage, the full repair specification, or every insured expense is known.",
  },
  {
    title: "Missing smoke damage",
    copy: "Smoke and soot can contaminate rooms and belongings far beyond the visible burn area, including electronics and soft furnishings.",
  },
  {
    title: "Disposing of items too soon",
    copy: "Removing damaged contents before they are inventoried can make ownership, condition, and replacement value harder to prove.",
  },
  {
    title: "Forgetting accommodation",
    copy: "Reasonable temporary housing and related costs may be covered when the property cannot be lived in safely.",
  },
  {
    title: "Managing a major loss alone",
    copy: "The insurer has its own experienced team. Independent representation gives your evidence and valuation equal professional weight.",
  },
];

const faqs = [
  {
    question: "What should I do immediately after a fire at my property?",
    answer:
      "Prioritise safety, follow the emergency services' instructions, and do not re-enter until permitted. Notify your insurer, take photographs only from safe areas, retain damaged items, and keep receipts for emergency expenses and temporary accommodation.",
  },
  {
    question: "Does fire insurance cover smoke damage too?",
    answer:
      "Most fire cover also responds to resulting smoke and soot damage, subject to the policy. Smoke can affect decorations, furnishings, clothing, electronics, and parts of the building that the flames never reached, so it should be documented carefully.",
  },
  {
    question: "How long does a fire damage claim take?",
    answer:
      "The timeline depends on the severity, safety investigations, structural work, insurer decisions, and contractor availability. A contained fire can take weeks, while a major rebuild can take many months. Strong evidence and active claim management help avoid preventable delays.",
  },
  {
    question: "Will my insurer pay for alternative accommodation?",
    answer:
      "If the insured property is uninhabitable, many home policies include reasonable alternative-accommodation cover. The amount, standard, and duration depend on the wording and the expected reinstatement period.",
  },
  {
    question: "Can you help if my fire claim has been undervalued?",
    answer:
      "Yes. We can review the insurer's scope and offer against the damage, policy, realistic reinstatement costs, contents schedule, accommodation, and other insured losses before further negotiation.",
  },
  {
    question: "What costs can a fire damage claim include?",
    answer:
      "Depending on the policy, a claim can include structural repairs, contents replacement, smoke remediation, professional cleaning, debris removal, emergency protection, temporary accommodation, lost rent, and business interruption.",
  },
];

export default function FireDamagePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Fire Damage</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Fire Damage Claims</p>
            <h1>Expert Assessors Fighting for Your <em>Settlement</em></h1>
            <p className={styles.heroCopy}>
              A fire can change everything in minutes. We take control of the evidence, insurer discussions, temporary arrangements, repair scope, and settlement so you can focus on recovery.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.reassurance} aria-label="Service highlights">
              <span><Clock3 aria-hidden="true" /><strong>24/7 Support</strong><small>Emergency guidance</small></span>
              <span><Flame aria-hidden="true" /><strong>Fire Specialists</strong><small>Visible and hidden damage</small></span>
              <span><Hotel aria-hidden="true" /><strong>Accommodation</strong><small>Covered temporary housing</small></span>
              <span><ShieldCheck aria-hidden="true" /><strong>Your Assessor</strong><small>Independent representation</small></span>
            </div>
          </div>
        </section>

        <nav className={styles.perilNav} aria-label="Types of property damage">
          <div className="page-width">
            <Link className={styles.activePeril} href="/fire-damage"><Flame aria-hidden="true" /> Fire Damage</Link>
            <Link href="/flood-damage"><Waves aria-hidden="true" /> Flood Damage</Link>
            <Link href="/burst-pipes"><Droplets aria-hidden="true" /> Burst Pipes</Link>
            <Link href="/#perils"><CloudLightning aria-hidden="true" /> Storm Damage</Link>
            <Link href="/#perils"><Building2 aria-hidden="true" /> Impact Damage</Link>
          </div>
        </nav>

        <section className={styles.immediateSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="The First 24–48 Hours"
              title="What Should You Do Immediately After a Fire?"
              copy="Safety comes first. Once the emergency is under control, these steps help preserve the evidence and costs needed for a complete insurance claim."
            />
            <ol className={styles.immediateGrid}>
              {immediateSteps.map(({ title, copy, icon: Icon }, index) => (
                <li key={title}>
                  <div><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
            <div className={styles.safetyCallout}>
              <AlertTriangle aria-hidden="true" />
              <div><strong>Never risk your safety for claim evidence.</strong><p>Only enter or approach damaged areas after the emergency services or an appropriate professional confirms it is safe.</p></div>
              <Button asChild className="primary-button"><Link href="/#contact">Get emergency advice <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.coverSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Policy Coverage"
              title="What Can a Fire Damage Claim Cover?"
              copy="The full loss is often much wider than the visible burn area. We inspect, document, and value each covered consequence of the fire."
              light
            />
            <div className={styles.coverGrid}>
              {coveredLosses.map(({ title, copy, icon: Icon }) => (
                <article key={title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.representationSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Who Represents Whom?"
              title="The Insurer's Loss Adjuster and Your Loss Assessor"
              copy="Your insurer appoints an adjuster to investigate the claim for them. A loss assessor gives you independent professional representation throughout the same process."
            />
            <div className={styles.comparisonGrid}>
              <article className={styles.insurerCard}>
                <div className={styles.comparisonTitle}><AlertTriangle aria-hidden="true" /><span><small>Insurer&apos;s Loss Adjuster</small><h3>What can put your claim at risk</h3></span></div>
                <ul>{insurerRisks.map((item) => <li key={item}><span>×</span>{item}</li>)}</ul>
              </article>
              <article className={styles.assessorCard}>
                <div className={styles.comparisonTitle}><ShieldCheck aria-hidden="true" /><span><small>Your Loss Assessor</small><h3>What we prepare for you</h3></span></div>
                <ul>{assessorWork.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
              </article>
            </div>

            <div className={styles.timelinePanel}>
              <div>
                <p className={styles.eyebrow}>Typical Timescales</p>
                <h2>How Long Can a Fire Damage Claim Take?</h2>
                <p>These broad ranges vary with investigations, structural complexity, approvals, building regulations, and contractor availability.</p>
              </div>
              <div className={styles.tableShell}>
                <Table className={styles.timelineTable}>
                  <TableHeader>
                    <TableRow><TableHead>Severity</TableHead><TableHead>Typical scope</TableHead><TableHead>Timeline</TableHead></TableRow>
                  </TableHeader>
                  <TableBody>
                    {claimTimelines.map(([severity, scope, timeline]) => (
                      <TableRow key={severity}><TableCell><strong>{severity}</strong></TableCell><TableCell>{scope}</TableCell><TableCell><span>{timeline}</span></TableCell></TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.supportSection}>
          <div className={`page-width ${styles.supportLayout}`}>
            <div className={styles.supportVisual} aria-hidden="true">
              <div><HeartHandshake /><span><strong>People first</strong><small>We carry the claim workload</small></span></div>
            </div>
            <div className={styles.supportCopy}>
              <p className={styles.eyebrow}>Support Beyond the Paperwork</p>
              <h2>Dealing With the Impact of a Property Fire</h2>
              <p>
                Fire damage is not only a building problem. It can mean losing personal belongings, closing a business, displacing tenants, or leaving the family home for months.
              </p>
              <p>
                We take the claim administration, inspections, valuations, insurer meetings, negotiation, and reinstatement planning off your shoulders. You keep one clear point of contact while we keep the recovery moving.
              </p>
              <ul>
                <li><Check aria-hidden="true" /> Free initial consultation and claim review</li>
                <li><Check aria-hidden="true" /> UK-wide support for homes, rentals, and businesses</li>
                <li><Check aria-hidden="true" /> Claim management from first assessment to settlement</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/#contact">Talk to an assessor <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.mistakesSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Protect Your Claim"
              title="Common Fire Damage Claim Mistakes"
              copy="The decisions made just after a fire can affect both the evidence available and the final value of the settlement."
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

        <section className={styles.propertySection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Every Property Type"
              title="Fire Damage Claims for Homes, Rentals, and Businesses"
              copy="The insured losses differ, but the standard stays the same: detailed assessment, complete evidence, realistic valuation, and professional negotiation."
            />
            <div className={styles.propertyGrid}>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowners</strong><small>Buildings, contents, accommodation, and full reinstatement.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/landlords"><Building2 aria-hidden="true" /><span><strong>Landlords</strong><small>Rental properties, tenant liaison, repairs, and covered rent.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/business-owners"><Warehouse aria-hidden="true" /><span><strong>Business Owners</strong><small>Commercial premises, stock, equipment, and interruption.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div className="page-width">
            <div>
              <p>Suffered fire damage to your property?</p>
              <h2>Don&apos;t face the insurance claim alone.</h2>
            </div>
            <Button asChild className={styles.whiteButton}><Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore other common property claims or learn more about our support for homeowners."
            />
            <div className={styles.relatedGrid}>
              <Link href="/#perils"><CloudLightning aria-hidden="true" /><span><strong>Storm Damage Claims</strong><small>Roof, structure, water ingress, and emergency protection.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/flood-damage"><Waves aria-hidden="true" /><span><strong>Flood Damage Claims</strong><small>Assessment, drying, decontamination, and reinstatement.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowner Claims</strong><small>Complete insurance claim support for property owners.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>We&apos;ve Got Answers</p>
              <h2>Frequently Asked Questions</h2>
              <p>Call our team for immediate guidance if a fire has just occurred or if an insurer&apos;s offer does not reflect the loss.</p>
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
