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
  Flame,
  Handshake,
  Home,
  Phone,
  PoundSterling,
  ShieldCheck,
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
  title: "Claims Management Partner for Insurance Brokers | Home Claims Assist",
  description:
    "Outsource property insurance claim administration, improve policyholder service, and earn referral commission with a dedicated UK claims management partner.",
};

const brokerSteps = [
  {
    number: "01",
    title: "Refer the claim",
    copy: "Log a landlord, residential, or commercial property claim through our partner route or call us directly. The referral takes under two minutes.",
    icon: Phone,
  },
  {
    number: "02",
    title: "We contact the client within 24 hours",
    copy: "We introduce ourselves as your claims partner and take over communication with the insurer, loss adjuster, and repair contractors.",
    icon: Clock3,
  },
  {
    number: "03",
    title: "Full claim management",
    copy: "Our team prepares documents, coordinates inspections, manages drying and reinstatement, and keeps every party moving toward settlement.",
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    title: "Weekly updates to you and your client",
    copy: "Structured progress updates keep your brokerage informed while your policyholder sees a professional, well-managed claims service.",
    icon: Users,
  },
  {
    number: "05",
    title: "The claim settles — you earn",
    copy: "Your brokerage receives a referral commission and can track active cases, claim status, and commission through the partner portal.",
    icon: PoundSterling,
  },
];

const revenueBenefits = [
  {
    title: "No cost to your brokerage",
    copy: "There is no setup fee, subscription, or contract lock-in. Onboarding and access to the partner process are included.",
    icon: ShieldCheck,
  },
  {
    title: "No cost to your client",
    copy: "The policyholder pays nothing for our support and gains a dedicated team to manage the claim and restoration professionally.",
    icon: Users,
  },
  {
    title: "Revenue from claims you already handle",
    copy: "Move unbillable claim administration off your team's desk and earn referral commission when an eligible claim settles.",
    icon: PoundSterling,
  },
];

const propertyClaims = [
  {
    title: "Fire and smoke damage",
    copy: "Structural repair, smoke remediation, contents, alternative accommodation, and complete reinstatement.",
    icon: Flame,
    href: "/fire-damage",
  },
  {
    title: "Flood damage",
    copy: "Water extraction, decontamination, structural drying, contents replacement, and full restoration.",
    icon: Waves,
    href: "/flood-damage",
  },
  {
    title: "Storm damage",
    copy: "Roof repairs, water ingress, fallen trees, emergency protection, and internal reinstatement.",
    icon: CloudLightning,
    href: "/storm-damage",
  },
  {
    title: "Escape of water",
    copy: "Burst pipes, hidden leaks, ceiling collapses, damp, drying, strip-out, and repair coordination.",
    icon: Droplets,
    href: "/burst-pipes",
  },
  {
    title: "Impact damage",
    copy: "Vehicle collisions, fallen objects, structural assessment, emergency works, and permanent repairs.",
    icon: CarFront,
    href: "/impact-damage",
  },
  {
    title: "Full claims process",
    copy: "See how we manage assessment, insurer communication, settlement negotiation, and reinstatement.",
    icon: BriefcaseBusiness,
    href: "/#process",
  },
];

const faqs = [
  {
    question: "How does outsourced claims management work for insurance brokers?",
    answer:
      "You refer the property claim through our partner route or by phone. We contact the policyholder within 24 hours and manage insurer communication, loss-adjuster coordination, repair scheduling, and weekly progress updates. Your brokerage stays informed without carrying the administration, and receives a referral commission when an eligible claim settles.",
  },
  {
    question: "What does this cost the broker or policyholder?",
    answer:
      "Nothing. There is no setup charge or subscription for the brokerage and no fee to the policyholder. Onboarding, access to the partner process, and end-to-end claim handling are included.",
  },
  {
    question: "What types of property claims do you manage?",
    answer:
      "We manage escape-of-water and burst-pipe claims, flood damage, fire and smoke damage, storm damage, and impact damage across residential homeowner, landlord, and commercial property policies throughout the UK.",
  },
  {
    question: "How does this improve client retention?",
    answer:
      "A claim is often the moment that defines the insurance relationship. Prompt contact, clear updates, specialist representation, and visible progress create a better policyholder experience and give clients another reason to renew with your brokerage.",
  },
  {
    question: "Do brokers receive referral fees?",
    answer:
      "Yes. Brokers receive a referral commission when an eligible referred claim settles. Active claims, status updates, and commission can be monitored through the partner process.",
  },
  {
    question: "Does Home Claims Assist work alongside the insurer?",
    answer:
      "Yes. We work within the insurer's claim framework and liaise with its claims team and loss adjusters. Our role is to support the policyholder with documentation, assessment, communication, and timely resolution.",
  },
  {
    question: "How quickly do you respond to referred claims?",
    answer:
      "We contact the policyholder within 24 hours of receiving the referral. From that point, we manage claim communication and provide structured weekly updates to the client and brokerage.",
  },
  {
    question: "What is the onboarding process for brokers?",
    answer:
      "Onboarding is free and straightforward. We set up your access, walk the team through the referral process, and provide the supporting materials needed to begin referring suitable claims within days.",
  },
];

