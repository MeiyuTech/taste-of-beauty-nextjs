"use client";

import { useState, type CSSProperties } from "react";
import { getDishImage } from "@/lib/dish-images";
import DishPhoto from "./dish-photo";
import "./dish-gallery.css";

export default function DishGallery({ names, label, featured = false }: { names: string[]; label: string; featured?: boolean }) {
  const [selected, setSelected] = useState(0);
  const dishes = names.filter((name) => getDishImage(name));
  if (!dishes.length) return null;
  const active = Math.min(selected, dishes.length - 1);
  const caption = (name: string) => name.replace(/\s*\([^)]*\)\s*$/, "");

  if (featured) return <section className="dish-gallery dish-gallery-featured" aria-label={label}>
    <figure className="dish-gallery-feature">
      <DishPhoto key={dishes[active]} name={dishes[active]} sizes="(max-width: 700px) 90vw, 42vw" />
      <figcaption aria-live="polite"><span>{caption(dishes[active])}</span><span className="dish-gallery-count">{String(active + 1).padStart(2, "0")} / {String(dishes.length).padStart(2, "0")}</span></figcaption>
    </figure>
    {dishes.length > 1 && <div className="dish-gallery-thumbnails" role="group" aria-label="Choose a dish photo">
      {dishes.map((name, index) => <button key={name} type="button" aria-label={`Show photo: ${caption(name)}`} aria-pressed={active === index} onClick={() => setSelected(index)}>
        <DishPhoto name={name} sizes="64px" />
      </button>)}
    </div>}
  </section>;

  return <section className="dish-gallery dish-gallery-strip" aria-label={label}>
    <p className="dish-gallery-heading"><span>A closer look</span>{dishes.length > 1 && <span className={`dish-gallery-hint${dishes.length <= 3 ? " dish-gallery-hint-mobile" : ""}`}>Scroll to explore</span>}</p>
    <div className="dish-gallery-rail" tabIndex={0} aria-label={`${label}, scroll to explore`} style={{ "--gallery-columns": Math.min(dishes.length, 3) } as CSSProperties}>
      {dishes.map((name) => <figure key={name}>
        <DishPhoto name={name} sizes="(max-width: 700px) 76vw, 30vw" />
        <figcaption>{caption(name)}</figcaption>
      </figure>)}
    </div>
  </section>;
}
