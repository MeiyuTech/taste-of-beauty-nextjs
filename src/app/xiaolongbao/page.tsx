import InternalLink from "@/components/internal-link";
import type { Metadata } from "next";
import { ORDER_URL } from "@/lib/booking";
import XiaolongbaoNav from "@/components/xiaolongbao-nav";
import "./xiaolongbao.css";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Handmade Xiaolongbao",
  description:
    "Discover handmade xiaolongbao at Taste of Beauty, West Hollywood. Dine in, order pickup or delivery.",
  ...(siteUrl ? { alternates: { canonical: "/xiaolongbao" } } : {}),
};
export default function XiaolongbaoPage() {
  return (
    <div className="xlb-page">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <XiaolongbaoNav />
      <main id="main">
        <section className="hero xlb-hero">
          <div className="hero-copy">
            <div className="eyebrow">TASTE OF BEAUTY · WEST HOLLYWOOD</div>
            <h1>
              Small folds.
              <br />
              <em>Beautiful bites.</em>
            </h1>
            <p className="intro">
              Handmade xiaolongbao, made for the simple pleasure of a good meal.
            </p>
            <div className="actions">
              <a
                className="button"
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order xiaolongbao
              </a>
              <a className="text-link" href="#enjoy">
                Make it your moment
              </a>
            </div>
            <div className="hero-note">
              HANDMADE · READY TO SHARE
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/assets/xlb-0.webp"
              alt="Taste of Beauty xiaolongbao in a yellow bamboo steamer on a gray stone background"
              fetchPriority="high"
            />
            <div className="photo-caption">
              <span>
                A LITTLE BASKET OF COMFORT.
              </span>
              <span>TOB / XIAOLONGBAO</span>
            </div>
          </div>
        </section>
        <div className="xlb-strip">
          <span>HANDMADE</span>
          <span>DINE IN</span>
          <span>TAKEAWAY</span>
          <span>WEST HOLLYWOOD</span>
        </div>
        <section className="story section xlb-story" id="craft">
          <div className="story-photo">
            <img
              src="/assets/xlb-2.webp"
              loading="lazy"
              alt="Hands folding a xiaolongbao wrapper"
            />
            <span>THE BEAUTY IS IN THE DETAILS</span>
          </div>
          <div className="story-copy">
            <div className="eyebrow">01 — A SMALL PLEASURE</div>
            <h2>
              Folded
              <br />
              <em>with care.</em>
            </h2>
            <p>
              A delicate wrapper. A savory filling. The pleasure of bringing a
              basket to the table and reaching for the first bite. Some of the
              best moments are the simplest.
            </p>
            <a className="text-link" href="#selection">
              Explore the selection
            </a>
          </div>
        </section>
        <section className="section xlb-selection" id="selection">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                02 — FIND YOUR FAVORITE
              </div>
              <h2>
                A basket <em>to make your own.</em>
              </h2>
            </div>
            <p>
              Discover the fillings available today.
              <br />
              Choose with your appetite, and your dietary needs, in mind.
            </p>
          </div>
          <div className="xlb-selection-grid">
            <img
              src="/assets/xlb-1.webp"
              alt="An overhead view of Taste of Beauty xiaolongbao arranged in a steamer"
              loading="lazy"
            />
            <div className="xlb-selection-copy">
              <h3>
                Xiaolongbao
              </h3>
              <p>
                Browse the current ordering menu for available fillings,
                portions and prices. Offerings may vary between dine-in and
                delivery.
              </p>
              <div className="diet-note">
                <b>
                  A note on dietary preferences
                </b>
                <p>
                  Not every filling is vegan. Please check each item's
                  ingredients; egg-containing fillings are vegetarian. Let our
                  team know about any allergies before you order.
                </p>
              </div>
              <div className="actions">
                <a
                  className="button"
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See today's menu
                </a>
                <a className="text-link" href="tel:+16575063567">
                  Ask our team
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="takeaway section" id="enjoy">
          <div className="eyebrow">
            03 — YOUR TABLE, YOUR WAY
          </div>
          <div className="section-top">
            <div>
              <h2>
                Here, there,
                <br />
                <em>or home.</em>
              </h2>
            </div>
          </div>
          <div className="xlb-ways">
            <article>
              <span>01 / DINE IN</span>
              <h3>
                A slower lunch.
              </h3>
              <p>
                Join us for lunch, Tuesday–Sunday, 12:30–3:30 pm. Ask our team
                about the day's xiaolongbao selection.
              </p>
              <InternalLink
                className="button light"
                href="/?booking=xlb#booking"
              >
                Reserve for lunch
              </InternalLink>
            </article>
            <article>
              <span>02 / PICKUP</span>
              <h3>
                On your way home.
              </h3>
              <p>
                Choose pickup on our ordering page and check availability and
                collection time before placing your order.
              </p>
              <a
                className="button light"
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order for pickup
              </a>
            </article>
            <article>
              <span>03 / DELIVERY</span>
              <h3>
                Comfort, delivered.
              </h3>
              <p>
                Enter your address on Uber Eats to see delivery availability,
                current prices and estimated arrival time.
              </p>
              <a
                className="button light"
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order delivery
              </a>
            </article>
          </div>
        </section>
        <section className="section xlb-faq">
          <div className="eyebrow">BEFORE YOUR FIRST BITE</div>
          <h2>
            A little <em>good to know.</em>
          </h2>
          <details>
            <summary>
              Are all the xiaolongbao vegan?{" "}
              <span>＋</span>
            </summary>
            <p>
              No. Check the specific filling before ordering. Egg-containing
              fillings are vegetarian and are not suitable for a vegan diet.
            </p>
          </details>
          <details>
            <summary>
              Can I order them for dinner?<span>＋</span>
            </summary>
            <p>
              Please call our team to confirm dinner availability and ordering
              arrangements before visiting.
            </p>
          </details>
          <details>
            <summary>
              Where can I see flavors and prices?{" "}
              <span>＋</span>
            </summary>
            <p>
              Our ordering page shows the current online selection. Dine-in
              options may differ; call us for the day's restaurant offering.
            </p>
            <a
              className="text-link"
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Current ordering menu
            </a>
          </details>
          <div className="xlb-end">
            <p>616 N Robertson Blvd · West Hollywood, CA 90069</p>
            <InternalLink className="text-link" href="/#visit">
              Plan your visit
            </InternalLink>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-brand">
          TASTE OF BEAUTY
          <small>
            Good food. A gentler world.
            </small>
        </div>
        <div>
          <InternalLink href="/menus">Menus</InternalLink>
          <InternalLink href="/?booking=xlb#booking">
            Reservations
          </InternalLink>
          <InternalLink href="/xiaolongbao">Xiaolongbao</InternalLink>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
            Takeaway
          </a>
          <a href="mailto:events@thetasteofbeauty.com">Private dining</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Taste of Beauty</span>
        </div>
      </footer>
      <div className="mobile-cta">
        <InternalLink href="/menus">Menus</InternalLink>
        <InternalLink href="/?booking=xlb#booking">
          Reserve
        </InternalLink>
      </div>
    </div>
  );
}
