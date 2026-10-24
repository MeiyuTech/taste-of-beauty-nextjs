"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import menuSections from "@/lib/landing-menus.json";
import DishGallery from "./dish-gallery";
import { getDishImage } from "@/lib/dish-images";

type Entry = { title: string; price: string; paragraphs: string[] };
type MenuImage = { src: string; alt: string; caption?: string };

function MenuEntries({ entries, groupLabel }: { entries: Entry[]; groupLabel?: string }) {
  return <div className="campaign-dishes">{entries.map((entry, index) => (
    <article className={(!entry.price && entry.paragraphs.length === 0) || entry.title.toLowerCase() === groupLabel?.toLowerCase() ? "campaign-menu-label" : "campaign-dish"} key={index}>
      {entry.title && <div className="campaign-dish-heading"><h3>{entry.title}</h3>{entry.price && <span>{entry.price}</span>}</div>}
      {entry.paragraphs.map((paragraph, i) => <p key={i} className={/^(contains:|\*|VEGAN|VEGETARIAN)/i.test(paragraph) ? "campaign-diet-note" : undefined}>{paragraph}</p>)}
    </article>
  ))}</div>;
}

function MenuPhotos({ images }: { images: MenuImage[] }) {
  if (!images.length) return null;
  return <div className="campaign-menu-photos" tabIndex={0} role="region" aria-label="Menu photos, scroll to explore">{images.map((image) => (
    <figure key={image.src}>
      <Image src={image.src} alt={image.alt || "Taste of Beauty menu presentation"} width={640} height={480} sizes="(max-width: 700px) 80vw, 360px" />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  ))}</div>;
}

export default function LandingMenu({ bookingUrl }: { bookingUrl: string }) {
  const [active, setActive] = useState(menuSections[0].id);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    function restore() {
      const section = menuSections.find((section) => `#${section.id}` === window.location.hash);
      if (section) {
        setActive(section.id);
        requestAnimationFrame(() => document.getElementById("menu")?.scrollIntoView({ behavior: "instant" }));
      }
    }
    restore();
    window.addEventListener("hashchange", restore);
    window.addEventListener("popstate", restore);
    return () => { window.removeEventListener("hashchange", restore); window.removeEventListener("popstate", restore); };
  }, []);
  function choose(index: number) {
    const id = menuSections[index].id;
    setActive(id);
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, "", url);
  }
  function keyboard(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const count = menuSections.length;
    const next = event.key === "ArrowRight" ? (index + 1) % count : event.key === "ArrowLeft" ? (index + count - 1) % count : event.key === "Home" ? 0 : event.key === "End" ? count - 1 : null;
    if (next === null) return;
    event.preventDefault(); choose(next); refs.current[next]?.focus();
  }
  return <section className="campaign-section campaign-menu" id="menu" aria-labelledby="campaign-menu-title">
    <div className="campaign-section-heading"><div><p className="eyebrow">Eat Your Art Out</p><h2 id="campaign-menu-title">Our <em>Menus</em></h2></div><a className="cta" href={bookingUrl} target="_blank" rel="noopener noreferrer">Book Now</a></div>
    <div className="campaign-menu-tabs" role="tablist" aria-label="Our menus">
      {menuSections.map((section, index) => <button key={section.id} ref={(node) => { refs.current[index] = node; }} type="button" id={`campaign-tab-${section.id}`} role="tab" aria-controls={section.id} aria-selected={section.id === active} tabIndex={section.id === active ? 0 : -1} onClick={() => choose(index)} onKeyDown={(event) => keyboard(event, index)}>{section.label}</button>)}
    </div>
    {menuSections.map((section) => <div key={section.id} id={section.id} role="tabpanel" aria-labelledby={`campaign-tab-${section.id}`} hidden={active !== section.id} tabIndex={0} className="campaign-menu-panel">
      <div className={section.id === "a-la-carte" ? "campaign-menu-overview" : undefined}><MenuEntries entries={section.intro} />
      {section.id === "a-la-carte" && <MenuPhotos images={section.images} />}</div>
      {section.groups.map((group, index) => section.groups.length > 1 ? (
        <details className="campaign-menu-group" key={group.label} open={index === 0}>
          <summary>{group.label}<span aria-hidden="true">＋</span></summary>
          <DishGallery names={group.entries.map((entry) => entry.title)} label={`${group.label} dish photos`} />
          {!group.entries.some((entry) => getDishImage(entry.title)) && <MenuPhotos images={group.images} />}
          <MenuEntries entries={group.entries} groupLabel={group.label} />
        </details>
      ) : <div key={group.label}><DishGallery names={group.entries.map((entry) => entry.title)} label={`${group.label} dish photos`} /><div className={group.images.length ? "campaign-menu-single" : undefined}><MenuPhotos images={group.images} /><MenuEntries entries={group.entries} groupLabel={group.label} /></div></div>)}
      {section.id === "takeout" && <a className="inline-link" href="https://www.ubereats.com/store/taste-of-beauty-tob-west-hollywood-616-n-robertson-blvd/ZX301TfMQO2EqEOCgYbAUA?surfaceName=" target="_blank" rel="noopener noreferrer">Uber Eats</a>}
      <a className="cta campaign-menu-book" href={bookingUrl} target="_blank" rel="noopener noreferrer">Book Now</a>
    </div>)}
  </section>;
}
