import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Clock3,
  FileText,
  Home,
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

import styles from "../estate-agents/estate-agents.module.css";
import blogStyles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Claims Advice & Insights | Home Claims Assist",
  description:
    "Practical guidance from experienced UK loss assessors on home insurance claims, rejected claims, escape of water damage, evidence, and fair settlements.",
};

const supportHighlights = [
  { title: "24/7 Support", copy: "Call us anytime", icon: Clock3 },
  { title: "Expert Guidance", copy: "Years of experience", icon: BriefcaseBusiness },
  { title: "Peace of Mind", copy: "We'll handle your claim", icon: ShieldCheck },
  { title: "Satisfaction Guaranteed", copy: "Read our reviews", icon: Star },
];

const articles = [
  {
    category: "Escape of Water",
    date: "20 July 2026",
    readTime: "8 min read",
    title: "The First 48 Hours After an Escape of Water",
    copy: "What you do in the first two days after a leak shapes the whole claim. A practical guide to stopping the damage and protecting your evidence.",
    href: "/blog/first-48-hours-after-escape-of-water",
    image: "https://www.homeclaimsassist.co.uk/images/services/burst-pipes-damage.jpg",
    alt: "Water damage caused by a burst pipe in a home",
  },
  {
    category: "Claims Advice",
    date: "20 July 2026",
    readTime: "8 min read",
    title: "Why Home Insurance Claims Get Rejected, and What to Do Next",
    copy: "Most rejected home insurance claims fall into a handful of categories. Here is why claims are refused, and what your options are if yours has been.",
    href: "/blog/why-home-insurance-claims-get-rejected",
    image: "https://www.homeclaimsassist.co.uk/images/services/homeowners.jpg",
    alt: "Homeowner reviewing an insurance claim",
  },
];

const faqs = [
  {
    question: "Is the advice on this blog specific to my claim?",
    answer:
      "No. These articles are general guidance about how home insurance claims work in the UK. Every claim turns on its own policy wording and facts, so contact us for a free consultation if you want advice about your situation.",
  },
  {
    question: "Do you charge for an initial conversation?",
    answer:
      "No. The initial consultation is free, and we agree our fee in writing before any work begins. If we think you do not need us, we will tell you.",
  },
];

export default function ClaimsAdvicePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className={`${styles.page} ${blogStyles.blogPage}`}>
        <section className={`${styles.hero} ${blogStyles.blogHero}`}>
          <div className={`${styles.heroShade} ${blogStyles.blogHeroShade}`} />
          <div className={`page-width ${styles.heroInner} ${blogStyles.blogHeroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Claims Advice</span>
            </nav>
            <p className={styles.heroEyebrow}><span /> Insights</p>
            <h1>Claims advice from people who <em>do this every day</em></h1>
            <p className={styles.heroCopy}>
              Practical guidance on how home insurance claims actually work. What insurers look for, where claims go wrong, and how to protect your position from day one.
            </p>
            <div className={styles.heroActions}>
              <Button asChild size="lg" className="primary-button hero-button">
                <Link href="/#contact">Get In Touch <ArrowRight aria-hidden="true" /></Link>
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

        <section className={blogStyles.articlesSection}>
          <div className="page-width">
            <SectionHeading
              eyebrow="Latest Articles"
              title="Guidance for policyholders"
              copy="We spend our working lives inside insurance claims. These are the things we find ourselves explaining most often."
            />
            <div className={blogStyles.articleGrid}>
              {articles.map((article) => (
                <article className={blogStyles.articleCard} key={article.href}>
                  <Link className={blogStyles.articleImage} href={article.href} aria-label={`Read ${article.title}`}>
                    <img src={article.image} alt={article.alt} />
                    <span>{article.category}</span>
                  </Link>
                  <div className={blogStyles.articleBody}>
                    <p className={blogStyles.articleMeta}><span>{article.date}</span><i aria-hidden="true" /><span>{article.readTime}</span></p>
                    <h2><Link href={article.href}>{article.title}</Link></h2>
                    <p>{article.copy}</p>
                    <Link className={blogStyles.readLink} href={article.href}>Read article <ArrowRight aria-hidden="true" /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={blogStyles.liveClaimSection}>
          <div className={`page-width ${blogStyles.liveClaimCard}`}>
            <div className={blogStyles.liveClaimIcon}><BookOpen aria-hidden="true" /></div>
            <div>
              <p>Talk to an expert</p>
              <h2>Need advice on a live claim?</h2>
              <span>If you are dealing with a claim right now and want to know whether you are approaching it correctly, speak to our team. The initial consultation is free.</span>
            </div>
            <Button asChild className={blogStyles.liveClaimButton}>
              <Link href="/#contact">Contact Us <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className="page-width">
            <SectionHeading eyebrow="Explore More" title="Related Services" copy="Learn how we manage a claim and why independent representation can protect your position." />
            <div className={styles.relatedGrid}>
              <Link href="/our-process"><FileText aria-hidden="true" /><span><strong>Our Claims Process</strong><small>See how we handle your insurance claim step by step.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/loss-assessor-vs-loss-adjuster"><Scale aria-hidden="true" /><span><strong>Loss Assessor vs Adjuster</strong><small>Understand who works for you and who works for the insurer.</small></span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/homeowners"><Home aria-hidden="true" /><span><strong>Homeowner Claims</strong><small>Complete insurance claim support for property owners.</small></span><ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`page-width ${styles.faqLayout}`}>
            <div><p className={styles.eyebrow}>We've Got Answers</p><h2>Frequently Asked Questions</h2><p>Our articles explain common claim issues. For advice based on your policy and damage, speak directly to our loss assessors.</p><a href="tel:02034108351"><Phone aria-hidden="true" /> Speak to our team</a></div>
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

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className={styles.sectionHeading}><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2><p>{copy}</p></div>;
}
