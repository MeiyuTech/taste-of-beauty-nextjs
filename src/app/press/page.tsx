import type { Metadata } from "next";
import Script from "next/script";
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
    images: [{ url: "/images/press/aa_0505-scaled-1.jpg", alt: "A plated dish at Taste of Beauty" }],
  },
};

export default function PressPage() {
  return (
    <SiteShell active="press" page>
      <div className="press-page">
        <section className="press-hero" aria-labelledby="press-title">
          <img src="/images/press/aa_0505-scaled-1.jpg" alt="A tasting-menu dish on a turquoise plate at Taste of Beauty" fetchPriority="high" />
          <h1 id="press-title">Press</h1>
        </section>
        <section className="press-intro" aria-labelledby="location-note">
          <div className="press-location">
            <h2 id="location-note">Location Update</h2>
            <p>Please note that some articles on this page refer to The Taste of Beauty’s former Orange County location. That location has closed, and the restaurant is now located in West Hollywood, Los Angeles. For current details and reservations, please visit our <InternalLink href="/#restaurant-info">Contact</InternalLink>.</p>
          </div>
          <div className="press-video-grid" aria-label="Television coverage">
            {pressVideos.map((video) => (
              <div className="press-video" key={video.href}>
                <img className="press-media-logo" src={video.logo} alt={video.publication} width="300" height="122" />
                <div className="iframely-embed">
                  <div className="iframely-responsive" style={{ paddingBottom: "56.25%", paddingTop: 120 }}>
                    <a href={video.href} data-iframely-url={video.embedUrl}>{video.title}</a>
                  </div>
                </div>
                <a className="press-video-source" href={video.href} target="_blank" rel="noopener noreferrer">{video.title}<span className="press-sr-only"> (opens in a new tab)</span></a>
              </div>
            ))}
          </div>
          <Script src="https://iframely.net/embed.js" strategy="afterInteractive" />
        </section>
        <section className="press-coverage" aria-label="Press articles">
          <ol className="press-article-grid">
            {pressArticles.map((article) => (
              <li key={article.href}>
                <a className="press-article" href={article.href} target="_blank" rel="noopener noreferrer">
                  <div className="press-logo-space"><img className="press-media-logo" src={article.logo} alt={article.publication} loading="lazy" /></div>
                  <img className="press-article-image" src={article.image} alt={article.imageAlt} loading="lazy" />
                  <div className="press-article-copy"><time dateTime={article.date}>{article.displayDate}</time><h2>{article.title}</h2></div>
                  <span className="press-sr-only">Opens in a new tab</span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </SiteShell>
  );
}
