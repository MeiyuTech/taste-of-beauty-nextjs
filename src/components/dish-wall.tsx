"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { getDishImage } from "@/lib/dish-images";
import { menuDishId, type MenuKey } from "@/lib/menus";
import { landingDishId } from "@/lib/landing-menu-links";
import { internalUrl } from "@/lib/navigation";
import "./dish-wall.css";

type WallDish = { name: string; menu: MenuKey; diet?: "vegetarian" };
const rows: WallDish[][] = [
  [
    { name: "The Secret Garden", menu: "59" },
    { name: "The Island", menu: "99" },
    { name: "The Petal", menu: "99" },
    { name: "Alice in Wonderland", menu: "59" },
    { name: "The Rainforest", menu: "99" },
    { name: "Pearl Fresh", menu: "99", diet: "vegetarian" },
    { name: "Black Pepper Vegetable Noodles", menu: "lunch" },
  ],
  [
    { name: "The Veil", menu: "99" },
    { name: "The Jade", menu: "99" },
    { name: "Jack and the Beanstalk", menu: "59" },
    { name: "The Forest", menu: "99", diet: "vegetarian" },
    { name: "The Orchard", menu: "99" },
    { name: "The Dunes", menu: "99" },
    { name: "Handmade Xiaolongbao", menu: "xlb" },
  ],
];

function menuLink(dish: WallDish, campaignMenu: boolean) {
  if (campaignMenu) {
    const lunch = dish.menu === "lunch" || dish.menu === "xlb";
    const group = lunch || dish.menu === "59" ? 0 : dish.diet === "vegetarian" ? 2 : 1;
    return `#${landingDishId(lunch ? "lunch" : "tasting-courses", group, dish.menu === "xlb" ? "XIAO LONG BAO" : dish.name)}`;
  }
  const diet = dish.diet ?? "vegan";
  const anchor = dish.menu === "xlb" ? "menu-detail-xlb" : menuDishId(dish.menu, diet, dish.name);
  return `/menus?menu=${dish.menu}${dish.menu === "99" ? `&diet=${diet}` : ""}#${anchor}`;
}

function menuLabel(dish: WallDish) {
  if (dish.menu === "59") return "View the $59 menu";
  if (dish.menu === "99") return `View the $99 ${dish.diet ?? "vegan"} menu`;
  return dish.menu === "lunch" ? "View the lunch menu" : "Explore xiaolongbao";
}

