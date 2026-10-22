import Image from "next/image";
import type { Metadata } from "next";
import SiteShell from "./site-shell";
import GoogleReviews from "./google-reviews";
import LandingMenu from "./landing-menu";
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
  ["Make it yours", "Choose vegan or vegetarian, a tasting menu or à la carte,"],
  ["Savor the moment", "Sit back and let the experience unfold."],
];

export default function HollywoodLanding({ slug }: { slug: LandingSlug }) {
  const page = source.pages[slug];
  const romantic = slug === "hollywood-romantic-google";
  const book = (label = "Book Now") => <a className="cta" href={page.bookingUrl} target="_blank" rel="noopener noreferrer">{label}</a>;
  const about = <section className="campaign-section campaign-about" aria-labelledby="campaign-about-title">
    <div className="campaign-about-gallery">
      <Image src="/images/landing/jack-and-the-beanstalk.png" alt="Jack and the Beanstalk" width={700} height={900} sizes="(max-width: 700px) 60vw, 30vw" />
      <Image src="/images/landing/MG_4074-Large.jpeg" alt="Dining at Taste of Beauty" width={700} height={500} sizes="(max-width: 700px) 40vw, 20vw" />
      <Image src="/images/landing/alice-in-wonderland.png" alt="Alice in Wonderland" width={700} height={500} sizes="(max-width: 700px) 40vw, 20vw" />
    </div>
    <div><p className="eyebrow">{page.about[0]}</p><h2 id="campaign-about-title">Taste of <em>Beauty</em></h2>{page.about.slice(1).filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph.includes("just a reservation") ? <>{paragraph.split("just a reservation")[0]}<a href={page.bookingUrl} target="_blank" rel="noopener noreferrer">just a reservation</a>.</> : paragraph}</p>)}{book()}</div>
  </section>;
  return <SiteShell reservationHref="#booking" menuHref="#menu">
    <div className="campaign-page">
      <section className="campaign-hero">
        <div className="campaign-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="display-title">West <em>Hollywood</em></h1>
          <p className="intro">{page.intro}</p>
          <div className="hero-actions">{book("Reserve Now")}{romantic ? <a className="inline-link" href="#menu">View Our Menus</a> : <a className="inline-link" href="tel:6575063567">Call Us</a>}</div>
        </div>
        <div className="campaign-hero-photo"><Image src={source.hero.src} alt={source.hero.alt} fill sizes="(max-width: 900px) 100vw, 52vw" priority /></div>
      </section>
      <section className="campaign-section campaign-story">
        <div className="campaign-story-photos">
          <Image src={page.storyImage.src} alt={page.storyImage.alt} width={800} height={1000} sizes="(max-width: 900px) 90vw, 42vw" />
          <Image className="campaign-story-inset" src={romantic ? "/images/landing/DSCF0799-scaled.jpg" : "/images/landing/jack-and-the-beanstalk.png"} alt={romantic ? "Emerald Tide" : "Jack and the Beanstalk"} width={400} height={400} sizes="(max-width: 900px) 35vw, 20vw" />
        </div>
        <div className="campaign-story-copy">
          <p className="eyebrow">{page.story[0]}</p><h2>LA’s Best Plant-Based <em>Fine Dining</em></h2>
          <p>{page.story[1]}</p>
          <ul className="campaign-occasions">{page.occasions.map((occasion) => <li key={occasion}>{occasion}</li>)}</ul>
          {page.story.slice(2).filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="hero-actions">{book()}<a className="inline-link" href="#menu">Our Menus</a></div>
        </div>
      </section>
      <GoogleReviews bookingHref="#booking" heading="5-Star Reviews" eyebrow="Why Customers Love Us" />
      <section className="campaign-section campaign-experience" aria-labelledby="campaign-experience-title">
        <div className="campaign-section-heading"><div><p className="eyebrow">The Experience</p><h2 id="campaign-experience-title">What to <em>Expect</em></h2><p>Dining with us is simple, seamless, and unforgettable.</p></div>{book()}</div>
        <ol className="campaign-steps">{steps.map(([title, description], index) => <li key={title}><span className="eyebrow">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
      </section>
      {romantic && about}
      <LandingMenu bookingUrl={page.bookingUrl} />
      {!romantic && about}
      <section className="campaign-section campaign-visit" id="booking" aria-labelledby="campaign-visit-title">
        <div><p className="eyebrow">Eat Your Art Out</p><h2 id="campaign-visit-title">Come Visit <em>Us Today</em></h2><a className="inline-link" href="https://share.google/SlyRrQg9jN9R2F0MO" target="_blank" rel="noopener noreferrer">616 N Robertson Blvd<br />West Hollywood, CA 90069</a><p><a className="campaign-phone" href="tel:6575063567">(657) 506-3567</a></p>{book()}</div>
        <div className="campaign-hours"><div><h3>Hours</h3><p>Mon: Closed<br />Tue-Sun: 12:30pm – 3:30pm<br />Tue-Sun: 5:30pm – 9:00pm</p></div><div><h3>Takeout</h3><p>Wed-Sun: 11:30am – 10:30pm<br />Pick up in-store or order via <a href="https://www.ubereats.com/store/taste-of-beauty-tob-west-hollywood-616-n-robertson-blvd/ZX301TfMQO2EqEOCgYbAUA?surfaceName=" target="_blank" rel="noopener noreferrer">Uber Eats</a></p></div></div>
        <iframe className="campaign-map" title="616 N Robertson Blvd West Hollywood, CA 90069" src="https://maps.google.com/maps?q=616%20N%20Robertson%20Blvd%20West%20Hollywood%2C%20CA%2090069&t=m&z=10&output=embed&iwloc=near" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </div>
  </SiteShell>;
}
