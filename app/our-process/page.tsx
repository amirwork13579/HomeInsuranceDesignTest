import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CarFront,
  ChartNoAxesCombined,
  Check,
  Clock3,
  CloudLightning,
  Droplets,
  FileText,
  Flame,
  Hammer,
  Handshake,
  Home,
  Phone,
  PoundSterling,
  Scale,
  Search,
  ShieldCheck,
  Star,
  Trees,
  Users,
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

import styles from "../estate-agents/estate-agents.module.css";

export const metadata: Metadata = {
  title: "Claiming on Home Insurance: Our Process | Home Claims Assist",
  description:
    "See how Home Claims Assist manages a property insurance claim from first contact and free assessment through documentation, negotiation, settlement, and reinstatement.",
};

const supportHighlights = [
  { title: "24/7 Support", copy: "Call us anytime", icon: Clock3 },
  { title: "Expert Guidance", copy: "Years of experience", icon: BriefcaseBusiness },
  { title: "Peace of Mind", copy: "We handle your claim", icon: ShieldCheck },
  { title: "Satisfaction Guaranteed", copy: "Read our reviews", icon: Star },
];

const processSteps = [
  {
    number: "01",
    title: "Initial contact",
    copy: "Call us or complete the consultation form. We discuss the damage, explain the immediate next steps, and provide urgent guidance when needed.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Free assessment",
    copy: "A qualified loss assessor reviews the property, the policy, and the full extent of damage so the claim starts from a strong evidence base.",
    icon: Search,
  },
  {
    number: "03",
    title: "Claim preparation",
    copy: "We prepare detailed reports, photographs, schedules, specialist evidence, and professional valuations so every covered loss is captured.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Negotiation",
    copy: "We deal directly with the insurer and its loss adjuster, challenge missing or undervalued items, and negotiate for the strongest legitimate settlement.",
    icon: Handshake,
  },
  {
    number: "05",
    title: "Settlement and reinstatement",
    copy: "Once agreed, we secure prompt payment and can oversee the repair programme that returns your property to its pre-loss condition.",
    icon: Hammer,
  },
];

const timelineRows = [
  ["Minor burst pipe or escape of water", "4–8 weeks"],
  ["Storm damage to roof or fencing", "6–12 weeks"],
  ["Fire damage to a single room", "8–16 weeks"],
  ["Major flood damage", "3–6 months"],
  ["Total loss or major fire", "6–12 months"],
];

const claimCoverage = [
  { title: "Structural repairs", copy: "Walls, floors, ceilings, roofing, and foundations.", icon: Building2 },
  { title: "Contents replacement", copy: "Furniture, electronics, clothing, and personal items.", icon: Home },
  { title: "Temporary accommodation", copy: "Hotel, rental property, or eligible family reimbursement.", icon: Users },
  { title: "Professional fees", copy: "Surveyors, engineers, and other specialist reports.", icon: FileText },
  { title: "Emergency work", copy: "Boarding, water extraction, drying, and making the property safe.", icon: ShieldCheck },
  { title: "Loss of rental income", copy: "Covered income losses under eligible landlord policies.", icon: PoundSterling },
  { title: "Business interruption", copy: "Trading losses and continuity costs for commercial policies.", icon: BriefcaseBusiness },
  { title: "Garden and outbuildings", copy: "External structures and landscaping where the policy provides cover.", icon: Trees },
];

const disputeTypes = [
  {
    title: "Disputed cause of damage",
    copy: "The insurer alleges wear and tear or poor maintenance. We gather evidence to establish the insured event.",
    icon: Search,
  },
  {
    title: "Undervalued assessment",
    copy: "The loss adjuster's figure is below the actual repair cost. We prepare independent schedules and costings.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Excluded claim items",
    copy: "Covered work or possessions are omitted. We review the policy and support full inclusion.",
    icon: FileText,
  },
  {
    title: "Claims process delays",
    copy: "Insurer inactivity leaves the claim stalled. We maintain pressure, chase decisions, and escalate where required.",
    icon: Clock3,
  },
  {
    title: "Accommodation disputes",
    copy: "We evidence the cost and duration of suitable temporary housing while the home is uninhabitable.",
    icon: Home,
  },
  {
    title: "Repair versus cash settlement",
    copy: "Where you prefer a cash settlement, we negotiate the most suitable route and a properly valued outcome.",
    icon: PoundSterling,
  },
];

