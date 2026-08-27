"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  CarFront,
  Check,
  Clock3,
  CloudLightning,
  Droplets,
  Flame,
  HomeIcon,
  Mail,
  MapPin,
  Phone,
  Play,
  ShieldCheck,
  Warehouse,
  Waves,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const source = "https://www.homeclaimsassist.co.uk";

const services = [
  {
    title: "Homeowners",
    eyebrow: "Your Home. Your Claim. Our Fight.",
    description:
      "We guide you through the entire insurance claim process and ensure you are back home as quickly as possible. From initial assessment to final settlement, our experts handle all the paperwork and negotiations.",
    bullets: [
      "Full claim management",
      "Alternative accommodation",
      "Maximum settlement",
    ],
    metric: "98%",
    metricLabel: "Success Rate",
    href: "/homeowners",
    image: `${source}/images/services/homeowners.jpg`,
  },
  {
    title: "Business Owners",
    eyebrow: "Protect Your Business. Secure Your Future.",
    description:
      "We help you stay in control throughout the insurance claim process in order to safeguard your company's future. Minimising downtime and ensuring business continuity is our priority.",
    bullets: [
      "Business interruption claims",
      "Stock & inventory loss",
      "Revenue protection",
    ],
    metric: "£50M+",
    metricLabel: "Recovered",
    href: "/business-owners",
    image: `${source}/images/services/business.jpg`,
  },
  {
    title: "Landlords",
    eyebrow: "Safeguard Your Investment. Maximise Your Payout.",
    description:
      "We guide you through the insurance claim process and ensure you are able to re-let your property as quickly as possible. We handle tenant liaison and reinstatement works supervision.",
    bullets: [
      "Rental income recovery",
      "Tenant management",
      "Property reinstatement",
    ],
    metric: "2,500+",
    metricLabel: "Claims Handled",
    href: "/landlords",
    image: `${source}/images/services/landlords.jpg`,
  },
];

const perils = [
  {
    title: "Fire Damage",
    description:
      "Fire can devastate your property in minutes. We make sure repairs, contents and alternative accommodation are fully represented.",
    image: `${source}/images/services/fire-damage.jpg`,
    icon: Flame,
    href: "/fire-damage",
  },
  {
    title: "Flood Damage",
    description:
      "From flash flooding to river damage, we manage emergency mitigation, drying and full reinstatement of your property.",
    image: `${source}/images/services/flood-damage.jpg`,
    icon: Waves,
    href: "/flood-damage",
  },
  {
    title: "Burst Pipes",
    description:
      "Escape of water is one of the most common claims. We identify hidden damage and make sure it is properly documented.",
    image: `${source}/images/services/burst-pipes-damage.jpg`,
    icon: Droplets,
    href: "/burst-pipes",
  },
  {
    title: "Storm Damage",
    description:
      "High winds, heavy rain and lightning can cause structural damage. We assess the full extent and negotiate complete repairs.",
    image: `${source}/images/services/storm-damage.jpg`,
    icon: CloudLightning,
    href: "/storm-damage",
  },
  {
    title: "Impact Damage",
    description:
      "Vehicle collisions, falling trees and other impacts are handled from first assessment through to settlement.",
    image: `${source}/images/services/impact-damage.jpg`,
    icon: CarFront,
    href: "/impact-damage",
  },
];

const processSteps = [
  {
    title: "Initial Contact",
    copy: "Call us or complete the form. We will discuss your situation and give immediate guidance on the next steps.",
  },
  {
    title: "Free Assessment",
    copy: "A qualified loss assessor visits your property, records the full extent of the damage and begins building your claim.",
  },
  {
    title: "Claim Preparation",
    copy: "We prepare detailed reports, photographs and professional valuations so every item of damage is captured and costed.",
  },
  {
    title: "Negotiation",
    copy: "We deal directly with your insurer and their loss adjuster, challenging low offers and protecting your position.",
  },
  {
    title: "Settlement & Reinstatement",
    copy: "Once agreed, we secure prompt payment and can oversee the reinstatement work that restores your property.",
  },
];

