import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const source = "https://www.homeclaimsassist.co.uk";

const nationwideOffices = [
  ["Manchester", "First Floor, Swan Buildings, 20 Swan Street", "Manchester, M4 5JW"],
  ["Birmingham", "Office 1, Izabella House, 24-26 Regent Place", "Birmingham, B1 3NJ"],
  ["Leeds", "Ground Floor, Radley House, Richardshaw Road", "Leeds, LS28 6LE"],
  ["Liverpool", "Level One, Basecamp Liverpool, 49 Jamaica Street", "Liverpool, L1 0AH"],
  ["Glasgow", "Office 1, Technology House, 9 Newton Place", "Glasgow, G3 7PR"],
  ["Edinburgh", "3F1, Third Floor, 3 Hill Street, New Town", "Edinburgh, EH2 3JP"],
];

const footerLinks = [
  {
    title: "Services",
    links: [
      ["Homeowners", "/homeowners"],
      ["Business Owners", "/business-owners"],
      ["Landlords", "/landlords"],
    ],
  },
  {
    title: "Perils",
    links: [
      ["Fire Damage", "/fire-damage"],
      ["Flood Damage", "/flood-damage"],
      ["Burst Pipes", "/burst-pipes"],
      ["Storm Damage", "/storm-damage"],
      ["Impact Damage", "/impact-damage"],
    ],
  },
  {
    title: "Partners",
    links: [
      ["Estate Agents", "/estate-agents"],
      ["Insurance Brokers", "/#partners"],
      ["Leak Detection", "/#partners"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Our Process", "/#process"],
      ["Loss Assessor vs Adjuster", "/#process"],
      ["Claims Advice", "/#intro"],
      ["Contact Us", "/#contact"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div><h2>Ready to Start Your Claim?</h2><p>Get in touch today and let our experts handle everything for you.</p></div>
        <Button asChild className="footer-button"><Link href="/#contact">Contact Us Now <ArrowRight aria-hidden="true" /></Link></Button>
      </div>
      <div className="page-width footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand"><img src={`${source}/images/logo.png`} alt="Home Claims Assist" /></Link>
          <p>Over 15 years of experience handling insurance claims for homeowners, landlords, and businesses across the UK.</p>
          <address>
            <span><i /> <strong>London Office</strong><small>536 Barking Road, London, E13 8QE</small><a href="tel:02034108351">020 3410 8351</a></span>
            <span><i /> <strong>Newcastle Office</strong><small>288a Stanhope Street, Newcastle upon Tyne, NE4 5JU</small><a href="tel:01916913162">0191 691 3162</a></span>
          </address>
        </div>
        {footerLinks.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            <ul>{column.links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="page-width office-list">
        <h3>Our Offices Nationwide</h3>
        <div>{nationwideOffices.map(([city, line1, line2]) => <address key={city}><i /><strong>{city}</strong><span>{line1}<br />{line2}</span></address>)}</div>
      </div>
      <div className="page-width footer-bottom">
        <p>© 2026 Home Claims Assist. All rights reserved.</p>
        <p>Mon–Fri: 9:30 AM – 5:30 PM <span>|</span> <a href="mailto:info@homeclaimsassist.co.uk">info@homeclaimsassist.co.uk</a></p>
      </div>
    </footer>
  );
}
