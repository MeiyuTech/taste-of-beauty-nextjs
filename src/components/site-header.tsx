"use client";

import { useEffect, useRef, useState } from "react";
import InternalLink from "./internal-link";
import { ORDER_URL } from "@/lib/booking";

const menuLinks = [
  ["/menus", "All menus"],
  ["/vegan-xiaolongbao", "Xiaolongbao"],
  ["/a-la-carte", "A la carte"],
];

export default function SiteHeader({ active, bookingHref }: { active?: string; bookingHref: string }) {
  const disclosure = useRef<HTMLDetailsElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const menuActive = ["menus", "vegan-xiaolongbao", "a-la-carte"].includes(active ?? "");

  useEffect(() => {
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !disclosure.current?.contains(event.target)) {
        if (disclosure.current) disclosure.current.open = false;
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && disclosure.current?.open) {
        disclosure.current.open = false;
        disclosure.current.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    const desktop = window.matchMedia("(min-width: 960px)");
    function closeOnDesktop() { if (desktop.matches) dialog.current?.close(); }
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function close() { dialog.current?.close(); }
  const logo = <img src="/images/brand/taste-of-beauty-logo.png" alt="Taste of Beauty" width="1024" height="346" />;

  return <>
    <header className="site-header">
      <InternalLink className="site-brand" href="/" aria-label="Taste of Beauty home">{logo}</InternalLink>
      <nav className="desktop-navigation" aria-label="Main">
        <details ref={disclosure} className="menus-disclosure" onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
        }}>
          <summary data-active={menuActive || undefined}>Menus<span className="menu-chevron" aria-hidden="true" /></summary>
          <div className="menus-popover" onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a") && disclosure.current) disclosure.current.open = false;
          }}>
            {menuLinks.map(([href, label]) => <InternalLink key={href} href={href} aria-current={href === `/${active}` ? "page" : undefined}>{label}</InternalLink>)}
          </div>
        </details>
        <InternalLink href="/#gatherings">Gatherings</InternalLink>
        <InternalLink href="/#restaurant-info">Visit</InternalLink>
        <InternalLink href="/gift-card" aria-current={active === "gift-card" ? "page" : undefined}>Gift cards</InternalLink>
      </nav>
      <InternalLink className="header-book" href={bookingHref}>Book a table</InternalLink>
      <button ref={trigger} className="navigation-toggle" type="button" aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
        <span /><span />
      </button>
    </header>
    <dialog ref={dialog} id="mobile-navigation" className="mobile-navigation" aria-label="Site navigation" onClose={() => {
      setOpen(false);
      if (trigger.current?.offsetParent) trigger.current.focus();
    }} onClick={(event) => {
      if (event.target instanceof Element && event.target.closest("a")) { close(); return; }
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
    }}>
      <div className="mobile-navigation-top">
        <InternalLink className="site-brand" href="/" aria-label="Taste of Beauty home">{logo}</InternalLink>
        <button className="navigation-close" type="button" onClick={close} aria-label="Close navigation" autoFocus>×</button>
      </div>
      <nav aria-label="Mobile main" className="mobile-navigation-links">
        <div className="mobile-menu-group">
          <InternalLink href="/menus" aria-current={active === "menus" ? "page" : undefined}>Menus</InternalLink>
          <div className="mobile-menu-options">
            {menuLinks.slice(1).map(([href, label]) => <InternalLink key={href} href={href} aria-current={href === `/${active}` ? "page" : undefined}>{label}</InternalLink>)}
          </div>
        </div>
        <InternalLink href="/#gatherings">Gatherings</InternalLink>
        <InternalLink href="/#restaurant-info">Visit us</InternalLink>
        <InternalLink href="/gift-card" aria-current={active === "gift-card" ? "page" : undefined}>Gift cards</InternalLink>
      </nav>
      <nav aria-label="More from Taste of Beauty" className="mobile-secondary-links">
        <InternalLink href="/#our-story">Our story</InternalLink>
        <InternalLink href="/press" aria-current={active === "press" ? "page" : undefined}>Press</InternalLink>
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">Pickup &amp; delivery</a>
      </nav>
      <InternalLink className="header-book mobile-book" href={bookingHref}>Book a table</InternalLink>
      <p className="mobile-location">616 N Robertson Blvd · West Hollywood</p>
    </dialog>
  </>;
}
