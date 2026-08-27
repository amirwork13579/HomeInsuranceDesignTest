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
  Phone,
  ShieldCheck,
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
  title: "Storm Damage Insurance Claims | Independent Loss Assessors",
  description:
    "Independent storm-damage claim support for roofing, structural damage, water ingress, emergency repairs, contents, accommodation, and reinstatement across the UK.",
};

const immediateSteps = [
  {
    title: "Stay safe",
    copy: "Do not climb onto a damaged roof or enter rooms where ceilings or structural elements may be compromised. Keep clear until the area is assessed.",
    icon: ShieldCheck,
  },
  {
    title: "Prevent further damage",
    copy: "Where it is safe, cover exposed areas, place containers beneath leaks, and move furniture, stock, and valuables away from water ingress.",
    icon: Wrench,
  },
  {
    title: "Document everything",
    copy: "Photograph roof tiles, windows, fences, water staining, fallen trees, outbuildings, and contents before temporary repairs begin.",
    icon: Camera,
  },
  {
    title: "Record the weather",
    copy: "Note the date and time of the storm and retain local warnings or weather reports. This evidence helps connect the damage to the event.",
    icon: CloudLightning,
  },
  {
    title: "Contact your insurer",
    copy: "Notify the insurer promptly that storm damage has occurred. You can provide the complete schedule of loss after a full professional assessment.",
    icon: Phone,
  },
  {
    title: "Call Home Claims Assist",
    copy: "We guide the emergency response, arrange specialist inspections, preserve evidence, and start building the claim from day one.",
    icon: Hammer,
  },
];

const coveredLosses = [
  {
    title: "Roof and structural damage",
    copy: "Missing tiles, ridge tiles, flashing, chimneys, roof coverings, and structural elements damaged by high winds or debris.",
    icon: Home,
  },
  {
    title: "Water ingress damage",
    copy: "Ceilings, walls, insulation, floors, electrics, and finishes affected by rain entering through a storm-damaged building.",
    icon: Droplets,
  },
  {
    title: "Fallen trees and branches",
    copy: "Building, garden wall, fence, roof, and outbuilding damage, together with reasonable removal costs where covered.",
    icon: CloudLightning,
  },
  {
    title: "Windows and doors",
    copy: "Broken glass, damaged frames, failed seals, and doors blown open, distorted, or removed from their hinges.",
    icon: Building2,
  },
  {
    title: "Fencing and boundary walls",
    copy: "Fences, gates, pillars, and boundary walls damaged or destroyed by strong winds, debris, or falling trees where insured.",
    icon: Hammer,
  },
  {
    title: "Outbuildings and garages",
    copy: "Sheds, garages, conservatories, and other insured structures affected by wind, rainwater, or fallen objects.",
    icon: Factory,
  },
  {
    title: "Emergency repairs",
    copy: "Boarding, temporary roof coverings, debris clearance, and other reasonable work needed to make the property safe and watertight.",
    icon: Wrench,
  },
  {
    title: "Alternative accommodation",
    copy: "Suitable temporary housing and related insured expenses when structural damage or water ingress makes a home uninhabitable.",
    icon: Hotel,
  },
];

const insurerPushback = [
  "The roof damage was pre-existing wear and tear",
  "Deterioration occurred gradually rather than during the storm",
  "The property was allegedly not maintained adequately",
  "Recorded wind speeds did not meet the insurer's preferred threshold",
  "Secondary water ingress is excluded from the repair scope",
  "The insurer's repair allowance is below realistic contractor costs",
];

const independentAssessment = [
  "Independent structural inspection of every storm-affected area",
  "Weather warnings and local data supporting the storm event",
  "Photographic and video evidence before permanent repairs",
  "Professional contractor specifications and repair estimates",
  "Contents schedule for items damaged by water or debris",
  "Policy review covering repairs, accommodation, and interruption",
];

const claimTimelines = [
  ["Minor", "Fencing, individual tiles, or guttering", "4–8 weeks"],
  ["Moderate", "Partial roof damage and internal water ingress", "8–16 weeks"],
  ["Major", "Structural damage or a fallen tree", "3–6 months"],
  ["Severe", "Several areas affected and occupants displaced", "6–12 months"],
];

