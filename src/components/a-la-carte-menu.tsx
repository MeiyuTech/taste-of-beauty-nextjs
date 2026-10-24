"use client";

import { useRef, useState, type KeyboardEvent } from "react";

type MenuGroup = { label: string; entries: { title: string; price: string; paragraphs: string[] }[] };
export default function ALaCarteMenu({ groups }: { groups: MenuGroup[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function keyboard(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % groups.length : event.key === "ArrowLeft" ? (index + groups.length - 1) % groups.length : event.key === "Home" ? 0 : event.key === "End" ? groups.length - 1 : null;
    if (next === null) return;
    event.preventDefault(); setActive(next); tabs.current[next]?.focus();
  }
  return <section className="alc-menu" aria-label="A la carte dishes">
    <div className="alc-tabs" role="tablist" aria-label="Menu categories">
      {groups.map((group, index) => <button key={group.label} ref={(node) => { tabs.current[index] = node; }} type="button" role="tab" id={`alc-tab-${index}`} aria-selected={active === index} aria-controls={`alc-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => keyboard(event, index)}>{group.label}</button>)}
    </div>
    {groups.map((group, index) => <div key={group.label} id={`alc-panel-${index}`} role="tabpanel" aria-labelledby={`alc-tab-${index}`} tabIndex={0} hidden={active !== index}>
      <div className="alc-dishes">{group.entries.map((dish) => <article key={dish.title}>
        <div className="alc-dish-title"><h2>{dish.title}</h2><span>{dish.price}</span></div>
        {dish.paragraphs.map((text) => <p key={text} className={text.startsWith("Contains:") ? "alc-allergens" : undefined}>{text}</p>)}
      </article>)}</div>
    </div>)}
  </section>;
}
