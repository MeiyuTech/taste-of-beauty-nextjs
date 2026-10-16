import type { ReactNode } from "react";
import InternalLink from "./internal-link";
import { ORDER_URL } from "@/lib/booking";
const navigation = [
  ["/menus", "Menus", "菜单"],
  ["/gatherings", "Gatherings", "聚会包场"],
  ["/our-story", "Our story", "品牌故事"],
  ["/visit", "Visit", "到店"],
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
        Skip to content · 跳至正文
      </a>
      <header className="site-nav">
        <InternalLink className="wordmark" href="/">
          TASTE OF BEAUTY<small>WEST HOLLYWOOD · 西好莱坞</small>
        </InternalLink>
        <nav aria-label="Main">
          {navigation.map(([href, label, zh]) => (
            <InternalLink
              key={href}
              href={href}
              aria-current={href === `/${active}` ? "page" : undefined}
            >
              {label}
              <small>{zh}</small>
            </InternalLink>
          ))}
        </nav>
        <InternalLink
          className="cta nav-book"
          href="/reservations"
          aria-current={active === "reservations" ? "page" : undefined}
        >
          Book a table<small>立即订位 ↗</small>
        </InternalLink>
      </header>
      <main id="main" className={page ? "site-main page-content" : "site-main"}>
        {children}
      </main>
      <section className="last-links" aria-label="More from Taste of Beauty">
        <InternalLink href="/our-story">
          Our story<small>品牌故事 ↗</small>
        </InternalLink>
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
          Pickup & delivery<small>自取与外送 ↗</small>
        </a>
        <InternalLink href="/gatherings">
          Private gatherings<small>聚会与包场咨询 ↗</small>
        </InternalLink>
      </section>
      <footer>
        <span>
          TASTE OF BEAUTY<small>West Hollywood · 西好莱坞</small>
        </span>
        <span>© 2026 Taste of Beauty</span>
      </footer>
      <div className="sticky-actions">
        <InternalLink href="/menus">View menus · 查看菜单</InternalLink>
        <InternalLink href="/reservations">
          Book a table · 立即订位 ↗
        </InternalLink>
      </div>
    </div>
  );
}