const faqs = [
  {
    question: "What types of storm damage does home insurance cover?",
    answer:
      "Policies commonly cover damage caused by strong winds, heavy rain, hail, lightning, and fallen trees. This may include roofs, structural elements, windows, fences, outbuildings, contents, and resulting water ingress, subject to the wording of your policy.",
  },
  {
    question: "How do I prove storm damage for an insurance claim?",
    answer:
      "A strong claim connects photographs and video of the damage with the date of the event, weather reports, independent surveys, and contractor findings. We assemble that evidence into one clear schedule showing what the storm caused and what complete repairs will cost.",
  },
  {
    question: "Will my insurer cover emergency repairs after a storm?",
    answer:
      "Reasonable emergency work needed to prevent further loss is usually considered as part of the claim. Keep invoices and photographs, avoid permanent work before evidence is preserved, and check with the insurer where circumstances allow.",
  },
  {
    question: "Can I claim for storm damage to my garden or fences?",
    answer:
      "Cover for fences, gates, garden structures, trees, and landscaping varies between policies. We review the buildings and external-cover sections to identify what can be claimed and what limits or exclusions apply.",
  },
  {
    question: "What if my insurer says it was wear and tear?",
    answer:
      "This is a common storm-claim dispute. We use independent surveys, photographs, maintenance evidence, weather data, and professional opinion to distinguish event damage from ordinary ageing and challenge an unsupported rejection or reduction.",
  },
  {
    question: "How long after a storm can I make a claim?",
    answer:
      "Report damage as soon as reasonably possible, ideally within days. Some problems, such as water ingress through a displaced tile, only become clear later. Promptly document the discovery and obtain advice rather than assuming the opportunity to claim has passed.",
  },
];

