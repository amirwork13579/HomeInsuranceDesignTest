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
  Factory,
  Flame,
  Home,
  Hotel,
  Layers3,
  PackageCheck,
  Phone,
  PlugZap,
  PoundSterling,
  Power,
  Receipt,
  ShieldCheck,
  SprayCan,
  Trees,
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

import styles from "./flood-damage.module.css";

export const metadata: Metadata = {
  title: "Flood Damage Insurance Claims | Independent Loss Assessors",
  description:
    "Independent flood insurance claim support for drying, contamination, structural repairs, contents, accommodation, lost rent, and business losses across the UK.",
};

const immediateSteps = [
  {
    title: "Prioritise your safety",
    copy: "Avoid contact with standing water because it can hide hazards and may contain sewage, chemicals, or other contaminants.",
    icon: AlertTriangle,
  },
  {
    title: "Turn off utilities safely",
    copy: "Isolate electricity and gas only when it is safe. Never touch electrical equipment that may have contacted flood water.",
    icon: Power,
  },
  {
    title: "Notify your insurer",
    copy: "Report the flooding promptly and record the claim reference, but avoid agreeing a repair scope before the damage is assessed.",
    icon: Phone,
  },
  {
    title: "Document every room",
    copy: "Photograph water lines, contaminated areas, damaged contents, external conditions, and the state of rooms before clean-up.",
    icon: Camera,
  },
  {
    title: "Keep emergency receipts",
    copy: "Retain proof of accommodation, meals, essential clothing, travel, storage, pumping, and other urgent flood-related costs.",
    icon: Receipt,
  },
  {
    title: "Get independent advice",
    copy: "Early guidance helps preserve evidence and ensures drying, contamination, and hidden damage are included from the outset.",
    icon: ShieldCheck,
  },
];

const coveredLosses = [
  {
    title: "Structural drying and repair",
    copy: "Industrial dehumidification and moisture control followed by reinstatement of walls, floors, ceilings, and plasterwork.",
    icon: Droplets,
  },
  {
    title: "Contents replacement",
    copy: "Furniture, floor coverings, appliances, electronics, clothing, stock, and other insured items damaged or contaminated by water.",
    icon: PackageCheck,
  },
  {
    title: "Contamination and cleaning",
    copy: "Specialist decontamination, mould remediation, deep cleaning, and safe disposal where polluted water entered the property.",
    icon: SprayCan,
  },
  {
    title: "Emergency works",
    copy: "Water extraction, boarding, temporary weatherproofing, security, and reasonable measures that prevent further damage.",
    icon: ShieldCheck,
  },
  {
    title: "Alternative accommodation",
    copy: "Suitable temporary housing and related insured costs while a home is unsafe or cannot be occupied during drying and repairs.",
    icon: Hotel,
  },
  {
    title: "Electrical and plumbing",
    copy: "Testing and replacement of damaged wiring, sockets, consumer units, boilers, heating components, and plumbing systems.",
    icon: PlugZap,
  },
  {
    title: "Gardens and external areas",
    copy: "Covered damage to fencing, walls, driveways, drainage, garages, and outbuildings affected by the flood.",
    icon: Trees,
  },
  {
    title: "Loss of rental income",
    copy: "Covered rent missed while an insured rental property remains uninhabitable through drying and reinstatement.",
    icon: PoundSterling,
  },
];

const hiddenDamage = [
  "Saturated insulation behind walls and beneath floors",
  "Weakened floor joists, subfloors, and structural materials",
  "Damaged wiring and electrical components inside cavities",
  "Contaminated cavity-wall insulation that cannot be dried safely",
  "Warped timber frames that become apparent during drying",
  "Mould growth behind plasterboard after visible water recedes",
];

const independentAssessment = [
  "Moisture mapping across floors, walls, ceilings, and hidden voids",
  "Structural inspection focused on flood-related deterioration",
  "Room-by-room contents inventory with supported replacement values",
  "Assessment of contamination and the required remediation method",
  "Policy review covering buildings, contents, accommodation, and rent",
  "A coordinated drying, repair, and reinstatement scope for negotiation",
];

const claimTimelines = [
  ["Minor ingress", "A limited area or a single room", "6–12 weeks"],
  ["Moderate flood", "Ground-floor rooms and contents affected", "3–6 months"],
  ["Severe flood", "Multiple floors or extensive structural saturation", "6–12 months"],
  ["Contaminated water", "Sewage or polluted water requiring remediation", "6–12 months"],
];

