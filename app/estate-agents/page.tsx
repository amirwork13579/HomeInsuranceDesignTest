import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Check,
  Clock3,
  CloudLightning,
  Droplets,
  Flame,
  Handshake,
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

import styles from "./estate-agents.module.css";

export const metadata: Metadata = {
  title: "Property Claims Management for Estate Agents | Home Claims Assist",
  description:
    "Outsourced property insurance claims management for UK estate and letting agents, with free onboarding, weekly updates, tenant support, and referral commission.",
};

const referralSteps = [
  {
    number: "01",
    title: "Refer the claim",
    copy: "Log the property damage through the partner route or call us. It takes under two minutes and covers landlord, residential, and commercial claims.",
    icon: Phone,
  },
  {
    number: "02",
    title: "We take over",
    copy: "Within 24 hours, we contact the client and manage insurer communication, loss-adjuster liaison, documentation, drying, and repairs.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Stay informed without the work",
    copy: "You and your client receive structured weekly updates, so the agency always knows what is happening without chasing every party.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "The claim settles, you get paid",
    copy: "When the claim resolves, the agency receives a referral commission and can track active cases and commission through the partner portal.",
    icon: PoundSterling,
  },
];

const agencyBenefits = [
  {
    title: "Time back for your team",
    copy: "Remove insurer calls, contractor chasing, access arrangements, tenant updates, and weeks of unbillable claim administration.",
    icon: Clock3,
  },
  {
    title: "A new revenue stream",
    copy: "Every eligible referred claim that settles generates commission from work your team previously absorbed without fee income.",
    icon: PoundSterling,
  },
  {
    title: "Better tenant retention",
    copy: "Fast, professional communication reassures tenants that the damage, accommodation, and repair programme are being handled properly.",
    icon: Users,
  },
  {
    title: "Greater landlord confidence",
    copy: "A dedicated claims partner shows landlords that their property, rental income, and tenant relationships are actively protected.",
    icon: Handshake,
  },
  {
    title: "Zero cost, zero risk",
    copy: "There is no setup fee, subscription, or contract lock-in for the agency, landlord, or tenant, with onboarding and portal access included.",
    icon: ShieldCheck,
  },
  {
    title: "Compliance support",
    copy: "A documented, responsive claims process helps demonstrate proactive property care as expectations on letting agents continue to rise.",
    icon: BriefcaseBusiness,
  },
];

const propertyClaims = [
  {
    title: "Burst pipes and escape of water",
    copy: "Ceiling collapses, saturated floors, hidden damp, drying, contents, and complete reinstatement after leaks.",
    icon: Droplets,
    href: "/burst-pipes",
  },
  {
    title: "Flood damage claims",
    copy: "Water extraction, contamination clean-up, structural drying, damaged contents, and full property restoration.",
    icon: Waves,
    href: "/flood-damage",
  },
  {
    title: "Storm damage claims",
    copy: "Roof repairs, water ingress, fallen trees, fencing, emergency protection, and interior reinstatement.",
    icon: CloudLightning,
    href: "/storm-damage",
  },
  {
    title: "Fire damage claims",
    copy: "Fire and smoke remediation, contents, electrical work, alternative accommodation, and full restoration.",
    icon: Flame,
    href: "/fire-damage",
  },
];