export default function StormDamagePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${styles.stormPage}`}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Storm Damage</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Storm Damage Claims</p>
            <h1>Rebuilding Your Home After Storm Damage <em>With Trust</em></h1>
            <p className={styles.heroCopy}>
              Strong winds, heavy rain, hail, lightning, and falling trees can damage several parts of a property at once. We document the full loss, handle insurer disputes, and manage the claim through complete reinstatement.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.reassurance} aria-label="Service highlights">
              <span><Clock3 aria-hidden="true" /><strong>24/7 Support</strong><small>Immediate guidance</small></span>
              <span><CloudLightning aria-hidden="true" /><strong>Weather Evidence</strong><small>Event data documented</small></span>
              <span><Hammer aria-hidden="true" /><strong>Repair Scope</strong><small>Independent costings</small></span>
              <span><ShieldCheck aria-hidden="true" /><strong>Your Assessor</strong><small>Independent representation</small></span>
            </div>
          </div>
        </section>

        <nav className={styles.perilNav} aria-label="Types of property damage">
          <div className="page-width">
            <Link href="/fire-damage"><Flame aria-hidden="true" /> Fire Damage</Link>
            <Link href="/flood-damage"><Waves aria-hidden="true" /> Flood Damage</Link>
            <Link href="/burst-pipes"><Droplets aria-hidden="true" /> Burst Pipes</Link>
            <Link className={styles.activePeril} href="/storm-damage"><CloudLightning aria-hidden="true" /> Storm Damage</Link>
            <Link href="/impact-damage"><Building2 aria-hidden="true" /> Impact Damage</Link>
          </div>
        </nav>

        <section className={styles.immediateSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Safety and Evidence First"
              title="What Should You Do After Storm Damage?"
              copy="The first safe actions protect people, reduce secondary water damage, and preserve the evidence your insurer needs to assess the event properly."
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
              <div><strong>Do not climb onto a damaged roof.</strong><p>Loose tiles, weakened coverings, damaged chimneys, and unstable ceilings can fail without warning. Keep clear and use qualified emergency contractors.</p></div>
              <Button asChild className="primary-button"><Link href="/#contact">Get urgent advice <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.coverSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Buildings, Contents, and Recovery"
              title="What Can a Storm-Damage Claim Cover?"
              copy="A storm can cause direct exterior damage and secondary losses inside the property. We follow the complete damage path and include every eligible repair and cost."
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
              eyebrow="Building an Evidence-Based Claim"
              title="When Insurers Push Back on Storm Claims"
              copy="Storm claims are frequently disputed as maintenance or wear and tear. Independent surveys, event data, photographs, and realistic repair estimates make the difference."
            />
            <div className={styles.hiddenLayout}>
              <div className={styles.hiddenVisual} aria-hidden="true">
                <div className={styles.moistureRing}><strong>24hr</strong><span>Weather evidence</span></div>
                <div className={styles.visualNote}><Layers3 /><span>Roof, structure, and interiors<br /><strong>Every affected layer checked</strong></span></div>
              </div>
              <div className={styles.hiddenCards}>
                <article className={styles.riskCard}>
                  <div><AlertTriangle aria-hidden="true" /><span><small>Common Challenges</small><h3>How a storm claim may be reduced</h3></span></div>
                  <ul>{insurerPushback.map((item) => <li key={item}><span>!</span>{item}</li>)}</ul>
                </article>
                <article className={styles.assessmentCard}>
                  <div><ShieldCheck aria-hidden="true" /><span><small>Our Approach</small><h3>How we support the complete claim</h3></span></div>
                  <ul>{independentAssessment.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </article>
              </div>
            </div>

            <div className={styles.timelinePanel}>
              <div>
                <p className={styles.eyebrow}>Assessment to Reinstatement</p>
                <h2>How Long Can a Storm-Damage Claim Take?</h2>
                <p>Timelines depend on the severity of structural damage, water ingress, specialist reports, and contractor availability after a widespread weather event.</p>
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
              <h2>From Emergency Protection to Complete Repairs</h2>
              <p>
                A storm claim may involve roofing contractors, surveyors, arborists, drying specialists, electricians, the insurer, and its loss adjuster. Each party sees only part of the loss unless the claim is coordinated as a whole.
              </p>
              <p>
                We connect the storm event to the physical damage, document secondary water ingress, prepare realistic repair specifications, and negotiate every eligible cost through settlement and reinstatement.
              </p>
              <ul>
                <li><Check aria-hidden="true" /> Storm event and property damage connected with evidence</li>
                <li><Check aria-hidden="true" /> Emergency, structural, contents, and finishing costs included</li>
                <li><Check aria-hidden="true" /> Insurer challenges handled through final settlement</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/our-process">See our claims process <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className={styles.processStages}>
              <span><strong>01</strong><small>Make the property safe and watertight</small></span>
              <span><strong>02</strong><small>Record the event and every damaged area</small></span>
              <span><strong>03</strong><small>Obtain surveys and repair specifications</small></span>
              <span><strong>04</strong><small>Challenge exclusions and agree costs</small></span>
              <span><strong>05</strong><small>Reinstate the property and settle</small></span>
            </div>
          </div>
        </section>

        <section className={styles.propertySection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Who We Help"
              title="Storm Claims for Every Property Owner"
              copy="Severe weather can displace a household, interrupt rental income, or close commercial premises. We shape the claim around the full practical and financial recovery."
            />
            <div className={styles.propertyGrid}>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowners</strong><small>Roofing, interiors, contents, accommodation, and repairs.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/landlords"><Building2 aria-hidden="true" /><span><strong>Landlords</strong><small>Tenant liaison, emergency works, reinstatement, and rent.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/business-owners"><Factory aria-hidden="true" /><span><strong>Business Owners</strong><small>Premises, equipment, stock, protection, and interruption.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div className="page-width">
            <div>
              <p>Has a storm damaged your property?</p>
              <h2>Build the evidence before the insurer calls it wear and tear.</h2>
            </div>
            <Button asChild className={styles.whiteButton}><Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore impact and fire claims or complete insurance claim management for homeowners."
            />
            <div className={styles.relatedGrid}>
              <Link href="/impact-damage"><Building2 aria-hidden="true" /><span><strong>Impact Damage Claims</strong><small>Vehicles, fallen trees, objects, and structural assessment.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/fire-damage"><Flame aria-hidden="true" /><span><strong>Fire Damage Claims</strong><small>Fire, smoke, contents, accommodation, and repairs.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowner Claims</strong><small>Complete insurance claim support for property owners.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>We&apos;ve Got Answers</p>
              <h2>Frequently Asked Questions</h2>
              <p>Call our team if your property has just been damaged or the insurer is disputing whether the storm caused the loss.</p>
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
