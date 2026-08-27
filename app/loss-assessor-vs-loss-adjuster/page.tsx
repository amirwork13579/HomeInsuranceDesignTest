import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  FileText,
  Handshake,
  Home,
  Phone,
  PoundSterling,
  Scale,
  Search,
  ShieldCheck,
  Star,
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
  title: "What Is a Loss Adjuster vs Loss Assessor? | Home Claims Assist",
  description:
    "Understand the difference between a loss adjuster working for the insurer and an independent loss assessor representing you throughout a property insurance claim.",
};

const assessorBenefits = [
  {
    title: "Documents every part of the damage",
    copy: "Visible and hidden damage is photographed, measured, evidenced, and included in a complete schedule of loss.",
    icon: Search,
  },
  {
    title: "Prepares the full claim",
    copy: "Detailed reports, contractor estimates, specialist evidence, and professional valuations support every claimed item.",
    icon: FileText,
  },
  {
    title: "Negotiates with the insurer",
    copy: "We deal directly with the insurance company and its loss adjuster, presenting evidence and challenging shortfalls.",
    icon: Handshake,
  },
  {
    title: "Makes sure nothing is missed",
    copy: "Buildings, contents, accommodation, emergency work, fees, and insured income losses are all reviewed.",
    icon: ShieldCheck,
  },
  {
    title: "Handles every conversation",
    copy: "Information requests, meetings, policy questions, and progress chasing are managed so you can focus on recovery.",
    icon: Phone,
  },
  {
    title: "Challenges low offers",
    copy: "Independent valuations and policy evidence give you a professional basis for rejecting an unfair settlement.",
    icon: Scale,
  },
];

const faqs = [
  {
    question: "What is a loss assessor?",
    answer:
      "A loss assessor is an independent claims professional who works exclusively for you, the policyholder. They document the damage, prepare and manage the claim, deal with the insurer, and negotiate the final settlement. Professional loss assessors are regulated by the Financial Conduct Authority.",
  },
  {
    question: "What is a loss adjuster?",
    answer:
      "A loss adjuster is appointed and paid by your insurance company to investigate the claim, inspect the damage, verify policy cover, and recommend how much the insurer should pay. Their client is the insurance company, not the policyholder.",
  },
  {
    question: "What is the difference between a loss assessor and a loss adjuster?",
    answer:
      "The fundamental difference is who they represent. A loss assessor works for you and aims to secure the strongest legitimate settlement. A loss adjuster works for the insurer and assesses what the insurance company should pay.",
  },
  {
    question: "Do I need a loss assessor for my insurance claim?",
    answer:
      "You are not legally required to appoint one, but professional representation can be especially valuable for large, complex, delayed, disputed, or undervalued claims. It ensures the loss is properly documented and gives you someone experienced to negotiate on your behalf.",
  },
  {
    question: "Who pays for a loss assessor?",
    answer:
      "At Home Claims Assist, the fee is a pre-agreed percentage of the final settlement and is confirmed in writing before work begins. There is no upfront charge and the initial consultation is free.",
  },
  {
    question: "When should I appoint a loss assessor?",
    answer:
      "As early as possible. Early involvement helps establish the right evidence and claim strategy from the start. However, we can also review a claim that is already underway or a settlement offer you believe is too low.",
  },
  {
    question: "Can I refuse the insurance company's loss adjuster?",
    answer:
      "Your insurer is entitled to appoint its own loss adjuster as part of the claim process. You are equally entitled to appoint an independent loss assessor to represent your interests and work alongside the insurer's professional.",
  },
  {
    question: "Why choose Home Claims Assist as my loss assessor?",
    answer:
      "Home Claims Assist has more than 15 years of experience, over 5,000 claims handled, and more than £50 million recovered for policyholders. We manage the claim from initial assessment through negotiation, settlement, and reinstatement.",
  },
];

const proofStats = [
  { title: "5,000+", copy: "Claims handled", icon: FileText },
  { title: "£50M+", copy: "Recovered", icon: PoundSterling },
  { title: "98%", copy: "Success rate", icon: Star },
  { title: "24/7", copy: "Emergency support", icon: Clock3 },
];

