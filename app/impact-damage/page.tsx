import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Camera,
  CarFront,
  Check,
  Clock3,
  CloudLightning,
  Droplets,
  Factory,
  Flame,
  Hammer,
  Home,
  Layers3,
  PackageCheck,
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

import styles from "../flood-damage/flood-damage.module.css";

export const metadata: Metadata = {
  title: "Impact Damage Insurance Claims | Independent Loss Assessors",
  description:
    "Independent impact-damage claim support for vehicle collisions, fallen trees, falling objects, structural surveys, emergency security, repairs, and third-party recovery across the UK.",
};

const immediateSteps = [
  {
    title: "Ensure everyone is safe",
    copy: "Check occupants and keep clear of cracked walls, damaged roofs, unstable trees, and any area that may be structurally unsafe. Call emergency services when needed.",
    icon: ShieldCheck,
  },
  {
    title: "Call the police if needed",
    copy: "When a vehicle has struck the property, obtain the driver's details and registration where possible. A police record can support a third-party motor claim.",
    icon: CarFront,
  },
  {
    title: "Secure the property",
    copy: "Arrange emergency boarding, temporary fencing, or structural support if the impact has left openings, unsafe walls, or compromised doors and windows.",
    icon: Wrench,
  },
  {
    title: "Document everything",
    copy: "Photograph the wider scene, the vehicle, tree, or object involved, and every visible crack, opening, displaced surface, and damaged item from several angles.",
    icon: Camera,
  },
  {
    title: "Contact your insurer",
    copy: "Report the incident promptly. If another person caused the damage, there may also be a route through their motor or public-liability insurance.",
    icon: Phone,
  },
  {
    title: "Contact Home Claims Assist",
    copy: "We assess the safest and most effective claim route, coordinate urgent protection, and begin documenting both visible and hidden damage immediately.",
    icon: Hammer,
  },
];

const impactTypes = [
  {
    title: "Vehicle collision",
    copy: "Cars, vans, lorries, and delivery vehicles striking boundary walls, buildings, garages, gates, and structural elements.",
    icon: CarFront,
  },
  {
    title: "Fallen trees and branches",
    copy: "Trees damaging roofs, walls, fencing, outbuildings, and interiors, often with secondary rainwater ingress.",
    icon: CloudLightning,
  },
  {
    title: "Falling objects",
    copy: "Chimney pots, satellite dishes, roof tiles, scaffolding, construction debris, and other objects striking the building or contents.",
    icon: PackageCheck,
  },
  {
    title: "Aircraft and drone impact",
    copy: "Rare but potentially serious damage from aircraft, helicopters, drones, or related debris impacting a property.",
    icon: Building2,
  },
  {
    title: "Accidental impact",
    copy: "Garage-door collisions, heavy objects dropped through floors, and other events covered by an accidental-damage section.",
    icon: Hammer,
  },
  {
    title: "Third-party impact",
    copy: "Damage caused by neighbours, contractors, delivery firms, or council works where another party may be legally responsible.",
    icon: Factory,
  },
];

const hiddenDamage = [
  "Shifted or fractured foundations beneath the visible impact point",
  "Compromised load-bearing walls that appear intact externally",
  "Broken underground water, gas, drainage, or electrical services",
  "Misaligned windows and doors indicating structural movement",
  "Internal cracks that emerge days or weeks after the incident",
  "Damaged cavity wall ties and connections between building elements",
];

const coveredLosses = [
  "Structural repairs to walls, foundations, roofing, and supports",
  "Boundary walls, fences, gates, and pillars",
  "Furniture, electronics, stock, and other damaged contents",
  "Emergency boarding, fencing, hoarding, and temporary support",
  "Fallen-tree removal and insured debris clearance",
  "Alternative accommodation when the property is unsafe",
  "Structural engineer, surveyor, and other professional fees",
  "Covered landscaping, driveway, and external reinstatement",
];

const independentAssessment = [
  "Immediate safety and emergency-protection requirements",
  "Independent structural survey of visible and hidden movement",
  "Utility inspections where below-ground services may be affected",
  "Complete repair scope with professional contractor estimates",
  "Contents and secondary water-damage schedules where relevant",
  "Assessment of home-policy and third-party recovery routes",
];

