import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import InternalLink from "@/components/internal-link";
import ALaCarteMenu from "@/components/a-la-carte-menu";
import menus from "@/lib/landing-menus";
import "./a-la-carte.css";

export const metadata: Metadata = {
  title: "A la carte Menu in West Hollywood",
  description: "Explore soups, appetizers and entrees at Taste of Beauty in West Hollywood. A la carte at lunch, or as additions to a dinner tasting menu.",
  alternates: { canonical: "/a-la-carte" },
};
export default function ALaCartePage() {
  const menu = menus.find((section) => section.id === "a-la-carte")!;
  return <SiteShell active="a-la-carte">
    <div className="alc-page">
      <section className="alc-intro">
        <div className="alc-photo"><img src="/images/dishes/pearl-fresh.webp" alt="Pearl Fresh mushroom broth served with a pale green teapot at Taste of Beauty" /></div>
        <div className="alc-copy">
          <p className="eyebrow">Taste of Beauty · West Hollywood</p>
          <h1>A la carte <em>menu</em></h1>
          {menu.intro[0].paragraphs.map((text) => <p key={text}>{text}</p>)}
          <InternalLink className="cta" href="/#booking">Reserve a table</InternalLink>
        </div>
      </section>
      <ALaCarteMenu groups={menu.groups} />
    </div>
  </SiteShell>;
}
