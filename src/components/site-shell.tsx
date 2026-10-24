import type { ReactNode } from "react";
import InternalLink from "./internal-link";
import SiteHeader from "./site-header";
import { ORDER_URL } from "@/lib/booking";
import "./site-chrome.css";

export default function SiteShell({
  children,
  active,
  page = false,
  reservationHref,
}: {
  children: ReactNode;
  active?: string;
  page?: boolean;
  reservationHref?: string;
}) {
  const bookingHref = reservationHref ?? (active === "vegan-xiaolongbao" ? "/?booking=xlb#booking" : "/#booking");
  return (
    <div className="theme-b site-layout">
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader active={active} bookingHref={bookingHref} />
      <main id="main" className={page ? "site-main page-content" : "site-main"}>{children}</main>
      <footer className="site-footer" id="restaurant-info">
        <div className="site-footer-brand">
          <InternalLink className="site-footer-home" href="/" aria-label="Taste of Beauty home">
            <img src="/assets/tob_logo_stamp-1024x346.png" alt="Taste of Beauty" width="1024" height="346" loading="lazy" />
          </InternalLink>
          <p>Vegan &amp; vegetarian dining.<br />West Hollywood.</p>
          <div className="site-socials" aria-label="Social media">
            <a href="https://www.instagram.com/tasteofbeautyrestaurant/" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)"><img src="/images/press/instagram.svg" alt="" width="26" height="26" /></a>
            <a href="https://www.facebook.com/TasteofBeautyRestaurant" target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in a new tab)"><img src="/images/press/facebook.svg" alt="" width="26" height="26" /></a>
            <a href="https://www.yelp.com/biz/tob-west-hollywood-2" target="_blank" rel="noopener noreferrer" aria-label="Yelp (opens in a new tab)"><img src="/images/press/yelp.svg" alt="" width="26" height="26" /></a>
          </div>
          <InternalLink className="footer-reservation" href={bookingHref}>Book a table</InternalLink>
        </div>
        <div className="site-footer-explore">
          <div>
            <h2>Dine with us</h2>
            <nav aria-label="Dining">
              <InternalLink href="/menus" aria-current={active === "menus" ? "page" : undefined}>Menus</InternalLink>
              <InternalLink href="/vegan-xiaolongbao" aria-current={active === "vegan-xiaolongbao" ? "page" : undefined}>Xiaolongbao</InternalLink>
              <InternalLink href="/a-la-carte" aria-current={active === "a-la-carte" ? "page" : undefined}>A la carte</InternalLink>
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">Pickup &amp; delivery</a>
            </nav>
          </div>
          <div>
            <h2>Discover</h2>
            <nav aria-label="Discover">
              <InternalLink href="/#our-story">Our story</InternalLink>
              <InternalLink href="/#gatherings">Private gatherings</InternalLink>
              <InternalLink href="/gift-card" aria-current={active === "gift-card" ? "page" : undefined}>Gift cards</InternalLink>
              <InternalLink href="/press" aria-current={active === "press" ? "page" : undefined}>Press</InternalLink>
            </nav>
          </div>
        </div>
        <div className="site-footer-visit">
          <h2>Visit us</h2>
          <address>616 N Robertson Blvd<br />West Hollywood, CA 90069</address>
          <div className="site-footer-directions">
            <a href="https://www.google.com/maps/search/?api=1&query=616+N+Robertson+Blvd+West+Hollywood+CA+90069" target="_blank" rel="noopener noreferrer">Directions</a>
            <a href="tel:+16575063567">(657) 506-3567</a>
          </div>
          <div className="site-footer-contact">
            <h2>Get in touch</h2>
            <a href="mailto:info@thetasteofbeauty.com">info@thetasteofbeauty.com</a>
            <a href="mailto:media@thetasteofbeauty.com">media@thetasteofbeauty.com</a>
            <a href="mailto:events@thetasteofbeauty.com">events@thetasteofbeauty.com</a>
          </div>
        </div>
        <div className="site-footer-hours">
          <h2>Opening hours</h2>
          <p>Tuesday–Sunday</p>
          <dl><div><dt>Lunch</dt><dd>12:30–3:30 pm</dd></div><div><dt>Dinner</dt><dd>5:30–9:00 pm</dd></div></dl>
          <p className="footer-note">Closed Mondays</p>
          <div className="site-footer-takeout">
            <h2>Takeout</h2>
            <p>Wednesday–Sunday<br />11:30 am–10:30 pm</p>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">Order on Uber Eats</a>
          </div>
        </div>
        <div className="site-footer-bottom">
          <p>Dietary needs or allergies? Please let us know before you dine.</p>
          <span>© 2026 Taste of Beauty</span>
        </div>
      </footer>
    </div>
  );
}