const faqs = [
  {
    question: "What types of impact damage are covered by insurance?",
    answer:
      "Policies commonly cover vehicles colliding with a property, falling trees and branches, aircraft or drone impact, falling dishes or aerials, and other objects striking the building. The exact cover depends on the buildings, contents, and accidental-damage wording.",
  },
  {
    question: "A vehicle has crashed into my property — what should I do?",
    answer:
      "Make sure everyone is safe and call emergency services if needed. Obtain the driver's details and vehicle registration, photograph the damage and vehicle position, report the incident to the police and insurer, and avoid disturbing evidence beyond urgent safety work.",
  },
  {
    question: "Can I claim against the driver's insurance?",
    answer:
      "You may be able to claim against the driver's motor insurer. In some situations, claiming under your own buildings policy is faster while recovery is pursued separately. We review the circumstances and manage the route that best protects the repair and settlement process.",
  },
  {
    question: "Is structural damage from impact always visible?",
    answer:
      "No. An impact can shift foundations, fracture utilities, weaken load-bearing walls, damage wall ties, and distort openings without obvious surface signs. Independent structural assessment is essential before the repair scope is agreed.",
  },
  {
    question: "Will insurance cover a fallen tree damaging my property?",
    answer:
      "Damage from a fallen tree is generally considered under storm or impact cover, subject to the policy and cause. Building repairs, fencing, outbuildings, contents, and reasonable tree removal may all form part of the claim where covered.",
  },
  {
    question: "How quickly can you respond to an impact emergency?",
    answer:
      "We begin the claim promptly and can help coordinate rapid structural assessment, boarding, temporary fencing, or other urgent work needed to make the property safe while the complete claim is prepared.",
  },
];

