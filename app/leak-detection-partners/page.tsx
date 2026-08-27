import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Clock3,
  Droplets,
  Eye,
  Handshake,
  Home,
  MapPin,
  Phone,
  PoundSterling,
  Search,
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

import styles from "../estate-agents/estate-agents.module.css";

export const metadata: Metadata = {
  title: "Referral Partnership for Leak Detection Companies | Home Claims Assist",
  description:
    "An exclusive UK referral partnership for leak detection companies: refer wider property damage claims, protect clients, and earn commission at no cost.",
};

const partnershipSteps = [
  {
    number: "01",
    title: "You attend the job",
    copy: "Carry out your trace and access, leak detection, or repair work as normal. Your existing service is completely unaffected.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "You spot the wider damage",
    copy: "Collapsed ceilings, saturated floors, mould, and damaged electrics signal a wider insurance claim and restoration need.",
    icon: Search,
  },
  {
    number: "03",
    title: "You refer the client",
    copy: "Share our details or log the referral through the partner route. It takes under two minutes and your part is finished.",
    icon: Phone,
  },
  {
    number: "04",
    title: "We call within 24 hours",
    copy: "We assess the damage and take over insurer communication, loss-adjuster liaison, documentation, repairs, and reinstatement.",
    icon: Clock3,
  },
  {
    number: "05",
    title: "You get paid",
    copy: "When an eligible claim settles, you receive commission and can track every referral, status, and earning through the partner process.",
    icon: PoundSterling,
  },
];

const partnershipBenefits = [
  {
    title: "Zero extra work",
    copy: "You are already at the property. The referral takes under two minutes, with no paperwork, follow-up, or claim administration.",
    icon: Clock3,
  },
  {
    title: "Zero cost, zero risk",
    copy: "There is no joining fee, subscription, or contract lock-in. If a referral is unsuitable, there is no cost or obligation.",
    icon: ShieldCheck,
  },
  {
    title: "Exclusive territory",
    copy: "We work with one leak detection company per region, protecting the value of your partnership and keeping competitors out.",
    icon: MapPin,
  },
  {
    title: "Clients get proper help",
    copy: "Homeowners and landlords receive professional end-to-end claim management and a complete restoration programme at no cost.",
    icon: Home,
  },
  {
    title: "Your reputation grows",
    copy: "A professionally handled claim reflects well on the company that made the introduction, supporting repeat work and recommendations.",
    icon: Handshake,
  },
  {
    title: "Full visibility",
    copy: "Track referrals, claim progress, settlements, and commission without chasing for updates or losing sight of an opportunity.",
    icon: Eye,
  },
];

const afterLeakClaims = [
  {
    title: "Burst pipe and escape of water claims",
    copy: "Drying programmes, hidden damage assessment, strip-outs, contents, and complete property reinstatement.",
    icon: Droplets,
    href: "/burst-pipes",
  },
  {
    title: "Flood damage claims",
    copy: "Decontamination, water extraction, structural drying, damaged contents, and full restoration after external flooding.",
    icon: Waves,
    href: "/flood-damage",
  },
  {
    title: "Homeowner claims",
    copy: "Specialist guidance for owner-occupied properties from initial assessment through settlement and repairs.",
    icon: Home,
    href: "/homeowners",
  },
  {
    title: "Landlord claims",
    copy: "Tenant liaison, repair management, alternative accommodation, and recovery of insured rental losses.",
    icon: Building2,
    href: "/landlords",
  },
];

