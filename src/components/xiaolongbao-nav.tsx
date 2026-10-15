"use client";
import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/lib/booking";
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
      <a className="brand" href="/" aria-label="Taste of Beauty home">
        <img
          src="/assets/tob_logo_stamp-1024x346.png"
          alt="Taste of Beauty"
          width="1024"
          height="346"
        />
      </a>
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
        <a href="/#menus">
          Menus<small>菜单</small>
        </a>
        <a href="/xiaolongbao" aria-current="page">
          Xiaolongbao<small>小笼包</small>
        </a>
        <a href="/#our-story">
          Our story<small>品牌故事</small>
        </a>
        <a href="/#gatherings">
          Gatherings<small>聚会包场</small>
        </a>
        <a href="/#visit">
          Visit<small>到店</small>
        </a>
      </nav>
      <a
        className="button reserve"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reserve a table<small>立即订位 ↗</small>
      </a>
    </header>
  );
}
