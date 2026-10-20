import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import InternalLink from "@/components/internal-link";
import { pressArticles, pressVideos } from "@/lib/press";
import "./press.css";

export const metadata: Metadata = {
  title: "Press & Media Highlights",
  description: "Explore Taste of Beauty in the press, from television features to dining stories. For interviews and media enquiries, contact our team.",
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Press & Media Highlights | Taste of Beauty",
    description: "Television features, dining stories and media enquiries at Taste of Beauty.",
    url: "/press",
    images: [{ url: "/images/food/pumpkin-soup-landscape.png", alt: "A plated dish at Taste of Beauty" }],
  },
};

export default function PressPage() {
  return (
    <SiteShell active="press" page>
      <div className="press-page">
        <section className="press-hero" aria-labelledby="press-title">
          <div className="press-hero-copy">
            <p className="eyebrow">TASTE OF BEAUTY · IN THE SPOTLIGHT</p>
            <h1 id="press-title">Press &amp;<br /><em>stories.</em></h1>
            <p>A seat at our table.<br />A story beyond it.</p>
            <a className="inline-link" href="#press-coverage">Explore the coverage <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="press-hero-image">
            <img src="/images/food/pumpkin-soup-landscape.png" alt="An artfully plated dish with crisp garnishes at Taste of Beauty" fetchPriority="high" />
            <figcaption>Plant-based dining. A different perspective.</figcaption>
          </figure>
        </section>

        <aside className="press-location" aria-labelledby="location-note">
          <h2 id="location-note">A note on our location</h2>
          <p>Some stories below feature our former Orange County restaurant, which has closed. You’ll now find us at <strong>616 N Robertson Blvd, West Hollywood</strong>. <InternalLink href="/#visit">Plan your visit <span aria-hidden="true">↗</span></InternalLink></p>
        </aside>

        <section className="press-broadcasts" aria-labelledby="broadcast-title">
          <div className="press-section-heading">
            <div><p className="eyebrow">ON SCREEN</p><h2 id="broadcast-title">A taste of the story.</h2></div>
            <p>Watch the features on our media partners’ websites.</p>
          </div>
          <div className="press-video-grid">
            {pressVideos.map((video) => (
              <a className="press-video" key={video.href} href={video.href} target="_blank" rel="noopener noreferrer">
                <div className="press-video-top"><span className="press-outlet">{video.publication}<small>{video.region}</small></span><span className="press-play" aria-hidden="true">▶</span></div>
                <h3>{video.title}</h3>
                <span className="press-video-link">Watch on {video.publication} <span aria-hidden="true">↗</span><span className="press-sr-only"> (opens in a new tab)</span></span>
              </a>
            ))}
          </div>
        </section>

        <section className="press-coverage" id="press-coverage" aria-labelledby="coverage-title">
          <div className="press-section-heading">
            <div><p className="eyebrow">THE PRESS ARCHIVE</p><h2 id="coverage-title">In good company.</h2></div>
            <p>Dining stories, reviews &amp; moments worth sharing.</p>
          </div>
          <ol className="press-article-list">
            {pressArticles.map((article) => (
              <li key={article.href}>
                <a className="press-article" href={article.href} target="_blank" rel="noopener noreferrer">
                  <time dateTime={article.date}>{article.displayDate}</time>
                  <div className="press-article-copy"><p className="press-publication">{article.publication}{article.format && <span>{article.format}</span>}</p><h3>{article.title}</h3></div>
                  <span className="press-article-arrow" aria-hidden="true">↗</span><span className="press-sr-only">Opens in a new tab</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="press-contact" aria-labelledby="press-contact-title">
          <div><p className="eyebrow">FOR THE PRESS</p><h2 id="press-contact-title">Let’s tell<br /><em>a beautiful story.</em></h2></div>
          <div className="press-contact-copy"><p>Interested in featuring Taste of Beauty? For interviews, photography requests or a closer look at our food and philosophy, get in touch with our team.</p><a className="cta" href="mailto:media@thetasteofbeauty.com?subject=Press%20enquiry">Contact our media team <span aria-hidden="true">↗</span></a><a className="press-email" href="mailto:media@thetasteofbeauty.com">media@thetasteofbeauty.com</a><p className="press-contact-note">Please include your publication, story idea and deadline.</p></div>
        </section>
      </div>
    </SiteShell>
  );
}
