"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import menuSections from "@/lib/landing-menus";
import DishGallery from "./dish-gallery";
import { getDishImage } from "@/lib/dish-images";
import { landingDishId } from "@/lib/landing-menu-links";

import type { MenuEntry as Entry } from "@/lib/menu-types";
type MenuImage = { src: string; alt: string; caption?: string };

function MenuEntries({ entries, groupLabel, sectionId, groupIndex }: { entries: Entry[]; groupLabel?: string; sectionId?: string; groupIndex?: number }) {
  return <div className="campaign-dishes">{entries.map((entry, index) => (
    <article id={sectionId !== undefined && groupIndex !== undefined ? landingDishId(sectionId, groupIndex, entry.title) : undefined} tabIndex={-1} className={(!entry.price && entry.paragraphs.length === 0) || entry.title.toLowerCase() === groupLabel?.toLowerCase() ? "campaign-menu-label" : "campaign-dish"} key={index}>
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
    let frame = 0;
    function restore() {
      const target = document.getElementById(window.location.hash.slice(1));
      const panel = target?.closest(".campaign-menu-panel");
      const section = menuSections.find((section) => `#${section.id}` === window.location.hash || section.id === panel?.id);
      if (!section) return;
      setActive(section.id);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (target?.id.startsWith("campaign-dish-")) {
          const group = target.closest("details");
          if (group) group.open = true;
          target.scrollIntoView({ behavior: "instant", block: "start" });
          target.focus({ preventScroll: true });
        } else {
          document.getElementById("menu")?.scrollIntoView({ behavior: "instant" });
        }
      });
    }
    restore();
    window.addEventListener("hashchange", restore);
    window.addEventListener("popstate", restore);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("hashchange", restore); window.removeEventListener("popstate", restore); };
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
          <MenuEntries entries={group.entries} groupLabel={group.label} sectionId={section.id} groupIndex={index} />
        </details>
      ) : <div key={group.label}><DishGallery names={group.entries.map((entry) => entry.title)} label={`${group.label} dish photos`} /><div className={group.images.length ? "campaign-menu-single" : undefined}><MenuPhotos images={group.images} /><MenuEntries entries={group.entries} groupLabel={group.label} sectionId={section.id} groupIndex={index} /></div></div>)}
      {section.id === "takeout" && <a className="inline-link" href="https://www.ubereats.com/store/taste-of-beauty-tob-west-hollywood-616-n-robertson-blvd/ZX301TfMQO2EqEOCgYbAUA?surfaceName=" target="_blank" rel="noopener noreferrer">Uber Eats</a>}
      <a className="cta campaign-menu-book" href={bookingUrl} target="_blank" rel="noopener noreferrer">Book Now</a>
    </div>)}
  </section>;
}
