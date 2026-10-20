"use client";

import { useEffect, useRef, useState } from "react";
import InternalLink from "./internal-link";

type MediaLogo = { publication: string; logo: string; href: string };

export default function MediaLogos({ logos }: { logos: MediaLogo[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const firstGroup = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = viewport.current;
    const group = firstGroup.current;
    if (!element || !group || paused || hovered || focused || reducedMotion) return;
    let frame = 0;
    let previous = 0;
    let position = element.scrollLeft;
    let width = group.offsetWidth;
    const observer = new ResizeObserver(() => { width = group.offsetWidth; });
    observer.observe(group);
    function advance(now: number) {
      if (previous && width > 0) {
        position = (position + Math.min(now - previous, 64) * 0.025) % width;
        element!.scrollLeft = position;
      }
      previous = now;
      frame = requestAnimationFrame(advance);
    }
    frame = requestAnimationFrame(advance);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [paused, hovered, focused, reducedMotion]);

  return (
    <section className="media-strip" aria-labelledby="media-strip-title">
      <div className="media-strip-heading">
        <h2 id="media-strip-title">In the press</h2>
        <div className="media-strip-actions">
          <InternalLink href="/press">View all coverage</InternalLink>
        </div>
      </div>
      <div
        className="media-strip-viewport"
        ref={viewport}
        role="region"
        aria-label="Media coverage logos, scroll horizontally to explore"
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        onTouchStart={() => setPaused(true)}
        onWheel={() => setPaused(true)}
      >
        <div className="media-strip-track">
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} ref={duplicate ? undefined : firstGroup} className={`media-strip-group${duplicate ? " media-strip-repeat" : ""}`} aria-hidden={duplicate || undefined}>
              {logos.map(({ publication, logo, href }) => (
                <a key={publication} className="media-strip-logo" href={href} target="_blank" rel="noopener noreferrer" tabIndex={duplicate ? -1 : undefined} aria-label={`${publication} coverage (opens in a new tab)`}>
                  <img src={logo} alt={publication} width="150" height="48" loading="lazy" draggable={false} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