const partners = [
  {
    title: "Estate Agents",
    icon: HomeIcon,
    copy: "Take property damage claims off your desk. We handle everything from the first call to the final repair.",
    href: "/estate-agents",
  },
  {
    title: "Insurance Brokers",
    icon: ShieldCheck,
    copy: "We manage claims end-to-end for your policyholders while strengthening the relationship you have built.",
    href: "/insurance-brokers",
  },
  {
    title: "Leak Detection",
    icon: Droplets,
    copy: "You find the leak. We manage the claim, restoration and settlement while keeping your client informed.",
    href: "/leak-detection-partners",
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(1);
  const [activePeril, setActivePeril] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section className="hero" id="top">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster={`${source}/images/services/business.jpg`}
          >
            <source src={`${source}/hero-video.mp4`} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <p className="eyebrow hero-eyebrow"><span /> Loss Assessors &amp; Insurance Claim Specialists</p>
            <h1>
              <span>We Fight</span>
              <span>For Your <em>Claim</em></span>
            </h1>
            <p className="hero-copy">
              Over 15 years of experience ensuring homeowners, landlords, and businesses get the insurance settlement they deserve. <strong>No hidden fees. Maximum payouts.</strong>
            </p>
            <div className="hero-stats" aria-label="Company results">
              <div><strong>£50M+</strong><span>Recovered</span></div>
              <div><strong>15+</strong><span>Years Experience</span></div>
              <div><strong>5,000+</strong><span>Claims Handled</span></div>
            </div>
            <div className="hero-actions">
              <Button asChild size="lg" className="primary-button hero-button">
                <a href="#contact">Start Your Claim <ArrowRight aria-hidden="true" /></a>
              </Button>
              <a className="outline-call" href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
              <span className="hero-note"><Clock3 aria-hidden="true" /> 24/7 Emergency Line</span>
              <span className="hero-note"><MapPin aria-hidden="true" /> UK-Wide Coverage</span>
            </div>
          </div>
          <a className="scroll-cue" href="#intro" aria-label="Scroll to learn more"><span>Scroll</span><i /></a>
        </section>

        <section className="intro-section" id="intro">
          <div className="narrow-copy">
            <h2>What Is a Loss Assessor and Why Do You Need One?</h2>
            <p>
              When your property is damaged, your insurance company appoints a <a href="/loss-assessor-vs-loss-adjuster">loss adjuster</a> to assess the claim on their behalf. Their job is to manage the insurer&apos;s costs. A loss assessor does the opposite — we work exclusively for you, the policyholder, to ensure your claim is properly documented, correctly valued, and settled for the full amount you are entitled to.
            </p>
            <p>
              Home Claims Assist provides specialist insurance claim management for <a href="/homeowners">homeowners</a>, <a href="/landlords">landlords</a>, and <a href="/business-owners">business owners</a> across the UK. Whether you are dealing with <a href="#perils">fire, flood, storm, burst pipe, or impact damage</a>, our qualified loss assessors handle the entire claim from initial inspection through to final settlement.
            </p>
            <p>
              With over 15 years of experience and more than £50 million recovered for our clients, we understand how insurers operate and what it takes to achieve a fair outcome. There are no upfront fees — we only get paid when your claim settles.
            </p>
          </div>
        </section>

        <section className="services-section patterned" id="services">
          <div className="page-width">
            <SectionHeading eyebrow="What We Do" title="Our Services" copy="Whether you're a homeowner, landlord, or business owner, we have the expertise to manage your insurance claim from start to finish." />
            <div className="service-grid">
              {services.map((service, index) => {
                const active = activeService === index;
                return (
                  <article
                    key={service.title}
                    className={`service-card ${active ? "active" : ""}`}
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(26,45,56,.08), rgba(25,42,53,.96)), url(${service.image})` }}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    tabIndex={0}
                  >
                    <div className="service-number">0{index + 1}</div>
                    <div className="service-content">
                      <p className="card-eyebrow">{service.eyebrow}</p>
                      <h3>{service.title}</h3>
                      <div className="service-expanded">
                        <p>{service.description}</p>
                        <ul>
                          {service.bullets.map((bullet) => <li key={bullet}><Check aria-hidden="true" /> {bullet}</li>)}
                        </ul>
                      </div>
                      <div className="service-bottom">
                        <div><strong>{service.metric}</strong><span>{service.metricLabel}</span></div>
                        {active ? (
                          <a className="small-button" href={service.href}>Learn More <ArrowRight aria-hidden="true" /></a>
                        ) : (
                          <span className="tap-copy">Tap to explore <ArrowRight aria-hidden="true" /></span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="perils-section patterned" id="perils">
          <div className="page-width">
            <SectionHeading eyebrow="Types of Claims" title="Perils We Cover" copy="Whatever disaster has struck your property, we have the expertise to handle your claim and get you the settlement you deserve." />
            <div className="peril-grid">
              {perils.map((peril, index) => {
                const Icon = peril.icon;
                const active = activePeril === index;
                return (
                  <article
                    key={peril.title}
                    className={`peril-card ${active ? "active" : ""}`}
                    onMouseEnter={() => setActivePeril(index)}
                    onFocus={() => setActivePeril(index)}
                    tabIndex={0}
                    style={active ? { backgroundImage: `linear-gradient(rgba(28,46,57,.88), rgba(28,46,57,.95)), url(${peril.image})` } : undefined}
                  >
                    <div className="peril-icon"><Icon aria-hidden="true" /></div>
                    <h3>{peril.title}</h3>
                    <p>{peril.description}</p>
                    <a href={peril.href}>Learn More <ArrowRight aria-hidden="true" /></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="coverage-section">
          <div className="page-width">
            <SectionHeading eyebrow="Insurance Claim Guidance" title="What Does a Home Insurance Claim Cover?" copy="A home insurance claim can cover far more than most policyholders realise. Understanding what you are entitled to is the first step towards a fair settlement." />
            <div className="coverage-grid">
              <article>
                <Building2 aria-hidden="true" />
                <h3>Building Insurance Claims</h3>
                <p>Building insurance covers your property&apos;s structure — walls, roof, floors, fitted kitchens, bathrooms and permanent fixtures. It can also cover surveyor and architect costs.</p>
              </article>
              <article>
                <Warehouse aria-hidden="true" />
                <h3>Contents Insurance Claims</h3>
                <p>Contents cover protects furniture, electronics, clothing, jewellery and household items. We prepare a detailed inventory so nothing is missed or undervalued.</p>
              </article>
              <article>
                <HomeIcon aria-hidden="true" />
                <h3>Alternative Accommodation</h3>
                <p>If your property is uninhabitable during repairs, your policy will typically cover temporary accommodation, storage and additional living expenses.</p>
              </article>
            </div>
            <p className="coverage-note">Many claims also include professional cleaning, debris removal, emergency boarding, loss of rent for <a href="/landlords">landlords</a>, and business interruption for <a href="/business-owners">business owners</a>.</p>
          </div>
        </section>

        <section className="stats-band" aria-label="Home Claims Assist statistics">
          <div className="page-width stats-grid">
            <div><strong>15+</strong><span>Years Experience</span></div>
            <div><strong>2500+</strong><span>Claims Handled</span></div>
            <div><strong>98%</strong><span>Success Rate</span></div>
            <div><strong>£50M+</strong><span>Claimed for Clients</span></div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="page-width process-layout">
            <div className="process-intro">
              <p className="eyebrow">Our Process</p>
              <h2>How We Handle <em>Your Claim</em></h2>
              <p>From the moment you contact us, we take care of everything. Our proven five-step process ensures maximum settlements with minimum stress for you.</p>
              <aside>
                <h3>Loss Assessor vs Loss Adjuster</h3>
                <p>A <strong>Loss Assessor</strong> works for you, the policyholder. A Loss Adjuster works for the insurance company. Having us on your side keeps your interests protected.</p>
                <a href="/loss-assessor-vs-loss-adjuster">Learn More <ArrowRight aria-hidden="true" /></a>
              </aside>
            </div>
            <ol className="timeline">
              {processSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{step.title}</h3><p>{step.copy}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="partners-section" id="partners">
          <div className="page-width">
            <SectionHeading eyebrow="Partner With Us" title="Your Industry. Our Expertise. Shared Revenue." copy="We partner with estate agents, insurance brokers, and leak detection companies across the UK. You refer the claim, we do the work, you get paid." />
            <div className="partner-grid">
              {partners.map(({ title, icon: Icon, copy, href }) => (
                <article key={title}>
                  <span className="partner-icon"><Icon aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <a href={href}>Learn More <ArrowRight aria-hidden="true" /></a>
                </article>
              ))}
            </div>
            <div className="partner-cta">
              <p><strong>Zero cost. Zero risk.</strong> Commission on every settled claim.</p>
              <Button asChild className="primary-button"><a href="#contact">Become a Partner <ArrowRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="page-width testimonial-layout">
            <div className="testimonial-copy">
              <p className="eyebrow">Hear From Our Clients</p>
              <h2>Why Use Home Claims Assist?</h2>
              <p>Don&apos;t just take our word for it. See how we&apos;ve helped homeowners get the settlements they deserve.</p>
              <p className="proof-line">Over 2,500 claims settled <span>•</span> 98% success rate <span>•</span> Free consultation</p>
              <Button asChild className="primary-button"><a href="#contact">Start Your Claim Today <ArrowRight aria-hidden="true" /></a></Button>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="video-card" type="button" aria-label="Play video: Why Use Home Claims Assist?">
                  <img src={`${source}/images/youtube-home.jpg`} alt="Home Claims Assist client video" />
                  <span className="play-button"><Play fill="currentColor" aria-hidden="true" /></span>
                  <span className="watch-label">Watch Video</span>
                </button>
              </DialogTrigger>
              <DialogContent className="video-dialog" aria-describedby="video-description">
                <DialogTitle>Why Use Home Claims Assist?</DialogTitle>
                <DialogDescription id="video-description">A Home Claims Assist customer story.</DialogDescription>
                <div className="video-frame">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/d_yHpYoMaYE?rel=0&modestbranding=1"
                    title="Why Use Home Claims Assist?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section className="article-section">
          <div className="page-width article-grid">
            <article>
              <h2>How Does the Claims Process Work With a Loss Assessor?</h2>
              <p>When you instruct Home Claims Assist, we take over management of your insurance claim from day one. We begin with a free assessment, reviewing the damage and your policy before advising you on what can be claimed.</p>
              <p>We prepare a fully documented claim with a schedule of damage, supporting photographs, contractor estimates, and specialist reports. Then we manage every conversation with the insurer, adjuster, surveyors and engineers.</p>
            </article>
            <article>
              <h2>Why Instruct an Independent Loss Assessor?</h2>
              <p>Insurance companies appoint loss adjusters to represent the insurer. An independent loss assessor acts solely for you and has the experience to recognise when a settlement falls short.</p>
              <p>Our service is provided on a no-win, no-fee basis, with a pre-agreed percentage confirmed in writing before work starts. Our interests stay aligned with yours throughout the claim.</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Get In Touch</p>
              <h2>Start Your Claim Today</h2>
              <p>Don&apos;t let your insurance company undervalue your claim. Contact us now for a free, no-obligation consultation and find out how much your claim could be worth.</p>
              <div className="contact-cards">
                <a href="tel:02034108351"><Phone aria-hidden="true" /><span><strong>London Office</strong><b>020 3410 8351</b><small>536 Barking Road, London, E13 8QE</small></span></a>
                <a href="tel:01916913162"><MapPin aria-hidden="true" /><span><strong>Newcastle Office</strong><b>0191 691 3162</b><small>288a Stanhope Street, Newcastle, NE4 5JU</small></span></a>
                <a href="mailto:info@homeclaimsassist.co.uk"><Mail aria-hidden="true" /><span><strong>Email Us</strong><b>info@homeclaimsassist.co.uk</b><small>We respond within 2 hours</small></span></a>
              </div>
            </div>
            <form className="claim-form" onSubmit={submitForm}>
              <h3>Request a Free Consultation</h3>
              {submitted ? (
                <div className="form-success" role="status">
                  <span><Check aria-hidden="true" /></span>
                  <h4>Thank you — your request is ready.</h4>
                  <p>This design demo does not send personal information. Connect the form to your chosen CRM or email service before launch.</p>
                  <Button type="button" className="primary-button" onClick={() => setSubmitted(false)}>Send another enquiry</Button>
                </div>
              ) : (
                <>
                  <div className="form-grid">
                    <label>First Name *<Input required name="firstName" placeholder="John" /></label>
                    <label>Last Name *<Input required name="lastName" placeholder="Smith" /></label>
                    <label>Email Address *<Input required type="email" name="email" placeholder="john@example.com" /></label>
                    <label>Phone Number *<Input required type="tel" name="phone" placeholder="020 1234 5678" /></label>
                    <label className="full-field">Type of Claim
                      <Select name="claimType">
                        <SelectTrigger className="claim-select"><SelectValue placeholder="Select claim type..." /></SelectTrigger>
                        <SelectContent>
                          {perils.map((peril) => <SelectItem key={peril.title} value={peril.title}>{peril.title}</SelectItem>)}
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </label>
                    <label className="full-field">Tell Us About Your Claim<Textarea name="message" placeholder="Brief description of the damage..." /></label>
                  </div>
                  <Button type="submit" size="lg" className="primary-button submit-button">Get Your Free Consultation <ArrowRight aria-hidden="true" /></Button>
                  <p className="form-disclaimer">By submitting this form, you agree to be contacted regarding your insurance claim.</p>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}
