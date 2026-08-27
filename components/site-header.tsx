"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, UserRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const source = "https://www.homeclaimsassist.co.uk";

const navigationSections = [
  {
    label: "Services",
    items: [
      { label: "Homeowners", href: "/homeowners", copy: "Home insurance claim support" },
      { label: "Business Owners", href: "/business-owners", copy: "Commercial property claims" },
      { label: "Landlords", href: "/landlords", copy: "Rental property claim support" },
    ],
  },
  {
    label: "Perils",
    items: [
      { label: "Fire Damage", href: "/fire-damage", copy: "Fire and smoke claims" },
      { label: "Flood Damage", href: "/flood-damage", copy: "Flood and water damage" },
      { label: "Burst Pipes", href: "/burst-pipes", copy: "Escape of water claims" },
      { label: "Storm Damage", href: "/storm-damage", copy: "Weather-related damage" },
      { label: "Impact Damage", href: "/impact-damage", copy: "Vehicle and object impacts" },
    ],
  },
  {
    label: "How It Works",
    items: [
      { label: "Our Process", href: "/our-process", copy: "From first contact to settlement" },
      { label: "Loss Assessor vs Adjuster", href: "/loss-assessor-vs-loss-adjuster", copy: "Understand who represents you" },
      { label: "Claims Advice", href: "/blog", copy: "Practical insurance claim guides" },
    ],
  },
  {
    label: "Partner With Us",
    items: [
      { label: "Estate Agents", href: "/estate-agents", copy: "End-to-end claims management" },
      { label: "Insurance Brokers", href: "/insurance-brokers", copy: "Outsourced policyholder support" },
      { label: "Leak Detection", href: "/leak-detection-partners", copy: "Referral partnership programme" },
    ],
  },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenMobileSection(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMobileSection(null);
  };

  const isActive = (href: string) =>
    pathname === href || (href === "/blog" && pathname.startsWith("/blog/"));

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Home Claims Assist home" onClick={closeMenu}>
          <img src={`${source}/images/logo.png`} alt="Home Claims Assist" />
        </Link>

        <NavigationMenu className="desktop-nav" viewport={false} aria-label="Main navigation">
          <NavigationMenuList className="desktop-nav-list">
            {navigationSections.map((section) => (
              <NavigationMenuItem key={section.label}>
                <NavigationMenuTrigger className="desktop-nav-trigger">
                  {section.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className={`desktop-nav-panel ${section.items.length > 3 ? "is-wide" : ""}`}>
                  <div className="desktop-nav-panel-title">{section.label}</div>
                  <div className="desktop-nav-panel-links">
                    {section.items.map((item) => (
                      <NavigationMenuLink asChild active={isActive(item.href)} key={item.href}>
                        <Link href={item.href} className="desktop-nav-panel-link">
                          <strong>{item.label}</strong>
                          <small>{item.copy}</small>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={isActive("/contact")}>
                <Link className="desktop-nav-link" href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <nav
          id="mobile-site-menu"
          className={`mobile-nav ${menuOpen ? "mobile-open" : ""}`}
          aria-label="Mobile navigation"
        >
          {navigationSections.map((section, index) => {
            const expanded = openMobileSection === section.label;
            const contentId = `mobile-nav-section-${index}`;
            return (
              <div className="mobile-nav-section" key={section.label}>
                <button
                  type="button"
                  className="mobile-nav-trigger"
                  aria-expanded={expanded}
                  aria-controls={contentId}
                  onClick={() => setOpenMobileSection(expanded ? null : section.label)}
                >
                  {section.label}
                  <ChevronDown aria-hidden="true" />
                </button>
                {expanded && (
                  <div className="mobile-nav-links" id={contentId}>
                    {section.items.map((item) => (
                      <Link
                        href={item.href}
                        data-active={isActive(item.href) || undefined}
                        onClick={closeMenu}
                        key={item.href}
                      >
                        <strong>{item.label}</strong>
                        <small>{item.copy}</small>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link className="mobile-contact-link" href="/contact" data-active={isActive("/contact") || undefined} onClick={closeMenu}>
            Contact
          </Link>
          <div className="mobile-nav-actions">
            <a href="tel:02034108351"><Phone aria-hidden="true" /> 020 3410 8351</a>
            <Button asChild className="primary-button"><Link href="/contact" onClick={closeMenu}>Get Started</Link></Button>
          </div>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href="tel:02034108351">020 3410 8351</a>
          <Link className="login-link" href="/admin"><UserRound aria-hidden="true" /> Login</Link>
          <Button asChild className="primary-button header-cta"><Link href="/contact">Get Started</Link></Button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-site-menu"
            onClick={() => {
              setMenuOpen((open) => !open);
              if (menuOpen) setOpenMobileSection(null);
            }}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
