"use client";
import { useEffect, useRef, useState } from "react";
import InternalLink from "./internal-link";
export default function XiaolongbaoNav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header>
      <InternalLink
        className="brand"
        href="/"
        aria-label="Taste of Beauty home"
      >
        <img
          src="/assets/tob_logo_stamp-1024x346.png"
          alt="Taste of Beauty"
          width="1024"
          height="346"
        />
      </InternalLink>
      <button
        ref={toggle}
        type="button"
        className="nav-toggle"
        aria-controls="navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        Menu{open ? "−" : "＋"}
      </button>
      <nav
        id="navigation"
        className={open ? "open" : ""}
        onClick={() => setOpen(false)}
      >
        <InternalLink href="/menus">
          Menus
        </InternalLink>
        <InternalLink href="/xiaolongbao" aria-current="page">
          Xiaolongbao
        </InternalLink>
        <InternalLink href="/#our-story">
          Our story
        </InternalLink>
        <InternalLink href="/gatherings">
          Gatherings
        </InternalLink>
        <InternalLink href="/#visit">
          Visit
        </InternalLink>
      </nav>
      <InternalLink className="button reserve" href="/?booking=xlb#booking">
        Reserve a table
      </InternalLink>
    </header>
  );
}