const faqs = [
  {
    question: "How does the referral partnership work for leak detection companies?",
    answer:
      "When you discover water damage beyond the leak itself, you refer the client to Home Claims Assist. We contact them within 24 hours and manage the insurance claim from documentation through repair completion. You earn commission when an eligible claim settles, without taking on extra administration.",
  },
  {
    question: "How much commission can I earn?",
    answer:
      "Commission varies with the scope and settlement value of each claim. Referred claims, their progress, and commission earnings can be tracked through the partner process.",
  },
  {
    question: "Is there any cost to join?",
    answer:
      "No. There is no fee, subscription, or contract lock-in. Onboarding and partner access are free, and an unsuitable referral creates no cost or obligation.",
  },
  {
    question: "Why do you only work with one partner per area?",
    answer:
      "Territory exclusivity protects the value of the relationship. We work with one trusted leak detection company in each region, build a genuine working partnership, and do not add a competing company once that area is allocated.",
  },
  {
    question: "What types of damage can I refer?",
    answer:
      "Refer any property damage that may fall under an insurance claim. The most common opportunities are escape-of-water losses with collapsed ceilings, saturated flooring, mould, damaged electrics, or structural damp, but we also assess flood, fire, storm, and impact damage.",
  },
  {
    question: "Does this affect my trace and access work?",
    answer:
      "No. Your leak detection, trace and access, and repair service continues independently. Our referral covers the wider insurance claim, settlement, and restoration that follows.",
  },
  {
    question: "How quickly do you respond to referrals?",
    answer:
      "We contact the client within 24 hours. From then on, we manage claim communication and keep the policyholder informed with regular progress updates.",
  },
  {
    question: "What if I am not sure the damage qualifies for a claim?",
    answer:
      "Refer it and let our team assess it. If the damage meets the claim criteria, we can proceed. If it does not, there is no cost or obligation to you or the client.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us to check whether your area is available. If it is, we set up your access, explain the referral process, and provide the materials needed to begin within days.",
  },
];

