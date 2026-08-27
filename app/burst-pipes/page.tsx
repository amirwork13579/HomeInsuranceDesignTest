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
  Hammer,
  Home,
  Hotel,
  Layers3,
  PackageCheck,
  Phone,
  PlugZap,
  Power,
  ShieldCheck,
  Sparkles,
  Waves,
  Wrench,
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

import styles from "../flood-damage/flood-damage.module.css";

export const metadata: Metadata = {
  title: "Water Damage & Burst Pipe Insurance Claims | Loss Assessors",
  description:
    "Independent burst-pipe and escape-of-water claim support for drying, hidden moisture, structural repairs, contents, accommodation, and reinstatement across the UK.",
};

const immediateSteps = [
  {
    title: "Turn off the water supply",
    copy: "Close the internal stopcock immediately to stop more water entering the system and limit resulting property damage.",
    icon: Droplets,
  },
  {
    title: "Switch off electrics safely",
    copy: "If water is near sockets, appliances, lights, or the consumer unit, isolate the electricity without touching wet fittings.",
    icon: Power,
  },
  {
    title: "Contain and redirect water",
    copy: "Use containers and towels where practical, then move furniture, electronics, stock, and valuables away from the affected area.",
    icon: PackageCheck,
  },
  {
    title: "Ventilate affected rooms",
    copy: "When conditions are safe, open doors and windows to encourage airflow while waiting for professional water extraction and drying.",
    icon: Waves,
  },
  {
    title: "Document before clean-up",
    copy: "Photograph and film the leak area, ceilings, walls, floors, contents, water paths, and damage before temporary repairs begin.",
    icon: Camera,
  },
  {
    title: "Notify the insurer and call us",
    copy: "Report the escape of water, keep the claim reference, and get independent guidance before agreeing the complete repair scope.",
    icon: ShieldCheck,
  },
];

const coveredLosses = [
  {
    title: "Professional structural drying",
    copy: "Industrial dehumidification, air movement, monitoring, and moisture records across all affected building materials.",
    icon: Droplets,
  },
  {
    title: "Walls, floors, and ceilings",
    copy: "Strip-out and replacement of damaged plasterboard, insulation, skirting, subfloors, finishes, and collapsed ceilings.",
    icon: Building2,
  },
  {
    title: "Contents damage",
    copy: "Furniture, carpets, appliances, electronics, clothing, stock, and other insured items affected by the escape of water.",
    icon: PackageCheck,
  },
  {
    title: "Kitchen and bathroom refitting",
    copy: "Removal and reinstatement of damaged fitted units, sanitaryware, worktops, tiling, and associated finishes where covered.",
    icon: Home,
  },
  {
    title: "Electrics and heating",
    copy: "Testing, rewiring, socket and consumer-unit work, plus covered boiler or heating repairs affected by the incident.",
    icon: PlugZap,
  },
  {
    title: "Decoration and finishing",
    copy: "Painting, wallpaper, floor coverings, joinery, and finishes needed to return affected rooms to their pre-loss condition.",
    icon: Sparkles,
  },
  {
    title: "Emergency plumbing work",
    copy: "Reasonable emergency access and work that stops the leak, while the policy may treat the failed pipe itself separately.",
    icon: Wrench,
  },
  {
    title: "Alternative accommodation",
    copy: "Suitable temporary housing and related insured costs when extensive drying or repairs make a home uninhabitable.",
    icon: Hotel,
  },
];

const hiddenDamage = [
  "Water inside wall cavities and saturated insulation",
  "Swollen chipboard, warped timber, and wet subfloors",
  "Saturated joists and insulation inside ceiling voids",
  "Wiring and electrical components exposed to moisture",
  "Water paths extending into rooms away from the visible leak",
  "Mould developing behind walls and floors without proper drying",
];

const independentAssessment = [
  "Professional moisture mapping across visible and hidden areas",
  "A complete scope of strip-out, drying, repairs, and finishes",
  "Room-by-room contents inventory with supported replacement values",
  "Coordination of drying, electrical, plumbing, and restoration specialists",
  "Policy review covering buildings, contents, accommodation, and rent",
  "Direct negotiation and regular progress updates through settlement",
];

const claimTimelines = [
  ["Minor leak", "Localised damage within one room", "3–6 weeks"],
  ["Moderate burst", "Several rooms affected by the escape", "6–12 weeks"],
  ["Major burst", "Multiple floors or a collapsed ceiling", "3–6 months"],
  ["Undetected leak", "Prolonged saturation and hidden deterioration", "3–6 months"],
];