export default function ImpactDamagePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${styles.impactPage}`}>
        <section className={styles.hero}>
          <div className={styles.heroShade} />
          <div className={`page-width ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Impact Damage</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Impact Damage Claims</p>
            <h1>Repairing Your Property After Impact <em>With Expertise</em></h1>
            <p className={styles.heroCopy}>
              Vehicle collisions, fallen trees, and falling objects can cause substantial visible and hidden damage. We assess the structure, secure the property, determine the right insurance route, and manage the claim through full restoration.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <a className={styles.heroPhone} href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            </div>
            <div className={styles.reassurance} aria-label="Service highlights">
              <span><Clock3 aria-hidden="true" /><strong>24/7 Support</strong><small>Immediate guidance</small></span>
              <span><CarFront aria-hidden="true" /><strong>Third-Party Claims</strong><small>Every recovery route checked</small></span>
              <span><Layers3 aria-hidden="true" /><strong>Structural Survey</strong><small>Hidden movement assessed</small></span>
              <span><ShieldCheck aria-hidden="true" /><strong>Your Assessor</strong><small>Independent representation</small></span>
            </div>
          </div>
        </section>

        <nav className={styles.perilNav} aria-label="Types of property damage">
          <div className="page-width">
            <Link href="/fire-damage"><Flame aria-hidden="true" /> Fire Damage</Link>
            <Link href="/flood-damage"><Waves aria-hidden="true" /> Flood Damage</Link>
            <Link href="/burst-pipes"><Droplets aria-hidden="true" /> Burst Pipes</Link>
            <Link href="/storm-damage"><CloudLightning aria-hidden="true" /> Storm Damage</Link>
            <Link className={styles.activePeril} href="/impact-damage"><Building2 aria-hidden="true" /> Impact Damage</Link>
          </div>
        </nav>

        <section className={styles.immediateSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Safety, Security, and Evidence"
              title="What Should You Do After Impact Damage?"
              copy="The first safe actions protect occupants, prevent further loss, identify responsible parties, and preserve the evidence needed for your claim."
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
              <div><strong>Visible damage may not show the full structural risk.</strong><p>Keep people away from the impact area until foundations, load-bearing elements, utilities, and temporary support requirements have been professionally checked.</p></div>
              <Button asChild className="primary-button"><Link href="/contact">Get urgent advice <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.coverSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Vehicles, Trees, and Falling Objects"
              title="What Types of Impact Damage Can You Claim For?"
              copy="Impact can come from many directions. We identify the cause, the responsible insurer, and the complete physical and financial consequences for the property."
              light
            />
            <div className={styles.coverGrid}>
              {impactTypes.map(({ title, copy, icon: Icon }) => (
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
              eyebrow="Beyond the Point of Impact"
              title="How Do You Spot Hidden Structural Damage?"
              copy="Force travels through foundations, walls, connections, openings, and underground services. A professional survey is essential before the insurer defines the final repair scope."
            />
            <div className={styles.hiddenLayout}>
              <div className={styles.hiddenVisual} aria-hidden="true">
                <div className={styles.moistureRing}><strong>360°</strong><span>Structural review</span></div>
                <div className={styles.visualNote}><Layers3 /><span>Foundations, walls, and utilities<br /><strong>Every force path checked</strong></span></div>
              </div>
              <div className={styles.hiddenCards}>
                <article className={styles.riskCard}>
                  <div><AlertTriangle aria-hidden="true" /><span><small>Hidden Risks</small><h3>What an impact can disturb</h3></span></div>
                  <ul>{hiddenDamage.map((item) => <li key={item}><span>!</span>{item}</li>)}</ul>
                </article>
                <article className={styles.assessmentCard}>
                  <div><ShieldCheck aria-hidden="true" /><span><small>Our Assessment</small><h3>What we establish for your claim</h3></span></div>
                  <ul>{independentAssessment.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </article>
              </div>
            </div>

            <div className={styles.timelinePanel}>
              <div>
                <p className={styles.eyebrow}>The Complete Repair Scope</p>
                <h2>What Can an Impact-Damage Claim Cover?</h2>
                <p>The claim should account for the building, emergency protection, professional investigation, contents, external areas, and any secondary damage triggered by the impact.</p>
              </div>
              <div className={styles.hiddenCards}>
                <article className={styles.assessmentCard}>
                  <ul>{coveredLosses.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </article>
              </div>
            </div>

            <div className={styles.safetyCallout}>
              <CarFront aria-hidden="true" />
              <div><strong>Your policy or the third party&apos;s insurance?</strong><p>If a driver, contractor, neighbour, or other organisation caused the impact, another insurer may be responsible. We compare the available routes and manage the claim without leaving necessary repairs caught between insurers.</p></div>
              <Button asChild className="primary-button"><Link href="/contact">Review my claim route <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={`page-width ${styles.processLayout}`}>
            <div className={styles.processCopy}>
              <p className={styles.eyebrow}>Impact Claims Across the UK</p>
              <h2>One Claim for Visible, Hidden, and Secondary Damage</h2>
              <p>
                An impact can fracture a wall, shift the structure, rupture a water main, expose the property to rain, and damage contents in the same event. Treating each symptom separately risks an incomplete repair and settlement.
              </p>
              <p>
                We coordinate structural engineers, surveyors, emergency contractors, utility inspections, and repair specialists, then present their findings as one evidence-based claim to the appropriate insurer.
              </p>
              <ul>
                <li><Check aria-hidden="true" /> Visible and concealed structural effects documented</li>
                <li><Check aria-hidden="true" /> Secondary water, contents, and external damage included</li>
                <li><Check aria-hidden="true" /> Home and third-party insurers handled through settlement</li>
              </ul>
              <Button asChild className="primary-button"><Link href="/our-process">See our claims process <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <div className={styles.processStages}>
              <span><strong>01</strong><small>Make the site safe and secure</small></span>
              <span><strong>02</strong><small>Record the cause and responsible parties</small></span>
              <span><strong>03</strong><small>Survey structure, utilities, and contents</small></span>
              <span><strong>04</strong><small>Agree the correct insurer and repair scope</small></span>
              <span><strong>05</strong><small>Restore the property and settle</small></span>
            </div>
          </div>
        </section>

        <section className={styles.propertySection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Who We Help"
              title="Impact Claims for Every Property Owner"
              copy="A collision or falling object can affect a home, a tenanted property, or commercial premises. We build the claim around the property, occupants, income, and operation that need to recover."
            />
            <div className={styles.propertyGrid}>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowners</strong><small>Structure, contents, security, accommodation, and repairs.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/landlords"><Building2 aria-hidden="true" /><span><strong>Landlords</strong><small>Tenant safety, reinstatement, external areas, and covered rent.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/business-owners"><Factory aria-hidden="true" /><span><strong>Business Owners</strong><small>Premises, stock, equipment, access, and interruption.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.helpBanner}>
          <div className="page-width">
            <div>
              <p>Has your property suffered impact damage?</p>
              <h2>Make sure hidden structure and every recovery route are assessed.</h2>
            </div>
            <Button asChild className={styles.whiteButton}><Link href="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services"
              copy="Explore storm and fire claims or specialist commercial property claim management."
            />
            <div className={styles.relatedGrid}>
              <Link href="/storm-damage"><CloudLightning aria-hidden="true" /><span><strong>Storm Damage Claims</strong><small>Roofing, fallen trees, water ingress, and emergency repairs.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/fire-damage"><Flame aria-hidden="true" /><span><strong>Fire Damage Claims</strong><small>Fire, smoke, contents, accommodation, and repairs.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/business-owners"><Factory aria-hidden="true" /><span><strong>Business Owner Claims</strong><small>Commercial property, stock, equipment, and interruption.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div>
              <p className={styles.eyebrow}>We&apos;ve Got Answers</p>
              <h2>Frequently Asked Questions</h2>
              <p>Call our team if an impact has just occurred or you need help deciding whether to claim against your policy or a responsible third party.</p>
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