export default function LeakDetectionPartnersPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${styles.leakPage}`}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Leak Detection Partners</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Partner With Us</p>
            <h1>Referral Partnership <em>for Leak Detection Companies</em></h1>
            <p className={styles.heroCopy}>
              You find the leak. We handle the claim. You get paid. It is a simple passive revenue stream from jobs you already attend — and we work with only one partner per area.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/contact">Apply to Partner <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.heroStats} aria-label="Leak detection partnership highlights">
              <span><strong>1</strong><small>Partner per area — exclusive territory</small></span>
              <span><strong>24hr</strong><small>Client callback after every referral</small></span>
              <span><strong>£0</strong><small>Cost to join, onboard, and access</small></span>
            </div>
          </div>
        </section>

        <section className={styles.exclusiveSection}>
          <div className="page-width">
            <div className={styles.exclusiveCard}>
              <span className={styles.exclusiveIcon}><MapPin aria-hidden="true" /></span>
              <div className={styles.exclusiveCopy}>
                <p>Exclusive Territory</p>
                <h2>One Partner Per Area — Exclusive Territories</h2>
                <p>We limit partnerships to one leak detection company in each region. Once your area is allocated, we do not bring in a competitor, protecting the value of the relationship and your place as our sole referral partner.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.problemSection}>
          <div className={`page-width ${styles.problemLayout}`}>
            <div className={styles.problemCopy}>
              <p className={styles.eyebrow}>The Opportunity</p>
              <h2>You&apos;re Already Standing in the Money</h2>
              <p>
                You trace and repair the leak, but the wider damage remains: a collapsed ceiling, ruined flooring, damaged electrics, mould, and saturated plaster. Then the client asks, “What do I do now?”
              </p>
              <p>
                Sending them away to call the insurer leaves value on the table. A simple referral gives that homeowner or landlord specialist support through the claim while creating commission income for your company.
              </p>
              <p>
                We take over the insurer, loss adjuster, documentation, drying, repairs, and complete reinstatement. Your service remains unchanged, and your part ends once the referral is logged.
              </p>
            </div>
            <div className={styles.scenarioCard} aria-label="A typical leak detection referral">
              <div className={styles.scenarioTop}>
                <span><Droplets aria-hidden="true" /></span>
                <div><small>A typical referral</small><strong>Find the leak. Spot the claim.</strong></div>
              </div>
              <ol>
                <li><span>Callout</span><p>Escape of water has damaged the room below</p></li>
                <li><span>Trace</span><p>You locate and repair the source of the leak</p></li>
                <li><span>Damage</span><p>Ceilings, floors, electrics, and plaster need restoring</p></li>
                <li><span>Refer</span><p>We take over the claim and the client receives support</p></li>
              </ol>
              <div className={styles.scenarioFoot}><PoundSterling aria-hidden="true" /><span><strong>Under 2 minutes</strong><small>Total extra work on your part</small></span></div>
            </div>
          </div>
        </section>

        <section className={styles.solutionSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="How It Works"
              title="How the Partnership Works"
              copy="Your leak detection service stays exactly the same. We step in only when the wider property damage needs an insurance claim and professional restoration."
              light
            />
            <ol className={styles.solutionGrid}>
              {partnershipSteps.map(({ number, title, copy, icon: Icon }) => (
                <li key={title}>
                  <div><span>{number}</span><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Why It Works"
              title="Why This Partnership Works"
              copy="It adds a protected revenue layer to work you already do while giving every suitable client the specialist support they need."
            />
            <div className={styles.benefitsGrid}>
              {partnershipBenefits.map(({ title, copy, icon: Icon }) => (
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
              eyebrow="After the Leak"
              title="What Happens After You Refer a Client"
              copy="We manage the entire insurance claim from start to finish, adapting the support to the property, policyholder, and damage discovered."
            />
            <div className={styles.claimsGrid}>
              {afterLeakClaims.map(({ title, copy, icon: Icon, href }) => (
                <Link href={href} key={title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <small>Learn more <ArrowRight aria-hidden="true" /></small>
                </Link>
              ))}
            </div>
            <p className={styles.claimsNote}>
              Clients can also review our <Link href="/our-process">step-by-step claims process</Link> before we contact them.
            </p>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={`page-width ${styles.proofLayout}`}>
            <div className={styles.proofCopy}>
              <p className={styles.eyebrow}>See It in Action</p>
              <h2>Why Partners Choose Us</h2>
              <p>We protect the client relationship, manage the entire claim, and create a genuine revenue stream with zero disruption to your leak detection work.</p>
              <ul>
                <li><Check aria-hidden="true" /> One protected partner in each territory</li>
                <li><Check aria-hidden="true" /> Client contacted within 24 hours</li>
                <li><Check aria-hidden="true" /> Commission on eligible settled claims</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/contact">Check your area <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className={styles.proofVisual} role="img" aria-label="Leak detection companies partnering with Home Claims Assist">
              <div><Handshake aria-hidden="true" /><span><small>Exclusive partnership</small><strong>Your area. Your opportunity.</strong></span></div>
              <div className={styles.proofMetric}><strong>1</strong><span>Partner per area</span></div>
            </div>
          </div>
        </section>

        <section className={styles.partnerBanner}>
          <div className="page-width">
            <div>
              <p>Claim your area before someone else does</p>
              <h2>One partner per territory. Free onboarding. Full access.</h2>
              <span>Let us check availability and explain the partnership — it takes 10 minutes.</span>
            </div>
            <div>
              <Button asChild className={styles.whiteButton}><Link href="/contact">Apply to Partner <ArrowRight aria-hidden="true" /></Link></Button>
              <a href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore our other partner programmes or see how we manage escape-of-water insurance claims."
            />
            <div className={styles.relatedGrid}>
              <Link href="/estate-agents"><Building2 aria-hidden="true" /><span><strong>Estate Agent Partners</strong><small>Claims management partnership for letting agents.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/insurance-brokers"><BriefcaseBusiness aria-hidden="true" /><span><strong>Insurance Broker Partners</strong><small>End-to-end claims support for policyholders.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/burst-pipes"><Droplets aria-hidden="true" /><span><strong>Burst Pipe Claims</strong><small>Escape-of-water claim management and restoration.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>Common Questions</p>
              <h2>Frequently Asked Questions</h2>
              <p>Speak to our partnerships team to check territory availability or discuss a suitable live referral.</p>
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
