import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleHelp,
  Clock3,
  Phone,
  Scale,
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

import styles from "../../estate-agents/estate-agents.module.css";
import articleStyles from "../article.module.css";
import blogStyles from "../blog.module.css";

export const metadata: Metadata = {
  title: "Why Insurance Claims Get Rejected | Home Claims Assist",
  description:
    "Understand why UK home insurance claims are rejected, how to examine the insurer's decision, gather evidence, complain, and seek an independent review.",
};

const supportHighlights = [
  { title: "24/7 Support", copy: "Call us anytime", icon: Clock3 },
  { title: "Expert Guidance", copy: "Years of experience", icon: BriefcaseBusiness },
  { title: "Peace of Mind", copy: "We'll handle your claim", icon: ShieldCheck },
  { title: "Satisfaction Guaranteed", copy: "Read our reviews", icon: Star },
];

const rejectionReasons = [
  {
    number: "01",
    title: "Gradual damage rather than a sudden event",
    copy: "Policies normally distinguish sudden, unexpected loss from deterioration developing over time. Water damage is frequently disputed because a hidden leak can develop slowly but produce a sudden visible failure. Photographs, plumbing evidence, and the pattern of damage can be decisive.",
  },
  {
    number: "02",
    title: "Maintenance concerns",
    copy: "An insurer may argue that worn roofing, blocked gutters, failed sealant, or another pre-existing issue caused the loss. The key question is whether the insured event actually caused the damage, not whether every part of the property was in perfect condition.",
  },
  {
    number: "03",
    title: "Incorrect information when cover was arranged",
    copy: "Previous claims, building work, subsidence history, occupancy, bedrooms, and rebuilding figures can affect underwriting. A mistake does not always justify cancelling the whole claim; the outcome depends on the questions asked, the nature of the error, and what the insurer would otherwise have done.",
  },
  {
    number: "04",
    title: "The property was unoccupied",
    copy: "Many policies restrict certain cover after a home has been empty for a specified period. This can affect probate properties, renovation projects, long hospital stays, and rental gaps, with escape-of-water cover often particularly restricted.",
  },
  {
    number: "05",
    title: "A policy condition was not followed",
    copy: "The insurer may rely on a condition involving alarms, winter heating, draining water systems, locks, inspections, or notification. Read the exact term and consider whether the alleged breach was relevant to the loss and whether the insurer has applied it fairly.",
  },
  {
    number: "06",
    title: "The covered loss did not exceed the excess",
    copy: "Sometimes a claim has not technically been declined; the insured repair cost is simply below the policy excess. Check which excess applies and whether the insurer's scope includes all covered damage before accepting that conclusion.",
  },
];

const challengeSteps = [
  {
    title: "Get the decision and policy clause in writing",
    copy: "Ask the insurer to explain precisely why the claim was declined and identify every policy term or exclusion relied on. A written decision gives you something specific to examine and challenge.",
  },
  {
    title: "Read the complete policy wording",
    copy: "The product summary is not the full contract. Read the cited clause together with its definitions, conditions, exceptions, and surrounding wording. Confirm that the facts actually fit the term the insurer has used.",
  },
  {
    title: "Build your own evidence file",
    copy: "Collect photographs, videos, maintenance records, earlier repair invoices, correspondence, and reports from plumbers, roofers, surveyors, or other suitable experts. A causation dispute is usually resolved by the quality of the evidence.",
  },
  {
    title: "Use the insurer's formal complaints process",
    copy: "Submit a clear written complaint stating the outcome you want and attach the documents supporting it. Keep a copy and note the date. For most financial complaints, the firm normally has up to eight weeks to provide its final response.",
  },
  {
    title: "Refer an unresolved complaint to the Ombudsman",
    copy: "The Financial Ombudsman Service is free for consumers and can consider whether the insurer acted fairly and reasonably. A referral is generally required within six months of the insurer's final response, so check the deadline in that letter and act promptly.",
  },
];

const faqs = [
  {
    question: "Can a rejected home insurance claim be overturned?",
    answer:
      "Yes. If the insurer's explanation is not supported by the policy wording, the physical evidence, or fair claims handling, the decision can be challenged through the insurer's complaints process and potentially the Financial Ombudsman Service. The result depends on the facts and evidence in the individual claim.",
  },
  {
    question: "What is the most common reason home insurance claims are refused?",
    answer:
      "Gradual damage is one of the most frequent reasons, particularly in water claims. Policies usually cover sudden insured events rather than long-term deterioration, but the boundary can be disputed when a hidden leak causes a sudden failure. Independent evidence can help establish what happened.",
  },
  {
    question: "How long do I have to complain about a rejected claim?",
    answer:
      "Complain to the insurer as soon as possible. For most complaints, a firm normally has up to eight weeks to issue a final response. A referral to the Financial Ombudsman Service is generally required within six months of the date of that final response, subject to limited exceptions. Always check the deadline in your letter.",
  },
  {
    question: "Does using a loss assessor cost anything upfront?",
    answer:
      "The initial consultation with Home Claims Assist is free. Any fee is agreed in writing before work begins. We will also tell you if the available evidence suggests the insurer's decision is sound and a challenge is unlikely to be worthwhile.",
  },
];