const faqs = [
  {
    question: "What should I do if a pipe bursts in my home?",
    answer:
      "Turn off the water at the stopcock, isolate electricity if water is near electrical fittings, contain the water where safe, and move valuables away. Photograph the damage before clean-up, notify your insurer, and obtain independent advice before the full repair scope is agreed.",
  },
  {
    question: "Does home insurance cover burst-pipe damage?",
    answer:
      "Most buildings and contents policies cover resulting escape-of-water damage, subject to their terms. The failed pipe itself may be treated differently, but drying, building repairs, damaged contents, and accommodation can form part of the claim where covered.",
  },
  {
    question: "Can burst-pipe damage be worse than it first appears?",
    answer:
      "Yes. Water can travel through cavities, beneath floors, and into ceiling voids. Hidden effects may include saturated insulation, warped timber, damaged electrics, mould, and deterioration in rooms some distance from the visible leak.",
  },
  {
    question: "How long does burst-pipe damage take to repair?",
    answer:
      "A localised escape may take several weeks, while a major burst affecting several rooms or floors can take months. Materials must reach appropriate moisture levels before permanent reinstatement, so the drying stage controls much of the timeline.",
  },
  {
    question: "Will my insurer pay for professional drying?",
    answer:
      "Professional drying and monitoring are commonly included when necessary to deal with covered escape-of-water damage. We document why specialist equipment is required and connect its readings to the repair scope.",
  },
  {
    question: "Are frozen pipes covered by insurance?",
    answer:
      "Resulting damage from a frozen pipe that bursts is often covered, but policies may require reasonable precautions such as maintaining heat or draining systems while a property is empty. We review the wording and circumstances before presenting the claim.",
  },
];

