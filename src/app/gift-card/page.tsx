import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import "./gift-card.css";

const squareGiftUrl = "https://app.squareup.com/gift/MLW8KJMXKTTVM";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give a Taste of Beauty eGift card. Choose an amount, add a personal message and share a beautiful dining experience in West Hollywood.",
  alternates: { canonical: "/gift-card" },
  openGraph: {
    title: "Gift Cards | Taste of Beauty",
    description: "A thoughtful gift. A beautiful meal. Share Taste of Beauty with someone special.",
    url: "/gift-card",
    images: [{ url: "/images/drinks/citrus-drinks-2560x1707.jpg", alt: "Three colorful drinks at Taste of Beauty" }],
  },
};

export default function GiftCardPage() {
  return (
    <SiteShell active="gift-card" page>
      <div className="gift-page">
        <section className="gift-hero" aria-labelledby="gift-title">
          <div className="gift-hero-copy">
            <h1 className="eyebrow" id="gift-title">Taste of Beauty Gift Cards</h1>
            <p className="display-title">A thoughtful gift.<br /><em>A beautiful meal.</em></p>
            <p className="gift-intro">For someone you love, a little thank-you, or a treat for yourself. Give the gift of good food and time together at Taste of Beauty.</p>
            <div className="gift-actions">
              <a className="cta" href="#choose-gift-card">Choose a gift card</a>
              <a className="gift-text-link" href={`${squareGiftUrl}/check-balance`} target="_blank" rel="noopener noreferrer">Check balance<span className="gift-sr-only"> (opens in a new tab)</span></a>
            </div>
            <p className="gift-hero-note">A LITTLE KINDNESS. A REASON TO GATHER.</p>
          </div>
          <figure className="gift-hero-photo">
            <img src="/images/drinks/citrus-drinks-2560x1707.jpg" alt="Three colorful drinks garnished with citrus and herbs at Taste of Beauty" width="2560" height="1707" fetchPriority="high" />
            <figcaption><span>Something lovely to look forward to.</span><span>TOB / GIFT CARDS</span></figcaption>
          </figure>
        </section>

        <section className="gift-details" aria-label="How to send an eGift card">
          <div><span className="gift-step">01</span><div><h2>Make it theirs.</h2><p>Choose a gift card design and an amount that feels right.</p></div></div>
          <div><span className="gift-step">02</span><div><h2>Add a little love.</h2><p>Include a personal message to make the gift your own.</p></div></div>
          <div><span className="gift-step">03</span><div><h2>Pick the moment.</h2><p>Send by email or text, now or on a date you choose.</p></div></div>
        </section>

        <section className="gift-order" id="choose-gift-card" aria-labelledby="gift-order-title">
          <div className="gift-order-heading">
            <div><p className="eyebrow">A GIFT, JUST FOR THEM</p><h2 id="gift-order-title">Give the <em>perfect gift.</em></h2><p>Get an eGift card for yourself or send one to a friend.</p></div>
            <div className="gift-order-links">
              <a className="gift-text-link" href={`${squareGiftUrl}/order`} target="_blank" rel="noopener noreferrer">Open gift card checkout<span className="gift-sr-only"> (opens in a new tab)</span></a>
              <a className="gift-text-link" href={`${squareGiftUrl}/reload`} target="_blank" rel="noopener noreferrer">Reload a card<span className="gift-sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
          <p className="gift-checkout-note">Gift cards and payment are handled by Square. If the form does not load, use “Open gift card checkout” above.</p>
          <iframe className="gift-checkout" src={`${squareGiftUrl}/order`} title="Purchase a Taste of Beauty eGift card through Square" loading="lazy" />
        </section>
        <section className="gift-help" aria-labelledby="gift-help-title">
          <div><h2 id="gift-help-title">A little help with your gift?</h2><p>Our team is happy to help with gift card questions.</p></div>
          <a className="gift-text-link" href="mailto:info@thetasteofbeauty.com">Contact our team</a>
        </section>
      </div>
    </SiteShell>
  );
}
