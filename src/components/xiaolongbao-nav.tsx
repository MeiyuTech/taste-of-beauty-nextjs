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
        Menu · 导航 {open ? "−" : "＋"}
      </button>
      <nav
        id="navigation"
        className={open ? "open" : ""}
        onClick={() => setOpen(false)}
      >
        <InternalLink href="/menus">
          Menus<small>菜单</small>
        </InternalLink>
        <InternalLink href="/xiaolongbao" aria-current="page">
          Xiaolongbao<small>小笼包</small>
        </InternalLink>
        <InternalLink href="/our-story">
          Our story<small>品牌故事</small>
        </InternalLink>
        <InternalLink href="/gatherings">
          Gatherings<small>聚会包场</small>
        </InternalLink>
        <InternalLink href="/visit">
          Visit<small>到店</small>
        </InternalLink>
      </nav>
      <InternalLink className="button reserve" href="/reservations?menu=xlb">
        Reserve a table<small>立即订位 ↗</small>
      </InternalLink>
    </header>
  );
}
