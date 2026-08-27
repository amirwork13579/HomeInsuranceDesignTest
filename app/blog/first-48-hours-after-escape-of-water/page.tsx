import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Check,
  Clock3,
  Droplets,
  Phone,
  ShieldCheck,
  Star,
  TriangleAlert,
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
  title: "First 48 Hours After a Water Leak | Home Claims Assist",
  description:
    "A practical guide to the first 48 hours after an escape of water, including safety, evidence, insurer notification, drying, and protecting your home insurance claim.",
};

const supportHighlights = [
  { title: "24/7 Support", copy: "Call us anytime", icon: Clock3 },
  { title: "Expert Guidance", copy: "Years of experience", icon: BriefcaseBusiness },
  { title: "Peace of Mind", copy: "We'll handle your claim", icon: ShieldCheck },
  { title: "Satisfaction Guaranteed", copy: "Read our reviews", icon: Star },
];

const photoChecklist = [
  "Wide photographs showing every affected room and the overall scale of the water spread.",
  "Close-up photographs of ceilings, walls, flooring, skirting boards, and visible staining.",
  "The source of the leak, if it is visible and can be photographed without taking a risk.",
  "Standing water and its highest reach, with a familiar object included to show scale.",
  "Each damaged possession separately, rather than only photographing items in a pile.",
  "Model plates and serial numbers from affected appliances and electrical equipment.",
  "A slow video walkthrough describing what you can see in each room.",
];

const faqs = [
  {
    question: "What should I do first after a burst pipe?",
    answer:
      "Turn off the water at the stopcock. If water is close to electrical fittings, keep clear and isolate the power only when it is safe to do so; contact a qualified electrician if you are uncertain. Keep everyone away from a ceiling holding water, then record the damage before clearing up.",
  },
  {
    question: "Should I clean up before the insurer inspects?",
    answer:
      "You should take reasonable steps to prevent additional damage, such as moving dry belongings and containing active drips, but photograph everything first. Emergency work that stops the leak is normally necessary; keep its invoice. Avoid permanent repairs or disposing of damaged items before assessment.",
  },
  {
    question: "How long does drying take after an escape of water?",
    answer:
      "Often longer than expected. Moisture can enter floor voids, wall cavities, insulation, and ceilings, so monitored drying commonly takes weeks. Reinstating finishes before moisture levels are suitable can cause mould, damaged plaster, and distorted timber.",
  },
  {
    question: "Why did my insurer call my leak gradual damage?",
    answer:
      "Policies generally distinguish a sudden insured event from deterioration over time. Insurers may question when a leak began, particularly when hidden damage is extensive. When reporting the incident, state what you observed and when you discovered it, and avoid guessing about a duration you cannot verify.",
  },
];

export default function EscapeOfWaterArticlePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${articleStyles.articlePage}`}>
        <section className={`${styles.hero} ${articleStyles.articleHero}`}>
          <div className={`${styles.heroShade} ${articleStyles.articleHeroShade}`} />
          <div className={`page-width ${styles.heroInner} ${articleStyles.articleHeroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/blog">Claims Advice</Link><span>/</span><span>Escape of Water</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Escape of Water</p>
            <h1>The First 48 Hours After an <em>Escape of Water</em></h1>
            <p className={styles.heroCopy}>What you do immediately after a leak can shape the entire claim. This practical guide covers safety, limiting damage, and preserving the evidence your insurer will need.</p>
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
              <span>Escape of Water</span><time dateTime="2026-07-20">20 July 2026</time><i aria-hidden="true" /><small>8 min read</small>
            </div>
            <figure className={articleStyles.featuredImage}>
              <img src="https://www.homeclaimsassist.co.uk/images/services/burst-pipes-damage.jpg" alt="Water damage to a domestic ceiling following a burst pipe" />
            </figure>

            <div className={articleStyles.articleContent}>
              <p className={articleStyles.lead}>Escape of water is one of the most frequent and costly household insurance losses. The first two days matter because safety decisions, early evidence, and the steps taken to limit further damage all become part of the claim record.</p>
              <p>A leak is also the moment when careful record-keeping feels least important. You may be moving furniture, containing water, and trying to find a plumber. The sequence below gives you a clear order of priorities.</p>

              <h2>Hour one: stop it and make it safe</h2>
              <p>Turn off the water at the stopcock as soon as you can. In many homes it is beneath the kitchen sink, inside a ground-floor cupboard, or close to the point where the mains supply enters the building. If you cannot locate it, call an emergency plumber.</p>
              <div className={articleStyles.safetyPanel}>
                <TriangleAlert aria-hidden="true" />
                <div><strong>Water and electricity are a dangerous combination.</strong><p>Keep away from wet electrical fittings. Isolate the supply at the consumer unit only if you can do so safely, and use a qualified electrician before restoring power when there is any uncertainty.</p></div>
              </div>
              <p>Keep people away from bulging or saturated ceilings. Water adds considerable weight, and weakened plasterboard can fall without warning.</p>

              <h2>Before clearing up: record the damage</h2>
              <p>Your instinct may be to mop, move damaged furniture outside, and make the rooms look manageable. First spend a few minutes creating a clear visual record. Once water is removed and possessions are moved, the original extent of the incident becomes harder to demonstrate.</p>
              <div className={articleStyles.checklist}>
                <div className={articleStyles.checklistHeading}><Camera aria-hidden="true" /><div><strong>Your evidence checklist</strong><span>Photograph more than you think you will need.</span></div></div>
                <ul>{photoChecklist.map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>
              </div>

              <h2>Report the incident without guessing</h2>
              <p>Notify your insurer promptly and make a note of the claim reference. Explain what happened, when you first noticed it, which rooms are affected, and what emergency action has been taken.</p>
              <p>Keep the description factual. Avoid guessing at the cause or how long a hidden leak may have existed. If you do not know, say so. Early calls are usually logged and can influence how the insurer later assesses the event.</p>
              <aside className={articleStyles.claimNote}><strong>Useful rule:</strong> report what you saw and when you saw it. Do not offer a theory that has not been confirmed by a plumber or another qualified specialist.</aside>

              <h2>Limit further damage, but pause permanent repairs</h2>
              <p>Most policies require reasonable steps to prevent the loss becoming worse. Move unaffected possessions into dry rooms, lift loose rugs, catch active drips, ventilate where appropriate, and arrange the emergency repair needed to stop the leak. Keep every invoice and receipt.</p>
              <p>Avoid permanent reinstatement before the insurer has inspected and recorded the damage. Do not replaster, replace flooring, or redecorate too early. Damaged possessions should also be photographed and retained in a safe place until the insurer confirms they can be disposed of.</p>

              <h2>Start a claim diary on day one</h2>
              <p>Use a note on your phone or a document to record every call, email, visit, and promise. Include dates, times, names, reference numbers, decisions, requested documents, and agreed deadlines. Store photographs, invoices, and correspondence together.</p>
              <p>Water claims can run for months. A simple diary gives you a reliable record when the detail of an early conversation is questioned later.</p>

              <h2>Understand what proper drying involves</h2>
              <p>Moisture often travels beneath floors, behind wall finishes, through insulation, and into ceiling voids. A surface may feel dry while the construction behind it remains wet. Controlled drying should be supported by moisture readings and monitored until the building is ready for reinstatement.</p>
              <p>Rushing this stage can lead to mould, damaged plaster, and distorted timber. If a proposed programme looks unusually short, ask which moisture readings support it and how hidden areas will be checked.</p>

              <h2>Where water claims commonly go wrong</h2>
              <p>Problems often begin when hidden damage is missed, a schedule of work covers only the visible areas, replacement specifications are reduced, or the insurer argues that the leak developed gradually. Independent evidence and a complete scope of work are essential when the claim is disputed or undervalued.</p>
              <p>The insurer&apos;s loss adjuster represents the insurer. A loss assessor represents you by documenting the full damage, preparing the claim, and negotiating the settlement. Read more about <Link href="/burst-pipes">burst-pipe and escape-of-water claims</Link> or see <Link href="/our-process">how our claims process works</Link>.</p>
              <p>If the leak happened recently and you want an experienced view of your next step, <Link href="/contact">contact our team</Link>. The initial consultation is free.</p>

              <div className={articleStyles.disclaimer}><Droplets aria-hidden="true" /><p>This article provides general information about UK home insurance claims. It is not advice on an individual policy or loss. Your cover depends on your wording and circumstances.</p></div>
            </div>
          </div>
        </article>

        <section className={articleStyles.moreSection}>
          <div className="page-width">
            <div className={articleStyles.moreHeading}><p>Keep Reading</p><h2>More claims advice</h2></div>
            <div className={articleStyles.moreGrid}>
              <article className={blogStyles.articleCard}>
                <Link className={blogStyles.articleImage} href="/blog/why-home-insurance-claims-get-rejected" aria-label="Read why home insurance claims get rejected">
                  <img src="https://www.homeclaimsassist.co.uk/images/services/homeowners.jpg" alt="Homeowner reviewing an insurance claim" />
                  <span>Claims Advice</span>
                </Link>
                <div className={blogStyles.articleBody}>
                  <p className={blogStyles.articleMeta}><span>20 July 2026</span><i aria-hidden="true" /><span>8 min read</span></p>
                  <h2><Link href="/blog/why-home-insurance-claims-get-rejected">Why Home Insurance Claims Get Rejected, and What to Do Next</Link></h2>
                  <p>The most common reasons property claims are declined, and the practical options available after an insurer says no.</p>
                  <Link className={blogStyles.readLink} href="/blog/why-home-insurance-claims-get-rejected">Read article <ArrowRight aria-hidden="true" /></Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={articleStyles.articleCta}>
          <div className="page-width">
            <div><p>Need help with a live claim?</p><h2>Speak to a loss assessor about your water damage</h2><span>We will listen to what happened, explain where you stand, and tell you honestly whether professional support would help.</span></div>
            <Button asChild className={articleStyles.ctaButton}><Link href="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div><p className={styles.eyebrow}>We've Got Answers</p><h2>Frequently Asked Questions</h2><p>Call our loss assessors for guidance based on your own policy, the cause of the leak, and the damage at your property.</p><a href="tel:02034108351"><Phone aria-hidden="true" /> Speak to our team</a></div>
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