export default function BurstPipesPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${styles.burstPage}`}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Burst Pipes</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Burst Pipes &amp; Escape of Water</p>
            <h1>Repairing Your Property With <em>Peace of Mind</em></h1>
            <p className={styles.heroCopy}>
              A burst pipe can spread water through walls, floors, and ceilings in minutes. We assess every affected area, manage the insurer, coordinate drying, and build the complete reinstatement claim.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.reassurance} aria-label="Service highlights">
              <span><Clock3 aria-hidden="true" /><strong>24/7 Support</strong><small>Immediate guidance</small></span>
              <span><Droplets aria-hidden="true" /><strong>Moisture Mapping</strong><small>Track hidden water paths</small></span>
              <span><Hammer aria-hidden="true" /><strong>Full Reinstatement</strong><small>Drying through decoration</small></span>
              <span><ShieldCheck aria-hidden="true" /><strong>Your Assessor</strong><small>Independent representation</small></span>
            </div>
          </div>
        </section>

        <nav className={styles.perilNav} aria-label="Types of property damage">
          <div className="page-width">
            <Link href="/fire-damage"><Flame aria-hidden="true" /> Fire Damage</Link>
            <Link href="/flood-damage"><Waves aria-hidden="true" /> Flood Damage</Link>
            <Link className={styles.activePeril} href="/burst-pipes"><Droplets aria-hidden="true" /> Burst Pipes</Link>
            <Link href="/#perils"><CloudLightning aria-hidden="true" /> Storm Damage</Link>
            <Link href="/#perils"><Building2 aria-hidden="true" /> Impact Damage</Link>
          </div>
        </nav>

        <section className={styles.immediateSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Stop the Water First"
              title="What Should You Do When a Pipe Bursts?"
              copy="Quick, safe action limits further damage and protects the photographs, records, and costs needed for the insurance claim."
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
              <div><strong>Water and electricity are a dangerous combination.</strong><p>Do not touch wet sockets, switches, appliances, or the consumer unit. Call an electrician or emergency service when isolation is unsafe.</p></div>
              <Button asChild className="primary-button"><Link href="/#contact">Get urgent advice <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.coverSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Escape-of-Water Cover"
              title="What Can a Burst-Pipe Claim Cover?"
              copy="The damaged pipe is only the starting point. A complete claim follows the escaped water and accounts for drying, strip-out, contents, repairs, and finishing."
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
              eyebrow="Beyond the Visible Stain"
              title="The Hidden Water Damage Behind Walls and Floors"
              copy="Water rarely stays directly beneath the leak. It follows cavities, joists, pipe routes, and floor layers, leaving damage that surface inspection can miss."
            />
            <div className={styles.hiddenLayout}>
              <div className={styles.hiddenVisual} aria-hidden="true">
                <div className={styles.moistureRing}><strong>360°</strong><span>Moisture mapping</span></div>
                <div className={styles.visualNote}><Layers3 /><span>Walls, floors, and ceilings<br /><strong>Every water path checked</strong></span></div>
              </div>
              <div className={styles.hiddenCards}>
                <article className={styles.riskCard}>
                  <div><AlertTriangle aria-hidden="true" /><span><small>Hidden Risks</small><h3>What an escape of water can affect</h3></span></div>
                  <ul>{hiddenDamage.map((item) => <li key={item}><span>!</span>{item}</li>)}</ul>
                </article>
                <article className={styles.assessmentCard}>
                  <div><ShieldCheck aria-hidden="true" /><span><small>Our Approach</small><h3>What we build into your claim</h3></span></div>
                  <ul>{independentAssessment.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </article>
              </div>
            </div>

            <div className={styles.timelinePanel}>
              <div>
                <p className={styles.eyebrow}>Drying and Reinstatement</p>
                <h2>How Long Can a Burst-Pipe Claim Take?</h2>
                <p>The drying stage can last several weeks. The full timeline depends on how far water travelled, whether materials need removing, and the complexity of the final repairs.</p>
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
              <p className={styles.eyebrow}>One Managed Recovery</p>
              <h2>From Stopping the Leak to Restoring the Property</h2>
              <p>
                Escape-of-water claims involve more than a plumber. Drying specialists, electricians, surveyors, contractors, the insurer, and its loss adjuster may all need to inspect or approve different parts of the work.
              </p>
              <p>
                We coordinate those parties and connect their findings to one clear claim. Moisture readings, the strip-out scope, contents, fitted units, electrical testing, accommodation, lost rent, and complete finishing are presented together.
              </p>
              <ul>
                <li><Check aria-hidden="true" /> Visible and hidden moisture documented</li>
                <li><Check aria-hidden="true" /> Drying, repair, and contents schedules prepared</li>
                <li><Check aria-hidden="true" /> Insurer negotiation handled through settlement</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/#process">See our claims process <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className={styles.processStages}>
              <span><strong>01</strong><small>Stop the escape and make safe</small></span>
              <span><strong>02</strong><small>Map the complete water path</small></span>
              <span><strong>03</strong><small>Strip, dry, and monitor materials</small></span>
              <span><strong>04</strong><small>Agree the complete repair scope</small></span>
              <span><strong>05</strong><small>Reinstate, finish, and settle</small></span>
            </div>
          </div>
        </section>

        <section className={styles.propertySection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Who We Help"
              title="Escape-of-Water Claims for Every Property Type"
              copy="A burst pipe can disrupt a home, displace tenants, or stop a business. We build the claim around the people, income, and operation that need to recover."
            />
            <div className={styles.propertyGrid}>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowners</strong><small>Buildings, contents, accommodation, drying, and repairs.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/landlords"><Building2 aria-hidden="true" /><span><strong>Landlords</strong><small>Tenant liaison, reinstatement, and covered rental income.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/business-owners"><Factory aria-hidden="true" /><span><strong>Business Owners</strong><small>Commercial premises, stock, equipment, and interruption.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div className="page-width">
            <div>
              <p>Dealing with burst-pipe damage?</p>
              <h2>Make sure visible and hidden losses are both included.</h2>
            </div>
            <Button asChild className={styles.whiteButton}><Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore wider water-damage support, fire claims, or specialist insurance claim management for landlords."
            />
            <div className={styles.relatedGrid}>
              <Link href="/flood-damage"><Waves aria-hidden="true" /><span><strong>Flood Damage Claims</strong><small>Drying, contamination, hidden moisture, and reinstatement.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/fire-damage"><Flame aria-hidden="true" /><span><strong>Fire Damage Claims</strong><small>Fire, smoke, contents, accommodation, and repairs.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/landlords"><Building2 aria-hidden="true" /><span><strong>Landlord Claims</strong><small>Tenant liaison, reinstatement, and covered rental income.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>We&apos;ve Got Answers</p>
              <h2>Frequently Asked Questions</h2>
              <p>Call our team if a pipe has just burst or you are concerned that the insurer&apos;s drying and repair scope misses hidden damage.</p>
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
