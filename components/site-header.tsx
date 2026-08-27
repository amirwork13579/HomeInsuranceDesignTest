"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, UserRound, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const source = "https://www.homeclaimsassist.co.uk";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Home Claims Assist home" onClick={closeMenu}>
          <img src={`${source}/images/logo.png`} alt="Home Claims Assist" />
        </Link>

        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`} aria-label="Main navigation">
          <Link href="/#services" onClick={closeMenu}>Services <span>▾</span></Link>
          <Link href="/#perils" onClick={closeMenu}>Perils <span>▾</span></Link>
          <Link href="/our-process" onClick={closeMenu}>How It Works <span>▾</span></Link>
          <Link href="/#partners" onClick={closeMenu}>Partner With Us <span>▾</span></Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <div className="mobile-nav-actions">
            <a href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            <Button asChild className="primary-button"><Link href="/contact" onClick={closeMenu}>Get Started</Link></Button>
          </div>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href="tel:02034108351">020 3410 8351</a>
          <Link className="login-link" href="/contact"><UserRound aria-hidden="true" /> Login</Link>
          <Button asChild className="primary-button header-cta"><Link href="/contact">Get Started</Link></Button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