const damageTypes = [
  { title: "Fire damage claims", copy: "Structural reinstatement, smoke remediation, contents, and accommodation.", icon: Flame, href: "/fire-damage" },
  { title: "Flood damage claims", copy: "Decontamination, drying programmes, hidden damage, and restoration.", icon: Waves, href: "/flood-damage" },
  { title: "Storm damage claims", copy: "Roof repairs, water ingress, fallen trees, and emergency works.", icon: CloudLightning, href: "/storm-damage" },
  { title: "Burst pipe claims", copy: "Escape of water, collapsed ceilings, drying, and hidden damp.", icon: Droplets, href: "/burst-pipes" },
  { title: "Impact damage claims", copy: "Vehicle collisions, fallen objects, structural surveys, and repairs.", icon: CarFront, href: "/impact-damage" },
  { title: "Loss assessor guidance", copy: "Understand who represents you and who works for the insurance company.", icon: Scale, href: "/loss-assessor-vs-loss-adjuster" },
];

const faqs = [
  {
    question: "How long does the entire claims process take?",
    answer:
      "The timing depends on the complexity of the claim. Straightforward damage may settle within a few weeks, while major structural, flood, or fire claims can take several months. We prepare complete documentation early, maintain pressure on the insurer, and keep you informed throughout.",
  },
  {
    question: "What is the difference between a loss assessor and a loss adjuster?",
    answer:
      "A loss assessor works exclusively for you, the policyholder, to prepare and maximise the claim. A loss adjuster is appointed by the insurance company to assess the loss on the insurer's behalf. Independent representation ensures your interests are properly evidenced and negotiated.",
  },
  {
    question: "Do I need to be present for the property assessment?",
    answer:
      "It helps, but it is not essential. If you cannot attend, we can arrange access with a keyholder, document the property with photographs and measurements, and explain our findings afterwards.",
  },
  {
    question: "Will I need to deal with my insurer directly?",
    answer:
      "No. Once instructed, we manage the communication with your insurer, its loss adjuster, and other appointed professionals. We handle information requests, policy questions, evidence, meetings, and negotiation for you.",
  },
  {
    question: "What happens if my insurer rejects my claim?",
    answer:
      "We review the insurer's reasoning and the policy wording, gather evidence where the decision can be challenged, and guide you through complaints or escalation to the Financial Ombudsman Service when appropriate.",
  },
  {
    question: "Can I instruct you if I have already started the claim myself?",
    answer:
      "Yes. We can step in at any stage, whether the claim has just been submitted, is delayed or disputed, or you have received a settlement offer that appears too low.",
  },
];