const faqs = [
  {
    question: "How does property claims management work for estate agents?",
    answer:
      "When a landlord or tenant reports property damage, you refer the claim to Home Claims Assist. We take over client communication, insurer liaison, loss-adjuster coordination, repair scheduling, and weekly updates. Your team remains informed without carrying the administration, and the agency receives a referral fee when an eligible claim settles.",
  },
  {
    question: "Is there any cost to the estate agent or landlord?",
    answer:
      "No. The partner service has no setup charge, subscription, or hidden cost for the estate agent, landlord, or tenant. Onboarding and access to the claim-referral and tracking process are included.",
  },
  {
    question: "What types of property damage claims do you handle?",
    answer:
      "We manage escape-of-water and burst-pipe claims, flood damage, fire and smoke damage, storm damage, impact damage, and related residential, landlord, and commercial property losses across the UK.",
  },
  {
    question: "How does the Renters' Rights Act affect claims management?",
    answer:
      "The changing rental framework places greater emphasis on property condition, tenant welfare, accountability, and responsive management. A specialist claims partner gives agencies a documented process for handling serious insured damage without adding another internal claims role.",
  },
  {
    question: "How do agencies track claims and referral commissions?",
    answer:
      "Partner agencies can log referrals, follow the status of active claims, and monitor commission through the partner process. We also provide weekly updates to the agency and the client throughout the claim.",
  },
  {
    question: "Can professional claims support improve tenant retention?",
    answer:
      "Yes. Prompt contact, clear updates, suitable temporary arrangements, and visible progress on repairs reduce frustration after serious property damage and demonstrate that both the landlord and agent are taking the tenant's situation seriously.",
  },
  {
    question: "Do you cover the whole of the UK?",
    answer:
      "Yes. Home Claims Assist operates nationally, supporting estate and letting agents with managed properties across England, Scotland, Wales, and Northern Ireland.",
  },
  {
    question: "What is the onboarding process?",
    answer:
      "Onboarding is free and straightforward. We explain the referral workflow, set up the agency's access, and provide the materials your team needs. Most agencies can begin referring suitable claims within a week.",
  },
];

