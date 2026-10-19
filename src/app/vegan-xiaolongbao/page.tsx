import InternalLink from "@/components/internal-link";
import type { Metadata } from "next";
import { BOOKING_URL, ORDER_URL } from "@/lib/booking";
import SiteShell from "@/components/site-shell";
import "./xiaolongbao.css";
import { siteUrl } from "@/lib/site";
import JsonLd from "@/components/json-ld";
import { xiaolongbaoFaqs, xiaolongbaoFillings } from "@/lib/xiaolongbao";
export const metadata: Metadata = {
  title: "Vegan Xiaolongbao in West Hollywood",
  description:
    "Handmade vegan and vegetarian xiaolongbao in West Hollywood. Dine in at lunch, or order pickup and delivery.",
  ...(siteUrl ? { alternates: { canonical: "/vegan-xiaolongbao" } } : {}),
};
export default function XiaolongbaoPage() {
  return (
    <SiteShell active="vegan-xiaolongbao">
      <div className="xlb-page">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: xiaolongbaoFaqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} />

        <section className="hero xlb-hero">
          <div className="hero-copy">
            <h1 className="eyebrow">Vegan Xiaolongbao in West Hollywood</h1>
            <p className="display-title">
              Small folds.
              <br />
              <em>Beautiful bites.</em>
            </p>
            <p className="intro">
              Handmade vegan xiaolongbao and vegetarian mini dumplings. Dine in at lunch, or take a basket home.
            </p>
            <div className="actions">
              <a className="button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Reserve now</a>
              <a className="text-link" href={ORDER_URL} target="_blank" rel="noopener noreferrer">Order pickup or delivery</a>
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
              <em>with Care.</em>
            </h2>
            <p>
              A delicate wrapper. A savory filling. The pleasure of bringing a
              basket to the table and reaching for the first bite. Some of the
              best moments are the simplest.
            </p>
            <p><a href="https://en.wikipedia.org/wiki/Xiaolongbao" target="_blank" rel="noopener noreferrer">Xiaolongbao</a> are Shanghai-style mini dumplings, traditionally made with pork. Ours are vegan or vegetarian, so you can enjoy the whole basket without meat.</p>
            <p>Find us at 616 N Robertson Blvd — a <InternalLink href="/">vegan and vegetarian restaurant in West Hollywood</InternalLink>, so you never have to hunt for the one meat-free item on the menu.</p>
            <div className="actions">
              <a className="button" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Reserve now</a>
              <a className="text-link" href={ORDER_URL} target="_blank" rel="noopener noreferrer">Order pickup or delivery</a>
            </div>

          </div>
        </section>
        <section className="section xlb-selection" id="selection">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                02 — FIND YOUR FAVORITE
              </div>
              <h2>
                Choose Your Filling: <em>Vegan or Vegetarian</em>
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
              <ul className="xlb-fillings">
                {xiaolongbaoFillings.map(({ name, description, diet, label }) => (
                  <li key={name}><h3>{name} <span className="filling-diet">{label} · {diet}</span></h3><p>{description}</p></li>
                ))}
              </ul>
              <p className="filling-key">V = Vegan · VG = Vegetarian. Check today’s menu for availability.</p>
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
          <p className="xlb-ways-intro">You can enjoy our vegan soup dumplings three ways, all from the same kitchen on N Robertson Blvd:</p>
          <div className="xlb-ways">
            <article>
              <span>01 / DINE IN</span>
              <h3>
                Dine In
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
                Pickup
              </h3>
              <p>
                Order on Uber Eats and choose pickup. Check availability and collection time before you order.
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
                Delivery
              </h3>
              <p>
                Delivered across West Hollywood and nearby Los Angeles neighborhoods via Uber Eats.
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
          <p className="xlb-ways-address">616 N Robertson Blvd, West Hollywood, CA 90069 · <a href="tel:+16575063567">(657) 506-3567</a>. Minutes from Beverly Hills, Melrose and the Design District.</p>
        </section>
        <section className="section xlb-faq">
          <div className="eyebrow">BEFORE YOUR FIRST BITE</div>
          <h2>Vegan Xiaolongbao <em>FAQ</em></h2>
          {xiaolongbaoFaqs.map(({ question, answer, href, label }) => (
            <details key={question}>
              <summary>{question}<span>＋</span></summary>
              <p>{answer}</p>
              {href && (href.startsWith("/") ? <InternalLink className="text-link" href={href}>{label}</InternalLink> : <a className="text-link" href={href} target={href.startsWith("https:") ? "_blank" : undefined} rel={href.startsWith("https:") ? "noopener noreferrer" : undefined}>{label}</a>)}
            </details>
          ))}
          <div className="xlb-end">
            <p>616 N Robertson Blvd · West Hollywood, CA 90069</p>
            <InternalLink className="text-link" href="/#visit">
              Plan your visit
            </InternalLink>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