const faqs = [
  {
    question: "What should I do if my property has flooded?",
    answer:
      "Put safety first and avoid contact with flood water. Isolate utilities only if it is safe, notify your insurer, photograph the damage before clean-up, preserve damaged items where possible, and keep receipts for emergency expenses and temporary accommodation.",
  },
  {
    question: "Does home insurance cover flood damage?",
    answer:
      "Most standard buildings and contents policies include flood cover, but limits, excesses, and exclusions vary. We review the wording and the source of the water before preparing the damage, contents, accommodation, and reinstatement elements of the claim.",
  },
  {
    question: "How long does flood damage take to dry and repair?",
    answer:
      "Professional drying can take weeks or months depending on the depth, duration, construction, and contamination level. Reinstatement should begin only after appropriate moisture targets are reached, so a significant flood claim commonly lasts several months.",
  },
  {
    question: "Can flood water cause hidden property damage?",
    answer:
      "Yes. Moisture and contamination can remain in insulation, subfloors, cavities, electrical systems, joists, and behind plasterboard. These areas require professional inspection and moisture mapping even when visible surfaces appear dry.",
  },
  {
    question: "Will my insurer cover temporary accommodation?",
    answer:
      "If an insured home is uninhabitable, many policies cover reasonable alternative accommodation. The standard, cost limit, and duration depend on the wording and the expected drying and repair period.",
  },
  {
    question: "How does a loss assessor strengthen a flood claim?",
    answer:
      "We document visible and hidden damage, coordinate specialist drying and contamination evidence, prepare contents and repair schedules, review the policy, and negotiate each covered part of the loss with the insurer's team.",
  },
];