export default function EstateAgentsPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Estate Agents</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Partner With Us</p>
            <h1>Property Claims Management <em>For Estate Agents</em></h1>
            <p className={styles.heroCopy}>
              Your landlords get damaged properties restored. Your tenants get looked after. Your team gets its time back. And your agency earns a referral fee from every eligible claim.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get in Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.heroStats} aria-label="Partner service highlights">
              <span><strong>15+</strong><small>Years handling UK property claims</small></span>
              <span><strong>£0</strong><small>Cost to your agency or clients</small></span>
              <span><strong>24hr</strong><small>Client callback after referral</small></span>
            </div>
          </div>
        </section>

        <section className={styles.problemSection}>
          <div className={`page-width ${styles.problemLayout}`}>
            <div className={styles.problemCopy}>
              <p className={styles.eyebrow}>The Problem</p>
              <h2>The Claims Problem Every Letting Agent Knows</h2>
              <p>
                A tenant calls at 8am: water is pouring through the kitchen ceiling. Your property manager phones the landlord, chases the insurer, finds a contractor, arranges access, and answers increasingly worried messages from the tenant.
              </p>
              <p>
                Meanwhile, viewings move, routine property management slows, and the claim continues for weeks. Escape of water, fire, flood, and storm damage consume valuable capacity while generating no fee income for the agency.
              </p>
              <p>
                Expectations around property condition and tenant welfare are rising. Agencies need a responsive, trackable claims process without turning their property managers into insurance specialists.
              </p>
            </div>
            <div className={styles.scenarioCard} aria-label="A typical property claim day">
              <div className={styles.scenarioTop}>
                <span><Clock3 aria-hidden="true" /></span>
                <div><small>A typical claim</small><strong>One incident. A full day lost.</strong></div>
              </div>
              <ol>
                <li><span>08:00</span><p>Tenant reports water through the ceiling</p></li>
                <li><span>09:00</span><p>Team calls landlord, insurer, and contractors</p></li>
                <li><span>12:00</span><p>Access, updates, and emergency work take over</p></li>
                <li><span>17:00</span><p>The claim remains open and tomorrow starts again</p></li>
              </ol>
              <div className={styles.scenarioFoot}><ChartNoAxesCombined aria-hidden="true" /><span><strong>6–10 hours</strong><small>Typical agency admin per claim</small></span></div>
            </div>
          </div>
        </section>

        <section className={styles.solutionSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="The Solution"
              title="How Home Claims Assist Works for Estate Agents"
              copy="We become your outsourced property claims department and manage every stage, while your team and client remain informed."
              light
            />
            <ol className={styles.solutionGrid}>
              {referralSteps.map(({ number, title, copy, icon: Icon }) => (
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
              eyebrow="The Benefits"
              title="What Your Agency Gains"
              copy="Claims stop draining your team's time and become a professionally managed service that supports tenants, landlords, and agency revenue."
            />
            <div className={styles.benefitsGrid}>
              {agencyBenefits.map(({ title, copy, icon: Icon }) => (
                <article key={title}>
                  <Icon aria-hidden="true" />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.regulationSection}>
          <div className={`page-width ${styles.regulationLayout}`}>
            <div>
              <p className={styles.eyebrow}>Regulatory Context</p>
              <h2>The Renters&apos; Rights Act and Why It Matters for Claims</h2>
              <p>
                The rental sector is moving toward longer, more accountable landlord and tenant relationships, alongside stronger expectations for property condition and responsive management.
              </p>
              <p>
                When a burst pipe, fire, or storm leaves a tenant in a damaged home, slow communication and unclear repair ownership can quickly become a formal complaint and a retention problem.
              </p>
              <p>
                A dedicated claims partner creates a clear response route, coordinates restoration, records progress, and demonstrates that serious insured damage is being handled professionally.
              </p>
            </div>
            <aside className={styles.regulationPanel}>
              <span><ShieldCheck aria-hidden="true" /></span>
              <h3>A stronger property-care process</h3>
              <ul>
                <li><Check aria-hidden="true" /> Immediate client contact after referral</li>
                <li><Check aria-hidden="true" /> Tenant and landlord communication managed</li>
                <li><Check aria-hidden="true" /> Weekly progress updates documented</li>
                <li><Check aria-hidden="true" /> Repairs coordinated through reinstatement</li>
                <li><Check aria-hidden="true" /> Agency workload and reputation protected</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.claimsSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Claims We Handle"
              title="Property Claims Your Tenants and Landlords Face"
              copy="From escape of water to major fire damage, every referred claim is managed end-to-end with clear updates for the agency and client."
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
              We also support <Link href="/homeowners">homeowners</Link> and <Link href="/landlords">landlords</Link> across the UK, from first assessment through insurer negotiation and complete reinstatement.
            </p>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={`page-width ${styles.proofLayout}`}>
            <div className={styles.proofCopy}>
              <p className={styles.eyebrow}>See It in Action</p>
              <h2>Why Partners Choose Us</h2>
              <p>We protect the agency relationship while giving landlords and tenants one experienced team to manage the claim from the first call to the final repair.</p>
              <ul>
                <li><Check aria-hidden="true" /> No setup cost or subscription</li>
                <li><Check aria-hidden="true" /> Weekly updates throughout every active claim</li>
                <li><Check aria-hidden="true" /> Referral commission on eligible settlements</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/#contact">Discuss a partnership <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className={styles.proofVisual} role="img" aria-label="Estate agents partnering with Home Claims Assist">
              <div><Handshake aria-hidden="true" /><span><small>Your claims department</small><strong>Without another hire</strong></span></div>
              <div className={styles.proofMetric}><strong>£0</strong><span>Cost to join</span></div>
            </div>
          </div>
        </section>

        <section className={styles.partnerBanner}>
          <div className="page-width">
            <div>
              <p>Ready to take claims off your desk?</p>
              <h2>Free onboarding. Portal access. No contract. No cost.</h2>
              <span>We&apos;ll walk your team through the process in 15 minutes.</span>
            </div>
            <div>
              <Button asChild className={styles.whiteButton}><Link href="/#contact">Get in Touch <ArrowRight aria-hidden="true" /></Link></Button>
              <a href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore our partner programmes or see how we manage landlord insurance claims."
            />
            <div className={styles.relatedGrid}>
              <Link href="/insurance-brokers"><ShieldCheck aria-hidden="true" /><span><strong>Insurance Broker Partners</strong><small>End-to-end claims support for your policyholders.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#partners"><Droplets aria-hidden="true" /><span><strong>Leak Detection Partners</strong><small>Exclusive referral partnership for leak specialists.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/landlords"><Building2 aria-hidden="true" /><span><strong>Landlord Claims</strong><small>Property restoration, tenant liaison, and rental income.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>Common Questions</p>
              <h2>Frequently Asked Questions</h2>
              <p>Speak to our partnerships team about onboarding your agency or referring a live property claim.</p>
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
