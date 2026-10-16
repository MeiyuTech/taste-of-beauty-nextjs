import type { ReactNode } from "react";
import InternalLink from "./internal-link";
import { ORDER_URL } from "@/lib/booking";
const navigation = [
  ["/menus", "Menus"],
  ["/#gatherings", "Gatherings"],
  ["/#our-story", "Our story"],
  ["/#visit", "Visit"],
];
export default function SiteShell({
  children,
  active,
  page = false,
}: {
  children: ReactNode;
  active?: string;
  page?: boolean;
}) {
  return (
    <div className="theme-b">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-nav">
        <InternalLink className="wordmark" href="/">
          TASTE OF BEAUTY<small>WEST HOLLYWOOD</small>
        </InternalLink>
        <nav aria-label="Main">
          {navigation.map(([href, label]) => (
            <InternalLink
              key={href}
              href={href}
              aria-current={href === `/${active}` ? "page" : undefined}
            >
              {label}
            </InternalLink>
          ))}
        </nav>
        <InternalLink
          className="cta nav-book"
          href="/#booking"
        >
          Book a table
        </InternalLink>
      </header>
      <main id="main" className={page ? "site-main page-content" : "site-main"}>
        {children}
      </main>
      <section className="last-links" aria-label="More from Taste of Beauty">
        <InternalLink href="/#our-story">
          Our story
        </InternalLink>
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
          Pickup & delivery
        </a>
        <InternalLink href="/#gatherings">
          Private gatherings
        </InternalLink>
      </section>
      <footer className="restaurant-footer" id="restaurant-info">
        <div className="footer-brand">
          TASTE OF BEAUTY
          <small>West Hollywood</small>
        </div>
        <div className="footer-location">
          <h2>Find us</h2>
          <address>
            616 N Robertson Blvd<br />
            West Hollywood, CA 90069
          </address>
          <div className="footer-contact-links">
            <a
              href="https://www.google.com/maps/search/?api=1&query=616+N+Robertson+Blvd+West+Hollywood+CA+90069"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
            <a href="tel:+16575063567">(657) 506-3567</a>
          </div>
        </div>
        <div className="footer-hours">
          <h2>Tuesday–Sunday</h2>
          <p>Lunch · 12:30–3:30 pm<br />Dinner · 5:30–9:00 pm<br />Monday closed</p>
        </div>
        <div className="footer-bottom">
          <p>Dietary needs or allergies? Please let us know before you dine.</p>
          <span>© 2026 Taste of Beauty</span>
        </div>
      </footer>
      <div className="sticky-actions">
        <InternalLink href="/menus">View menus</InternalLink>
        <InternalLink href="/#booking">
          Book a table
        </InternalLink>
      </div>
    </div>
  );
}
