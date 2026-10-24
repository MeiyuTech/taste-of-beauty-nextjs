"use client";

import { useEffect, useRef, useState } from "react";
import InternalLink from "./internal-link";
import "./dining-choice.css";

export default function DiningChoice() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);
  function close() { dialog.current?.close(); }
  return <>
    <button ref={trigger} className="choice-trigger" type="button" aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <img src="/assets/xlb-0.webp" alt="Handmade xiaolongbao" />
      <div><strong className="choice-title-with-label">Xiaolongbao <span className="choice-menu-label">&amp; A la carte</span></strong><span>Handmade vegan dumplings</span></div>
    </button>
    <dialog ref={dialog} className="dining-choice-dialog" aria-labelledby="dining-choice-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
    }}>
      <button className="dining-choice-close" type="button" onClick={close} aria-label="Close menu selection">×</button>
      <p className="eyebrow">What are you in the mood for?</p>
      <h2 id="dining-choice-title">Choose your <em>menu</em></h2>
      <div className="dining-choice-options">
        <InternalLink href="/vegan-xiaolongbao"><img src="/assets/xlb-0.webp" alt="Handmade xiaolongbao in a bamboo steamer" /><div><h3>Xiaolongbao</h3><p>Handmade vegan dumplings</p><span>Explore Xiaolongbao</span></div></InternalLink>
        <InternalLink href="/a-la-carte"><img src="/images/dishes/pearl-fresh.webp" alt="Pearl Fresh mushroom broth served with a pale green teapot" /><div><h3>A la carte</h3><p>Soup, appetizers &amp; entrees</p><span>Explore A la carte</span></div></InternalLink>
      </div>
    </dialog>
  </>;
}