export default function LossAssessorVsAdjusterPage() {
  const pageStyle = {
    "--partner-image": 'url("https://www.homeclaimsassist.co.uk/images/heroes/our-process.jpg")',
  } as CSSProperties;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={styles.page} style={pageStyle}>
        <section className={styles.hero} style={{ minHeight: "940px" }}>
          <div className={styles.heroShade} />
          <div className={"page-width " + styles.heroInner} style={{ minHeight: "940px" }}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Loss Assessor vs Loss Adjuster</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Loss Assessor vs Loss Adjuster</p>
            <h1 style={{ maxWidth: "1040px", fontSize: "clamp(44px, 5.2vw, 76px)" }}>
              What Is a Loss Adjuster? <em>Why You Need a Loss Assessor</em>
            </h1>
            <p className={styles.heroCopy}>
              They sound similar, but they work for opposite sides. Understanding who represents you and who represents the insurer can be worth thousands of pounds in your final settlement.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.heroStats} aria-label="Key differences">
              <span><strong>Assessor</strong><small>Works for you</small></span>
              <span><strong>Adjuster</strong><small>Works for the insurer</small></span>
              <span><strong>FCA</strong><small>Regulated professional standards</small></span>
            </div>
          </div>
        </section>

        <section className={styles.differenceSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Opposite Sides"
              title="What Is the Difference Between a Loss Assessor and a Loss Adjuster?"
              copy="Both professionals take part in the same insurance claim, but their appointment, payment, objectives, and responsibilities are fundamentally different."
            />
            <div className={styles.differenceGrid}>
              <article className={styles.differencePanel + " " + styles.afterPanel}>
                <p>Your Representative</p>
                <h3>Loss Assessor</h3>
                <ul>
                  <li><Check aria-hidden="true" /><strong>Works for:</strong> You, the policyholder</li>
                  <li><Check aria-hidden="true" /><strong>Paid by:</strong> You, from the settlement</li>
                  <li><Check aria-hidden="true" /><strong>Goal:</strong> Maximise your legitimate payout</li>
                  <li><Check aria-hidden="true" /><strong>Regulated by:</strong> Financial Conduct Authority</li>
                  <li><Check aria-hidden="true" /><strong>Appointed by:</strong> You, as your right</li>
                </ul>
              </article>
              <article className={styles.differencePanel + " " + styles.beforePanel}>
                <p>Insurer's Representative</p>
                <h3>Loss Adjuster</h3>
                <ul>
                  <li><span>×</span><strong>Works for:</strong> The insurance company</li>
                  <li><span>×</span><strong>Paid by:</strong> Your insurer</li>
                  <li><span>×</span><strong>Goal:</strong> Assess and manage insurer costs</li>
                  <li><span>×</span><strong>Standards:</strong> CILA professional framework</li>
                  <li><span>×</span><strong>Appointed by:</strong> The insurer automatically</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.regulationSection}>
          <div className={"page-width " + styles.regulationLayout}>
            <div>
              <p className={styles.eyebrow}>The Insurer's Side</p>
              <h2>How Do Loss Adjusters Work?</h2>
              <p>A loss adjuster is appointed after you notify the insurer. They inspect the property, verify what happened and what the policy covers, and prepare a report recommending the insurer's settlement position.</p>
              <p>They are expected to act professionally and fairly, but their client remains the insurance company. The evidence available and the adjuster's interpretation of the policy can materially change the amount offered.</p>
              <p>The first figure is often the start of a negotiation, not necessarily the full amount required to restore your position.</p>
            </div>
            <aside className={styles.regulationPanel}>
              <span><Scale aria-hidden="true" /></span>
              <h3>The adjuster's typical role</h3>
              <ul>
                <li><Check aria-hidden="true" /> Inspect the property and recorded damage</li>
                <li><Check aria-hidden="true" /> Verify the cause and policy cover</li>
                <li><Check aria-hidden="true" /> Report findings to the insurer</li>
                <li><Check aria-hidden="true" /> Recommend an initial settlement figure</li>
                <li><Check aria-hidden="true" /> Appoint specialists on larger claims</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Your Side"
              title="How Does a Loss Assessor Protect Your Claim?"
              copy="A loss assessor takes ownership of the entire process and builds the evidence needed to place you on equal professional footing with the insurer."
            />
            <div className={styles.benefitsGrid}>
              {assessorBenefits.map(({ title, copy, icon: Icon }) => (
                <article key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.regulationSection}>
          <div className={"page-width " + styles.regulationLayout}>
            <div>
              <p className={styles.eyebrow}>Professional Representation</p>
              <h2>Do You Need a Loss Assessor?</h2>
              <p>You are not legally required to appoint one. But the insurance company already has experienced claims handlers, underwriters, adjusters, surveyors, and legal resources protecting its position.</p>
              <p>A loss assessor levels the playing field. This is particularly valuable where liability is disputed, the loss is complex, significant accommodation or income costs are involved, or the offer appears too low.</p>
              <Button asChild className="primary-button"><Link href="/#contact">Discuss your claim <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <aside className={styles.regulationPanel}>
              <span><ShieldCheck aria-hidden="true" /></span>
              <h3>When representation matters most</h3>
              <ul>
                <li><Check aria-hidden="true" /> Large or complex property claims</li>
                <li><Check aria-hidden="true" /> Temporary accommodation disputes</li>
                <li><Check aria-hidden="true" /> Buildings or contents valuation disagreements</li>
                <li><Check aria-hidden="true" /> Delayed or rejected insurance claims</li>
                <li><Check aria-hidden="true" /> Settlement offers that appear too low</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={"page-width " + styles.proofLayout}>
            <div className={styles.proofCopy}>
              <p className={styles.eyebrow}>Transparent Fees</p>
              <h2>How Much Does a Loss Assessor Cost?</h2>
              <p>Our fee is a small, pre-agreed percentage of the final settlement and is confirmed in writing before any work starts. The initial consultation is free.</p>
              <ul>
                <li><Check aria-hidden="true" /> No upfront payment</li>
                <li><Check aria-hidden="true" /> No hidden charges</li>
                <li><Check aria-hidden="true" /> Fee agreed before instruction</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/#contact">Get a free consultation <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className={styles.proofVisual} role="img" aria-label="Independent loss assessor representing a policyholder">
              <div><Handshake aria-hidden="true" /><span><small>Independent representation</small><strong>A professional on your side</strong></span></div>
              <div className={styles.proofMetric}><strong>£0</strong><span>Upfront cost</span></div>
            </div>
          </div>
        </section>

        <section className={styles.supportSection} aria-label="Home Claims Assist results">
          <div className="page-width">
            <div className={styles.supportGrid}>
              {proofStats.map(({ title, copy, icon: Icon }) => (
                <article key={title}><Icon aria-hidden="true" /><span><strong>{title}</strong><small>{copy}</small></span></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.partnerBanner}>
          <div className="page-width">
            <div><p>Want a loss assessor on your side?</p><h2>Free consultation. Independent advice. Professional representation.</h2><span>We will assess your situation and explain how we can maximise your insurance claim.</span></div>
            <div><Button asChild className={styles.whiteButton}><Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button><a href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a></div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading eyebrow="Explore More" title="Related Services" copy="See how we manage a claim step by step or get specialist support for your property damage." />
            <div className={styles.relatedGrid}>
              <Link href="/our-process"><FileText aria-hidden="true" /><span><strong>Our Claims Process</strong><small>From first contact through settlement and reinstatement.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowner Claims</strong><small>Complete insurance claim support for property owners.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#contact"><Phone aria-hidden="true" /><span><strong>Contact Us</strong><small>Get a free consultation with our claims team.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={"page-width " + styles.faqLayout}>
            <div><p className={styles.eyebrow}>We've Got Answers</p><h2>Frequently Asked Questions</h2><p>Speak to our loss assessors about professional representation, fees, a disputed claim, or an offer you have already received.</p><a href="tel:02034108351"><Phone aria-hidden="true" /> Speak to our team</a></div>
            <Accordion type="single" collapsible defaultValue="faq-0" className={styles.faqList}>
              {faqs.map((faq, index) => (
                <AccordionItem value={"faq-" + index} key={faq.question} className={styles.faqItem}><AccordionTrigger className={styles.faqTrigger}>{faq.question}</AccordionTrigger><AccordionContent className={styles.faqContent}>{faq.answer}</AccordionContent></AccordionItem>
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