export default function InsuranceBrokersPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${styles.brokerPage}`}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Insurance Brokers</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Partner With Us</p>
            <h1>Claims Management Partner <em>for Insurance Brokers</em></h1>
            <p className={styles.heroCopy}>
              You sold the policy. But when a pipe bursts or a ceiling collapses, your phone rings and weeks of unpaid administration begin. We take that work off your desk and turn it into income.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Partner With Us <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.heroStats} aria-label="Broker partner service highlights">
              <span><strong>&lt;2 min</strong><small>To refer a property claim</small></span>
              <span><strong>£0</strong><small>Cost to broker or policyholder</small></span>
              <span><strong>24hr</strong><small>Client callback after referral</small></span>
            </div>
          </div>
        </section>

        <section className={styles.problemSection}>
          <div className={`page-width ${styles.problemLayout}`}>
            <div className={styles.problemCopy}>
              <p className={styles.eyebrow}>The Problem</p>
              <h2>The Problem Every Broker Recognises</h2>
              <p>
                Property claims are the hidden cost of running a brokerage. You are not a claims handler, loss adjuster, or project manager, but the moment a policyholder suffers serious damage you become all three — for free.
              </p>
              <p>
                The client calls you first because you own the relationship. Your team starts fielding updates, chasing adjusters, coordinating access, and managing expectations while its policy and client work waits.
              </p>
              <p>
                The claim experience also defines whether a client renews or walks. Slow, unclear handling does more than consume capacity; it puts the account and your reputation at risk.
              </p>
            </div>
            <div className={styles.scenarioCard} aria-label="The hidden administration in a property claim">
              <div className={styles.scenarioTop}>
                <span><Clock3 aria-hidden="true" /></span>
                <div><small>A typical property claim</small><strong>Weeks of work. No fee income.</strong></div>
              </div>
              <ol>
                <li><span>Day 1</span><p>Policyholder reports damage to your account team</p></li>
                <li><span>Week 1</span><p>Broker chases the insurer and loss adjuster</p></li>
                <li><span>Week 2</span><p>Access, repairs, and client expectations need managing</p></li>
                <li><span>Renewal</span><p>The claim experience decides whether the account stays</p></li>
              </ol>
              <div className={styles.scenarioFoot}><ChartNoAxesCombined aria-hidden="true" /><span><strong>6–10 hours</strong><small>Typical broker admin per claim</small></span></div>
            </div>
          </div>
        </section>

        <section className={styles.solutionSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="The Solution"
              title="How Home Claims Assist Works for Brokers"
              copy="We become your outsourced property claims management partner. Your administration ends at referral, while the policyholder experience improves."
              light
            />
            <ol className={styles.solutionGrid}>
              {brokerSteps.map(({ number, title, copy, icon: Icon }) => (
                <li key={title}>
                  <div><span>{number}</span><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.differenceSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="The Difference"
              title="What Changes for Your Brokerage"
              copy="The same claim becomes a managed client service and a commission opportunity instead of a drain on your team."
            />
            <div className={styles.differenceGrid}>
              <article className={`${styles.differencePanel} ${styles.beforePanel}`}>
                <p>Before Home Claims Assist</p>
                <h3>Claims cost capacity</h3>
                <ul>
                  <li><span>×</span> Claims consume team capacity for weeks</li>
                  <li><span>×</span> No revenue from claims work</li>
                  <li><span>×</span> Clients frustrated by slow resolution</li>
                  <li><span>×</span> Team morale drained by admin overload</li>
                  <li><span>×</span> Renewals at risk after a poor experience</li>
                </ul>
              </article>
              <article className={`${styles.differencePanel} ${styles.afterPanel}`}>
                <p>After Home Claims Assist</p>
                <h3>Claims strengthen relationships</h3>
                <ul>
                  <li><Check aria-hidden="true" /> Claims referred in under two minutes</li>
                  <li><Check aria-hidden="true" /> Referral commission on every eligible settlement</li>
                  <li><Check aria-hidden="true" /> Clients supported by claims professionals</li>
                  <li><Check aria-hidden="true" /> Team focused on policies and client service</li>
                  <li><Check aria-hidden="true" /> Renewals strengthened by better claims support</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="The Revenue Case"
              title="Turn Your Biggest Drain into a Revenue Stream"
              copy="You already support clients through property claims. Now that same work can be outsourced, professionally managed, and generate income for your brokerage."
            />
            <div className={styles.benefitsGrid}>
              {revenueBenefits.map(({ title, copy, icon: Icon }) => (
                <article key={title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.claimsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Claims We Manage"
              title="Claim Types We Handle for Your Policyholders"
              copy="We manage the full range of property insurance claims for homeowners, landlords, and commercial clients across the UK."
            />
            <div className={styles.claimsGrid}>
              {propertyClaims.map(({ title, copy, icon: Icon, href }) => (
                <Link href={href} key={title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <small>View details <ArrowRight aria-hidden="true" /></small>
                </Link>
              ))}
            </div>
            <p className={styles.claimsNote}>
              We support <Link href="/homeowners">homeowners</Link>, <Link href="/landlords">landlords</Link>, and <Link href="/business-owners">business owners</Link> from first assessment through insurer negotiation and complete reinstatement.
            </p>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={`page-width ${styles.proofLayout}`}>
            <div className={styles.proofCopy}>
              <p className={styles.eyebrow}>See It in Action</p>
              <h2>Why Partners Choose Us</h2>
              <p>We handle the claim, protect the client relationship, and create a genuine revenue stream with no disruption to your brokerage.</p>
              <ul>
                <li><Check aria-hidden="true" /> Policyholders contacted within 24 hours</li>
                <li><Check aria-hidden="true" /> Structured weekly updates throughout the claim</li>
                <li><Check aria-hidden="true" /> Referral commission on eligible settlements</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/#contact">Discuss a partnership <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className={styles.proofVisual} role="img" aria-label="Insurance brokers partnering with Home Claims Assist">
              <div><Handshake aria-hidden="true" /><span><small>Your claims partner</small><strong>Protecting every client relationship</strong></span></div>
              <div className={styles.proofMetric}><strong>£0</strong><span>Cost to join</span></div>
            </div>
          </div>
        </section>

        <section className={styles.partnerBanner}>
          <div className="page-width">
            <div>
              <p>Stop doing claims admin for free</p>
              <h2>Free onboarding. Full access. Referral commissions.</h2>
              <span>Let us show you how the partner process works — it takes 15 minutes.</span>
            </div>
            <div>
              <Button asChild className={styles.whiteButton}><Link href="/#contact">Partner With Us <ArrowRight aria-hidden="true" /></Link></Button>
              <a href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore our partner programmes or see how we support homeowners through a property insurance claim."
            />
            <div className={styles.relatedGrid}>
              <Link href="/estate-agents"><Building2 aria-hidden="true" /><span><strong>Estate Agent Partners</strong><small>Claims management partnership for letting agents.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#partners"><Droplets aria-hidden="true" /><span><strong>Leak Detection Partners</strong><small>Exclusive referral partnership for leak specialists.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowner Claims</strong><small>Expert support through every stage of a property claim.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>Common Questions</p>
              <h2>Frequently Asked Questions</h2>
              <p>Speak to our partnerships team about onboarding your brokerage or referring a live property claim.</p>
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
