import Image from "next/image";
import type { Metadata } from "next";
import GoogleReviews from "./google-reviews";
import LandingMenu from "./landing-menu";
import DishWall from "./dish-wall";
import source from "@/lib/landing-pages.json";
import "./hollywood-landing.css";

export type LandingSlug = keyof typeof source.pages;
export function landingMetadata(slug: LandingSlug): Metadata {
  const page = source.pages[slug];
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: page.socialTitle, description: page.description, url: `/${slug}`, images: [{ url: source.hero.src, alt: source.hero.alt }] },
    twitter: { card: "summary_large_image", title: page.socialTitle, description: page.description, images: [source.hero.src] },
  };
}
const steps = [
  ["Pick your date & party size", "Lock in your table."],
  ["Tell us your needs", "Add any dietary notes when you book."],
  ["Make it yours", "Choose vegan or vegetarian, a tasting menu or A la carte,"],
  ["Savor the moment", "Sit back and let the experience unfold."],
];

export default function HollywoodLanding({ slug }: { slug: LandingSlug }) {
  const page = source.pages[slug];
  const romantic = slug === "hollywood-romantic-google";
  const book = (label = "Book Now") => <a className="cta" href={page.bookingUrl} target="_blank" rel="noopener noreferrer">{label}</a>;
  const about = <section className="campaign-section campaign-about" aria-labelledby="campaign-about-title">
    <div className="campaign-about-gallery">
      <Image src="/images/dishes/jack-and-the-beanstalk-1086x1448.png" alt="Jack and the Beanstalk" width={700} height={900} sizes="(max-width: 700px) 60vw, 30vw" />
      <Image src="/images/experience/plating-with-tweezers.jpeg" alt="Dining at Taste of Beauty" width={700} height={500} sizes="(max-width: 700px) 40vw, 20vw" />
      <Image src="/images/dishes/alice-in-wonderland-1086x1448.png" alt="Alice in Wonderland" width={700} height={500} sizes="(max-width: 700px) 40vw, 20vw" />
    </div>
    <div><p className="eyebrow">{page.about[0]}</p><h2 id="campaign-about-title">Taste of <em>Beauty</em></h2>{page.about.slice(1).filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph.includes("just a reservation") ? <>{paragraph.split("just a reservation")[0]}<a href={page.bookingUrl} target="_blank" rel="noopener noreferrer">just a reservation</a>.</> : paragraph}</p>)}{book()}</div>
  </section>;
  return <div className="theme-b tob-design campaign-shell">
    <a className="skip" href="#main">Skip to content</a>
    <header className="campaign-header">
      <div className="campaign-brand">
        <Image src="/images/brand/taste-of-beauty-logo.png" alt="Taste of Beauty" width={1024} height={346} priority />
      </div>
      <div className="campaign-header-actions">
        {book("Reserve Now")}
        <a className="campaign-call" href="tel:6575063567" aria-label="Call Taste of Beauty at (657) 506-3567">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" /></svg>
        </a>
      </div>
    </header>
    <main id="main" className="campaign-page">
      <section className="campaign-hero">
        <div className="campaign-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="display-title">{page.headline}</h1>
          <p className="intro">{page.intro}</p>
          <div className="hero-actions">{book("Reserve Now")}{romantic ? <a className="inline-link" href="#menu">View Our Menus</a> : <a className="inline-link" href="tel:6575063567">Call Us</a>}</div>
        </div>
        <div className="campaign-hero-photo"><Image src={source.hero.src} alt={source.hero.alt} fill sizes="(max-width: 900px) 100vw, 52vw" priority /></div>
      </section>
      <section className="campaign-section campaign-story">
        <div className="campaign-story-photos">
          <Image src={page.storyImage.src} alt={page.storyImage.alt} width={800} height={1000} sizes="(max-width: 900px) 90vw, 42vw" />
          <Image className="campaign-story-inset" src={romantic ? "/images/dishes/emerald-tide-2560x1707.jpg" : "/images/dishes/jack-and-the-beanstalk-1086x1448.png"} alt={romantic ? "Emerald Tide" : "Jack and the Beanstalk"} width={400} height={400} sizes="(max-width: 900px) 35vw, 20vw" />
        </div>
        <div className="campaign-story-copy">
          <p className="eyebrow">{page.story[0]}</p><h2>LA’s Best Plant-Based <em>Fine Dining</em></h2>
          <p>{page.story[1]}</p>
          <ul className="campaign-occasions">{page.occasions.map((occasion) => <li key={occasion}>{occasion}</li>)}</ul>
          {page.story.slice(2).filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="hero-actions">{book()}<a className="inline-link" href="#menu">Our Menus</a></div>
        </div>
      </section>
      <DishWall campaignMenu />
      <GoogleReviews bookingHref="#booking" heading="5-Star Reviews" eyebrow="Why Customers Love Us" />
      <section className="campaign-section campaign-experience" aria-labelledby="campaign-experience-title">
        <div className="campaign-section-heading"><div><p className="eyebrow">The Experience</p><h2 id="campaign-experience-title">What to <em>Expect</em></h2><p>Dining with us is simple, seamless, and unforgettable.</p></div>{book()}</div>
        <ol className="campaign-steps">{steps.map(([title, description], index) => <li key={title}><span className="eyebrow">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
      </section>
      {romantic && about}
      <LandingMenu bookingUrl={page.bookingUrl} />
      {!romantic && about}
    </main>
    <footer className="campaign-page campaign-section campaign-visit" id="booking" aria-labelledby="campaign-visit-title">
      <iframe className="campaign-map" title="Map to Taste of Beauty, 616 N Robertson Blvd, West Hollywood" src="https://maps.google.com/maps?q=616%20N%20Robertson%20Blvd%20West%20Hollywood%2C%20CA%2090069&t=m&z=14&output=embed&iwloc=near" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      <div className="campaign-visit-info">
        <p className="eyebrow">Eat Your Art Out</p>
        <h2 id="campaign-visit-title">Come Visit <em>Us Today</em></h2>
        <div className="campaign-hours">
          <div><h3>Hours</h3><p>Mon: Closed<br />Tue-Sun: 12:30pm – 3:30pm<br />Tue-Sun: 5:30pm – 9:00pm</p></div>
          <div><h3>Takeout</h3><p>Wed-Sun: 11:30am – 10:30pm<br />Pick up in-store or order via <a href="https://www.ubereats.com/store/taste-of-beauty-tob-west-hollywood-616-n-robertson-blvd/ZX301TfMQO2EqEOCgYbAUA?surfaceName=" target="_blank" rel="noopener noreferrer">Uber Eats</a></p></div>
        </div>
        <address><a href="https://share.google/SlyRrQg9jN9R2F0MO" target="_blank" rel="noopener noreferrer">616 N Robertson Blvd<br />West Hollywood, CA 90069</a><a className="campaign-phone" href="tel:6575063567">(657) 506-3567</a></address>
        {book()}
      </div>
    </footer>
  </div>;
}