export default function RejectedClaimsArticlePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${articleStyles.articlePage}`}>
        <section className={`${styles.hero} ${articleStyles.articleHero} ${articleStyles.longTitleHero}`}>
          <div className={`${styles.heroShade} ${articleStyles.articleHeroShade}`} />
          <div className={`page-width ${styles.heroInner} ${articleStyles.articleHeroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/blog">Claims Advice</Link><span>/</span><span>Rejected Claims</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Claims Advice</p>
            <h1>Why Home Insurance Claims Get Rejected, and <em>What to Do Next</em></h1>
            <p className={styles.heroCopy}>Most rejected claims fall into a small number of categories. Understanding the stated reason is the first step towards deciding whether the insurer&apos;s position can be challenged.</p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button"><Link href="/contact">Get In Touch <ArrowRight aria-hidden="true" /></Link></Button>
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

        <article className={articleStyles.articleSection}>
          <div className="page-width">
            <div className={articleStyles.articleMeta}>
              <span>Claims Advice</span><time dateTime="2026-07-20">20 July 2026</time><i aria-hidden="true" /><small>8 min read</small>
            </div>
            <figure className={articleStyles.featuredImage}>
              <img src="https://www.homeclaimsassist.co.uk/images/services/homeowners.jpg" alt="A homeowner reviewing insurance claim paperwork at a table" />
            </figure>

            <div className={articleStyles.articleContent}>
              <p className={articleStyles.lead}>Receiving a decline letter can feel final, especially after years of paying for cover. In practice, most decisions are based on an identifiable exclusion, condition, factual dispute, or valuation issue—and some can be reconsidered when the evidence does not support the insurer&apos;s reasoning.</p>
              <p>Begin by working out which category the decision falls into. That determines the policy wording, documents, and expert evidence you may need next.</p>

              <h2>The most common reasons claims are refused</h2>
              <div className={articleStyles.reasonList}>
                {rejectionReasons.map((reason) => (
                  <section className={articleStyles.reasonCard} key={reason.number}>
                    <span>{reason.number}</span><div><h3>{reason.title}</h3><p>{reason.copy}</p></div>
                  </section>
                ))}
              </div>

              <h2>What to do if your claim has been rejected</h2>
              <p>Do not rely on a brief telephone explanation. Create a written record, examine the contract, and work through the challenge in a clear order.</p>
              <ol className={articleStyles.actionSteps}>
                {challengeSteps.map((step, index) => (
                  <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>
                ))}
              </ol>
              <aside className={articleStyles.claimNote}><strong>Watch the deadline:</strong> the current Financial Ombudsman guidance says most referrals must be made within six months of the date on the insurer&apos;s final response. Review the <a href="https://www.financial-ombudsman.org.uk/consumers/complaints-can-help/expect/time-limits" target="_blank" rel="noreferrer">official time-limit guidance</a> and your own final-response letter.</aside>

              <h2>Where a loss assessor fits in</h2>
              <p>A loss adjuster is appointed by the insurer. A loss assessor works for the policyholder. When a claim is contested, an assessor can compare the decline reason with the policy and physical evidence, identify missing information, and prepare a properly supported challenge.</p>
              <p>The work may involve an independent specialist report, a revised schedule of damage, maintenance evidence, or proof that an event described as gradual was actually sudden. An honest review can also conclude that the insurer&apos;s decision is well-founded and that pursuing it further would not be sensible.</p>
              <div className={articleStyles.reviewPanel}><Scale aria-hidden="true" /><div><strong>A decline is not always the end of the process.</strong><p>It can be reviewed, challenged, and changed when the contract and evidence support a different outcome.</p><Link href="/loss-assessor-vs-loss-adjuster">See who represents you <ArrowRight aria-hidden="true" /></Link></div></div>
              <p>If your claim has been declined and you are unsure whether the explanation stands up, <Link href="/contact">contact our claims team</Link> for an initial conversation. You can also see <Link href="/our-process">how we manage a claim</Link> from assessment through settlement.</p>

              <div className={articleStyles.disclaimer}><CircleHelp aria-hidden="true" /><p>This article is general information about UK home insurance claims and complaint routes, not legal or claim-specific advice. Your rights, cover, and deadlines depend on your policy and circumstances.</p></div>
            </div>
          </div>
        </article>

        <section className={articleStyles.moreSection}>
          <div className="page-width">
            <div className={articleStyles.moreHeading}><p>Keep Reading</p><h2>More claims advice</h2></div>
            <div className={articleStyles.moreGrid}>
              <article className={blogStyles.articleCard}>
                <Link className={blogStyles.articleImage} href="/blog/first-48-hours-after-escape-of-water" aria-label="Read the first 48 hours after an escape of water">
                  <img src="https://www.homeclaimsassist.co.uk/images/services/burst-pipes-damage.jpg" alt="Water damage caused by a burst pipe in a home" />
                  <span>Escape of Water</span>
                </Link>
                <div className={blogStyles.articleBody}>
                  <p className={blogStyles.articleMeta}><span>20 July 2026</span><i aria-hidden="true" /><span>8 min read</span></p>
                  <h2><Link href="/blog/first-48-hours-after-escape-of-water">The First 48 Hours After an Escape of Water</Link></h2>
                  <p>A practical first-two-days guide to safety, containing damage, and preserving evidence for your claim.</p>
                  <Link className={blogStyles.readLink} href="/blog/first-48-hours-after-escape-of-water">Read article <ArrowRight aria-hidden="true" /></Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={articleStyles.articleCta}>
          <div className="page-width">
            <div><p>Has your claim been declined?</p><h2>Speak to a loss assessor about the insurer&apos;s decision</h2><span>We will review what happened, explain the available options, and tell you honestly whether a challenge appears worthwhile.</span></div>
            <Button asChild className={articleStyles.ctaButton}><Link href="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div><p className={styles.eyebrow}>We've Got Answers</p><h2>Frequently Asked Questions</h2><p>Speak to our claims team about the policy wording, evidence, complaint deadline, or settlement decision affecting your property claim.</p><a href="tel:02034108351"><Phone aria-hidden="true" /> Speak to our team</a></div>
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