export default function OurProcessPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${styles.processPage}`}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Our Process</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Our Process</p>
            <h1>Claiming on Home Insurance: <em>From Start to Settlement</em></h1>
            <p className={styles.heroCopy}>
              Insurance claims are rarely simple. We put an independent loss assessor on your side, manage every conversation and document, and build the strongest possible route to a fair settlement.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
          </div>
        </section>

        <section className={styles.supportSection} aria-label="Service assurances">
          <div className="page-width">
            <div className={styles.supportGrid}>
              {supportHighlights.map(({ title, copy, icon: Icon }) => (
                <article key={title}><Icon aria-hidden="true" /><span><strong>{title}</strong><small>{copy}</small></span></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.solutionSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Step by Step"
              title="Our 5-Step Claims Process"
              copy="From the moment you contact us, we take care of everything. Our proven process is designed to maximise your settlement while minimising stress."
              light
            />
            <div className={styles.assessorNote}>
              <span><Scale aria-hidden="true" /></span>
              <div><h3>Loss Assessor vs Loss Adjuster</h3><p>A loss assessor works for you. A loss adjuster works for the insurance company. Independent representation protects your interests throughout the claim.</p></div>
              <Link href="/loss-assessor-vs-loss-adjuster">Learn more <ArrowRight aria-hidden="true" /></Link>
            </div>
            <ol className={styles.solutionGrid}>
              {processSteps.map(({ number, title, copy, icon: Icon }) => (
                <li key={title}><div><span>{number}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.timelineSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Typical Timescales"
              title="How Long Does Claiming on Home Insurance Take?"
              copy="Every claim is different, but these ranges show the typical timelines we see for common property losses."
            />
            <div className={styles.timelineTableWrap}>
              <table className={styles.timelineTable}>
                <thead><tr><th>Claim type</th><th>Typical timeline</th></tr></thead>
                <tbody>{timelineRows.map(([claim, time]) => <tr key={claim}><td>{claim}</td><td>{time}</td></tr>)}</tbody>
              </table>
            </div>
            <p className={styles.timelineNote}>Complete documentation, prompt responses, and proactive follow-up remove avoidable delays. We prepare the evidence upfront and maintain pressure on the insurer until the claim moves.</p>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Your Full Loss"
              title="What Can You Claim For?"
              copy="Home insurance can cover far more than the obvious repair. We identify every eligible element so the settlement reflects the true cost of recovery."
            />
            <div className={styles.coverageGrid}>
              {claimCoverage.map(({ title, copy, icon: Icon }) => (
                <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.regulationSection}>
          <div className={`page-width ${styles.regulationLayout}`}>
            <div>
              <p className={styles.eyebrow}>Rejected Claims</p>
              <h2>What If My Insurer Rejects My Claim?</h2>
              <p>Rejection is not necessarily the end. We review the insurer&apos;s explanation against your policy, the evidence, and the actual cause of damage.</p>
              <p>If the decision can be challenged, we prepare the case, respond to the insurer, and help escalate through the formal complaints process or Financial Ombudsman Service where appropriate.</p>
              <Button asChild className="primary-button"><Link href="/contact">Discuss a rejected claim <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <aside className={styles.regulationPanel}>
              <span><ShieldCheck aria-hidden="true" /></span>
              <h3>Common rejection grounds we review</h3>
              <ul>
                <li><Check aria-hidden="true" /> Misinterpretation of policy terms</li>
                <li><Check aria-hidden="true" /> Incorrect wear-and-tear allegation</li>
                <li><Check aria-hidden="true" /> Dispute over when damage occurred</li>
                <li><Check aria-hidden="true" /> Covered damage treated as excluded</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="When Insurers Push Back"
              title="What Happens When Your Insurer Disputes a Claim?"
              copy="We turn each disagreement into an evidence-led negotiation and keep the claim moving toward the outcome your policy supports."
            />
            <div className={styles.benefitsGrid}>
              {disputeTypes.map(({ title, copy, icon: Icon }) => (
                <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.claimsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Property Damage"
              title="What Types of Property Damage Can You Claim For?"
              copy="The core process remains consistent, but each type of damage needs specialist evidence, valuation, and restoration planning."
            />
            <div className={styles.claimsGrid}>
              {damageTypes.map(({ title, copy, icon: Icon, href }) => (
                <Link href={href} key={title}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p><small>Learn more <ArrowRight aria-hidden="true" /></small></Link>
              ))}
            </div>
            <p className={styles.claimsNote}>We support <Link href="/homeowners">homeowners</Link>, <Link href="/landlords">landlords</Link>, and <Link href="/business-owners">business owners</Link> across the UK.</p>
          </div>
        </section>

        <section className={styles.partnerBanner}>
          <div className="page-width">
            <div><p>Ready to start the process?</p><h2>Free consultation. Clear advice. Complete claim management.</h2><span>Tell us what happened and our team will explain exactly how we can help.</span></div>
            <div><Button asChild className={styles.whiteButton}><Link href="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button><a href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a></div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading eyebrow="Explore More" title="Related Services" copy="Explore specialist claim support or learn more about the professionals involved in your insurance claim." />
            <div className={styles.relatedGrid}>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowner Claims</strong><small>Complete property insurance claim support.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/loss-assessor-vs-loss-adjuster"><Scale aria-hidden="true" /><span><strong>Loss Assessor vs Adjuster</strong><small>Understand who works for you and who works for the insurer.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/contact"><Phone aria-hidden="true" /><span><strong>Contact Us</strong><small>Get a free consultation with our claims team.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div><p className={styles.eyebrow}>We&apos;ve Got Answers</p><h2>Frequently Asked Questions</h2><p>Speak to our loss assessors about your damage, policy, timeline, or an offer you have already received.</p><a href="tel:02034108351"><Phone aria-hidden="true" /> Speak to our team</a></div>
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

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy: string; light?: boolean }) {
  return <div className={`${styles.sectionHeading} ${light ? styles.light : ""}`}><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2><p>{copy}</p></div>;
}
