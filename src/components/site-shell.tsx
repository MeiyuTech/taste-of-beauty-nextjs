import type { ReactNode } from "react";
import InternalLink from "./internal-link";
import { ORDER_URL } from "@/lib/booking";
const navigation = [
  ["/menus", "Menus"],
  ["/gatherings", "Gatherings"],
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
        <InternalLink href="/gatherings">
          Private gatherings
        </InternalLink>
      </section>
      <footer>
        <span>
          TASTE OF BEAUTY<small>West Hollywood</small>
        </span>
        <span>© 2026 Taste of Beauty</span>
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
