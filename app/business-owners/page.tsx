import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Check,
  Clock3,
  CloudLightning,
  Droplets,
  Factory,
  Flame,
  Gauge,
  Handshake,
  Laptop,
  Phone,
  PoundSterling,
  ShieldCheck,
  Store,
  Truck,
  Warehouse,
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

import styles from "./business-owners.module.css";

export const metadata: Metadata = {
  title: "Business Insurance Claims | Commercial Loss Assessor",
  description:
    "Independent commercial insurance claim support for business interruption, fire, flood, storm, escape of water, stock, and equipment losses across the UK.",
};

const commercialClaims = [
  {
    title: "Fire & Smoke Damage",
    copy: "Structural reinstatement, smoke remediation, stock and equipment replacement, plus interruption losses while your premises are closed.",
    icon: Flame,
  },
  {
    title: "Flood Damage",
    copy: "Industrial drying, contamination clean-up, plant and stock assessment, and revenue protection throughout restoration.",
    icon: Droplets,
  },
  {
    title: "Storm Damage",
    copy: "Roof and structural repairs, water ingress, emergency boarding, damaged signage, and external reinstatement.",
    icon: CloudLightning,
  },
  {
    title: "Impact Damage",
    copy: "Vehicle collisions, fallen trees, structural surveys, temporary works, and third-party recovery where applicable.",
    icon: Truck,
  },
  {
    title: "Escape of Water",
    copy: "Burst pipes and leaks affecting ceilings, electrics, stock, fixtures, machinery, and the wider operation of your premises.",
    icon: Wrench,
  },
];

const interruptionCover = [
  {
    title: "Loss of gross profit",
    copy: "Income lost while the business cannot trade at its normal capacity, measured against its pre-incident performance.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Increased cost of working",
    copy: "Temporary premises, equipment hire, overtime, outsourcing, and other reasonable costs that keep the operation moving.",
    icon: Gauge,
  },
  {
    title: "Loss of rent",
    copy: "Insured rental income lost while commercial units or sublet space cannot be occupied during reinstatement.",
    icon: Building2,
  },
  {
    title: "Ongoing fixed costs",
    copy: "Salaries, lease payments, insurance premiums, and essential overheads that continue even when trading stops.",
    icon: PoundSterling,
  },
  {
    title: "Customer retention",
    copy: "Extra costs involved in protecting important relationships and meeting contractual obligations during disruption.",
    icon: Handshake,
  },
  {
    title: "Professional fees",
    copy: "Accountant, surveyor, and specialist costs required to calculate, prepare, and evidence the interruption claim.",
    icon: BriefcaseBusiness,
  },
];

const sectors = [
  {
    title: "Retail & Hospitality",
    copy: "Stock, refrigerated goods, kitchen equipment, customer areas, signage, and lost trading days during important periods.",
    icon: Store,
    number: "01",
  },
  {
    title: "Offices & Professional Services",
    copy: "IT hardware, furniture, documents, data recovery, and the cost of relocating teams to temporary premises.",
    icon: Laptop,
    number: "02",
  },
  {
    title: "Warehouses & Industrial Units",
    copy: "Inventory, racking, plant and machinery, loading areas, shutters, and production-line equipment.",
    icon: Warehouse,
    number: "03",
  },
  {
    title: "Trades & Workshops",
    copy: "Specialist tools, raw materials, customer property held on site, and income lost through cancelled work.",
    icon: Factory,
    number: "04",
  },
];

const faqs = [
  {
    question: "How can a loss assessor help my business after property damage?",
    answer:
      "A loss assessor represents your business throughout the commercial insurance claim. We record and value the damage, prepare the evidence, manage insurer communication, and negotiate the property, stock, and business interruption elements through to settlement.",
  },
  {
    question: "What is a business interruption claim?",
    answer:
      "Business interruption cover can compensate for insured income lost while your operation is disrupted. Depending on the policy, it may also cover continuing fixed costs and additional expenditure used to maintain trading during recovery.",
  },
  {
    question: "Can you handle claims for businesses of all sizes?",
    answer:
      "Yes. Support is available for sole traders, small and medium-sized businesses, larger companies, and multi-site operations. The claim strategy is tailored to the assets, finances, and operational pressures of each business.",
  },
  {
    question: "How do you minimise disruption during the claims process?",
    answer:
      "We take ownership of insurer correspondence, documentation, inspections, and settlement negotiations. At the same time, we identify practical measures such as temporary premises, equipment hire, or alternative suppliers that may help you continue trading.",
  },
  {
    question: "What types of commercial losses can be included?",
    answer:
      "A commercial policy may cover buildings, fixtures, machinery, stock, inventory, business interruption, increased costs of working, loss of rent, and professional fees. The exact entitlement depends on your policy wording and the circumstances of the loss.",
  },
  {
    question: "Is there an upfront cost for the business claims service?",
    answer:
      "The initial consultation is free. Any fee for ongoing claim management is made clear and agreed in writing before work begins, so your business can make an informed decision without unexpected charges.",
  },
];