export default function DishWall({ campaignMenu = false }: { campaignMenu?: boolean }) {
  const wall = useRef<HTMLElement>(null);
  const tracks = useRef<(HTMLDivElement | null)[]>([]);
  const hovering = useRef(false);
  const positioned = useRef(false);
  const focusing = useRef(false);
  const pointerType = useRef("mouse");
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);
  const [revealed, setRevealed] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const section = wall.current;
    if (!section) return;
    const motion = window.matchMedia("(min-width: 701px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (motion.matches && !positioned.current) {
      const lower = tracks.current[1];
      if (lower) lower.scrollLeft = Math.min(lower.scrollWidth - lower.clientWidth, lower.clientWidth * 0.55);
      positioned.current = true;
    }
    const positions = tracks.current.map((track) => track?.scrollLeft ?? 0);
    const directions = [1, -1];
    let frame = 0;
    let previous = 0;
    let visible = false;

    function tick(now: number) {
      const delta = previous ? Math.min(now - previous, 40) : 0;
      previous = now;
      if (!hovering.current && !focusing.current && !document.hidden) {
        tracks.current.forEach((track, index) => {
          if (!track) return;
          const end = track.scrollWidth - track.clientWidth;
          positions[index] = Math.max(0, Math.min(end, positions[index] + directions[index] * delta * 0.022));
          track.scrollLeft = positions[index];
          if (positions[index] >= end) directions[index] = -1;
          if (positions[index] <= 0) directions[index] = 1;
        });
      } else {
        tracks.current.forEach((track, index) => { positions[index] = track?.scrollLeft ?? 0; });
      }
      frame = requestAnimationFrame(tick);
    }

    function update() {
      cancelAnimationFrame(frame);
      previous = 0;
      if (visible && motion.matches && !paused) frame = requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { threshold: 0.1 });
    observer.observe(section);
    motion.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      motion.removeEventListener("change", update);
    };
  }, [paused]);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!wall.current?.contains(event.target as Node)) setRevealed(null);
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  function followDish(event: MouseEvent<HTMLAnchorElement>, name: string, href: string) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (event.detail !== 0 && dragged.current) {
      event.preventDefault();
      return;
    }
    const touch = pointerType.current !== "mouse" || window.matchMedia("(max-width: 700px), (hover: none)").matches;
    // Keyboard activation follows the link immediately; touch first reveals its destination.
    if (event.detail !== 0 && touch && revealed !== name) {
      event.preventDefault();
      setRevealed(name);
      return;
    }
    event.currentTarget.href = internalUrl(href, window.location.href);
    if (href.startsWith("#") && window.location.hash === href) {
      event.preventDefault();
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }

  return <section
    ref={wall}
    className="dish-wall"
    id="dish-wall"
    aria-label="Explore our dishes"
    onPointerEnter={(event) => { if (event.pointerType === "mouse") hovering.current = true; }}
    onPointerLeave={() => { hovering.current = false; }}
    onFocusCapture={(event) => { focusing.current = event.target instanceof HTMLAnchorElement; }}
    onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) focusing.current = false; }}
    onKeyDown={(event) => { if (event.key === "Escape") setRevealed(null); }}
    onWheel={(event) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        setPaused(true);
        setRevealed(null);
      }
    }}
  >
    <button
      type="button"
      className="dish-wall-motion"
      aria-label={paused ? "Play photo movement" : "Pause photo movement"}
      aria-pressed={paused}
      onClick={() => setPaused((value) => !value)}
    >
      <svg viewBox="0 0 20 20" aria-hidden="true">
        {paused ? <path d="m7 4 9 6-9 6Z" fill="currentColor" /> : <path d="M7 4v12M13 4v12" stroke="currentColor" strokeWidth="2" />}
      </svg>
    </button>
    {rows.map((dishes, row) => <div
      key={row}
      ref={(element) => { tracks.current[row] = element; }}
      className="dish-wall-track"
      role="group"
      aria-label={`Dish photos, row ${row + 1}. Swipe to explore; tap a photo to reveal its menu link.`}
      onPointerDown={(event) => {
        pointerType.current = event.pointerType;
        pointerStart.current = { x: event.clientX, y: event.clientY };
        dragged.current = false;
        if (event.pointerType !== "mouse") setPaused(true);
      }}
      onPointerMove={(event) => {
        const start = pointerStart.current;
        if (start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 10) {
          dragged.current = true;
          setRevealed(null);
        }
      }}
      onPointerUp={() => { pointerStart.current = null; }}
      onPointerCancel={() => { pointerStart.current = null; dragged.current = true; setRevealed(null); }}
    >
      {dishes.map((dish) => {
        const photo = dish.menu === "xlb" ? {
          src: "/assets/xlb-0.webp", alt: "Handmade xiaolongbao in a yellow bamboo steamer", position: "50% 50%",
        } : getDishImage(dish.name);
        if (!photo) return null;
        const href = menuLink(dish, campaignMenu);
        return <a
          key={dish.name}
          className="dish-wall-card"
          data-revealed={revealed === dish.name || undefined}
          href={href}
          aria-label={`${dish.name}. ${menuLabel(dish)}.`}
          onClick={(event) => followDish(event, dish.name, href)}
          onAuxClick={(event) => { event.currentTarget.href = internalUrl(href, window.location.href); }}
          onDragStart={(event) => event.preventDefault()}
        >
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 72vw, (max-width: 1200px) 30vw, 370px" style={{ objectPosition: photo.position }} />
          <span className="dish-wall-caption">
            <span className="dish-wall-name">{dish.name}</span>
            <span className="dish-wall-destination">{menuLabel(dish)}</span>
          </span>
        </a>;
      })}
    </div>)}
  </section>;
}