export default function FloodDamagePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Flood Damage</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Flood Damage Claims</p>
            <h1>Recovering Your Property With <em>Assurance</em></h1>
            <p className={styles.heroCopy}>
              Flooding leaves visible destruction and hidden moisture behind. We manage the assessment, drying evidence, insurer discussions, repairs, and settlement from the first inspection to reinstatement.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.reassurance} aria-label="Service highlights">
              <span><Clock3 aria-hidden="true" /><strong>24/7 Support</strong><small>Immediate guidance</small></span>
              <span><Droplets aria-hidden="true" /><strong>Moisture Mapping</strong><small>Visible and hidden areas</small></span>
              <span><SprayCan aria-hidden="true" /><strong>Decontamination</strong><small>Specialist remediation</small></span>
              <span><ShieldCheck aria-hidden="true" /><strong>Your Assessor</strong><small>Independent representation</small></span>
            </div>
          </div>
        </section>

        <nav className={styles.perilNav} aria-label="Types of property damage">
          <div className="page-width">
            <Link href="/fire-damage"><Flame aria-hidden="true" /> Fire Damage</Link>
            <Link className={styles.activePeril} href="/flood-damage"><Waves aria-hidden="true" /> Flood Damage</Link>
            <Link href="/#perils"><Droplets aria-hidden="true" /> Burst Pipes</Link>
            <Link href="/#perils"><CloudLightning aria-hidden="true" /> Storm Damage</Link>
            <Link href="/#perils"><Building2 aria-hidden="true" /> Impact Damage</Link>
          </div>
        </nav>

        <section className={styles.immediateSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Act Safely and Quickly"
              title="What Should You Do Immediately After a Flood?"
              copy="The right early decisions protect people, limit further damage, and preserve the evidence needed for a complete insurance claim."
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
              <div><strong>Treat flood water as contaminated.</strong><p>Do not enter standing water or operate electrical equipment until the area is assessed as safe.</p></div>
              <Button asChild className="primary-button"><Link href="/#contact">Get urgent advice <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.coverSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Policy Coverage"
              title="What Can a Flood Damage Claim Cover?"
              copy="A comprehensive flood claim follows the water through the property and accounts for drying, contamination, repairs, contents, and the cost of being displaced."
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

        <section className={styles.hiddenSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Below the Surface"
              title="The Hidden Flood Damage Most People Miss"
              copy="A room can look dry while water remains trapped inside its structure. That unseen moisture can lead to safety problems, mould, and costly future repairs."
            />
            <div className={styles.hiddenLayout}>
              <div className={styles.hiddenVisual} aria-hidden="true">
                <div className={styles.moistureRing}><strong>360°</strong><span>Moisture mapping</span></div>
                <div className={styles.visualNote}><Layers3 /><span>Behind walls and floors<br /><strong>Nothing assumed dry</strong></span></div>
              </div>
              <div className={styles.hiddenCards}>
                <article className={styles.riskCard}>
                  <div><AlertTriangle aria-hidden="true" /><span><small>Hidden Risks</small><h3>What flood water can leave behind</h3></span></div>
                  <ul>{hiddenDamage.map((item) => <li key={item}><span>!</span>{item}</li>)}</ul>
                </article>
                <article className={styles.assessmentCard}>
                  <div><ShieldCheck aria-hidden="true" /><span><small>Independent Assessment</small><h3>What we document for your claim</h3></span></div>
                  <ul>{independentAssessment.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </article>
              </div>
            </div>

            <div className={styles.timelinePanel}>
              <div>
                <p className={styles.eyebrow}>Drying and Reinstatement</p>
                <h2>How Long Can a Flood Damage Claim Take?</h2>
                <p>Flood claims often take longer than other property losses because drying and contamination clearance must be completed before permanent reinstatement begins.</p>
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

        <section className={styles.processSection}>
          <div className={`page-width ${styles.processLayout}`}>
            <div className={styles.processCopy}>
              <p className={styles.eyebrow}>One Coordinated Recovery</p>
              <h2>From Water Extraction to Final Reinstatement</h2>
              <p>
                A flood claim can involve emergency contractors, drying specialists, hygienists, electricians, surveyors, builders, the insurer, and its loss adjuster. Without coordination, evidence and decisions become fragmented.
              </p>
              <p>
                We give you one point of contact and connect every stage of the recovery to the insurance claim. Moisture readings, contamination reports, contents schedules, repair specifications, accommodation, lost rent, and commercial losses are presented as one complete case.
              </p>
              <ul>
                <li><Check aria-hidden="true" /> Specialist drying and contamination evidence</li>
                <li><Check aria-hidden="true" /> Detailed repair and contents schedules</li>
                <li><Check aria-hidden="true" /> Direct insurer negotiation through to settlement</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/#process">See our claims process <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className={styles.processStages}>
              <span><strong>01</strong><small>Extract and make safe</small></span>
              <span><strong>02</strong><small>Map moisture and contamination</small></span>
              <span><strong>03</strong><small>Dry and strip affected materials</small></span>
              <span><strong>04</strong><small>Agree the reinstatement scope</small></span>
              <span><strong>05</strong><small>Repair, restore, and settle</small></span>
            </div>
          </div>
        </section>

        <section className={styles.propertySection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Every Property Type"
              title="Flood Claims for Homeowners, Landlords, and Businesses"
              copy="Flooding affects each property differently. We build the claim around the home, tenancy, or operation that needs to recover."
            />
            <div className={styles.propertyGrid}>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowners</strong><small>Buildings, contents, accommodation, drying, and reinstatement.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/landlords"><Building2 aria-hidden="true" /><span><strong>Landlords</strong><small>Rental properties, tenant liaison, repairs, and covered rent.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/business-owners"><Factory aria-hidden="true" /><span><strong>Business Owners</strong><small>Commercial premises, stock, equipment, and interruption.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div className="page-width">
            <div>
              <p>Property affected by flooding?</p>
              <h2>Let specialists manage the drying, restoration, and claim.</h2>
            </div>
            <Button asChild className={styles.whiteButton}><Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore other water and weather claims or learn about specialist landlord claim support."
            />
            <div className={styles.relatedGrid}>
              <Link href="/#perils"><Droplets aria-hidden="true" /><span><strong>Burst Pipe Claims</strong><small>Escape-of-water assessment, drying, repairs, and contents.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#perils"><CloudLightning aria-hidden="true" /><span><strong>Storm Damage Claims</strong><small>Roof, structure, water ingress, and emergency protection.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/landlords"><Building2 aria-hidden="true" /><span><strong>Landlord Claims</strong><small>Tenant liaison, reinstatement, and covered rental income.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>We&apos;ve Got Answers</p>
              <h2>Frequently Asked Questions</h2>
              <p>Call our team if flooding has just occurred or you are unsure whether the drying and repair scope is complete.</p>
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