export default function BusinessOwnersPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Business Owners</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Commercial Insurance Claims</p>
            <h1>Securing Your <em>Business</em> With Us</h1>
            <p className={styles.heroCopy}>
              Property damage can stop an operation in its tracks. Our commercial loss assessors protect your position, manage every part of the claim, and work to get your business trading normally again.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.reassurance} aria-label="Service highlights">
              <span><Clock3 aria-hidden="true" /><strong>24/7 Support</strong><small>Call us anytime</small></span>
              <span><BriefcaseBusiness aria-hidden="true" /><strong>Commercial Expertise</strong><small>Claims of every scale</small></span>
              <span><Gauge aria-hidden="true" /><strong>Less Downtime</strong><small>Keep trading where possible</small></span>
              <span><ShieldCheck aria-hidden="true" /><strong>Your Interests</strong><small>Independent representation</small></span>
            </div>
          </div>
        </section>

        <section className={styles.claimsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Commercial Claims"
              title="What Types of Commercial Property Claims Can You Make?"
              copy="Commercial losses involve more than building repairs. We bring the property, stock, equipment, lease, and trading-impact parts of the claim into one clear strategy."
            />
            <div className={styles.claimsGrid}>
              {commercialClaims.map(({ title, copy, icon: Icon }) => (
                <article key={title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <Link href="/#perils">Learn more <ArrowRight aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
            <div className={styles.adviceCallout}>
              <div>
                <strong>Need help with a business claim?</strong>
                <p>We support organisations from sole traders to multi-site operations throughout the UK.</p>
              </div>
              <Button asChild className="primary-button"><Link href="/#contact">Get free advice <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.interruptionSection}>
          <div className="page-width">
            <div className={styles.interruptionLayout}>
              <div className={styles.interruptionCopy}>
                <p className={styles.eyebrow}>Business Interruption</p>
                <h2>What Is a Business Interruption Claim?</h2>
                <p>
                  Business interruption can be the most valuable and most complex element of a commercial claim. It is designed to protect the income your business loses while an insured event prevents normal operation.
                </p>
                <p>
                  We work with you and your accountant to understand pre-loss performance, the policy&apos;s indemnity period, continuing expenses, and the reasonable costs used to keep trading. We also identify underinsurance early, before it becomes a surprise during negotiation.
                </p>
                <ul>
                  <li><Check aria-hidden="true" /> Financial evidence built around your actual operation</li>
                  <li><Check aria-hidden="true" /> Property and interruption losses managed together</li>
                  <li><Check aria-hidden="true" /> A clear recovery plan from closure to full trading</li>
                </ul>
              </div>
              <div className={styles.interruptionVisual} aria-hidden="true">
                <div className={styles.visualMetric}><strong>£50M+</strong><span>Recovered for clients</span></div>
                <div className={styles.visualNote}><Boxes /><span>Stock, equipment &amp; revenue<br /><strong>One coordinated claim</strong></span></div>
              </div>
            </div>
            <div className={styles.interruptionGrid}>
              {interruptionCover.map(({ title, copy, icon: Icon }) => (
                <article key={title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectorsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Sector Experience"
              title="Which Business Sectors Can Claim for Property Damage?"
              copy="Every operation has different assets and pressures. Our approach is shaped around the way your business actually works."
            />
            <div className={styles.sectorGrid}>
              {sectors.map(({ title, copy, icon: Icon, number }) => (
                <article key={title}>
                  <div><span>{number}</span><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <p className={styles.sectorNote}>
              Whatever your sector, we follow the same disciplined path: assess the loss, document the evidence, build the financial case, negotiate with the insurer, and protect the recovery of your operation.
            </p>
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div className="page-width">
            <div>
              <p>Business affected by property damage?</p>
              <h2>We&apos;ll manage the claim while you run the business.</h2>
            </div>
            <Button asChild className={styles.whiteButton}><Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore the common causes of commercial claims and see how our process moves from assessment to settlement."
            />
            <div className={styles.relatedGrid}>
              <Link href="/#perils"><Flame aria-hidden="true" /><span><strong>Fire Damage Claims</strong><small>Specialist support for fire, smoke, stock, and interruption losses.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#perils"><CloudLightning aria-hidden="true" /><span><strong>Storm Damage Claims</strong><small>Emergency protection, structural assessment, and reinstatement.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#process"><ShieldCheck aria-hidden="true" /><span><strong>Our Claims Process</strong><small>See how we manage an insurance claim step by step.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>We&apos;ve Got Answers</p>
              <h2>Frequently Asked Questions</h2>
              <p>Speak to our commercial claims team before you make decisions that could affect the evidence or settlement.</p>
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
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}
