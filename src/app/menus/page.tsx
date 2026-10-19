import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { DiningProvider, MenuPanel } from "@/components/dining";
import { siteUrl } from "@/lib/site";
import { BOOKING_URL } from "@/lib/booking";
import JsonLd from "@/components/json-ld";
import { menuSchema } from "@/lib/structured-data";
export const metadata: Metadata = {
  title: "Vegan Tasting Menu in West Hollywood",
  description:
    "See every course: a $59 five-course vegan dinner, a $99 tasting menu, lunch and xiaolongbao in West Hollywood.",
  ...(siteUrl ? { alternates: { canonical: "/menus" } } : {}),
};
export default function Page() {
  return (
    <SiteShell active="menus" page>
      <JsonLd data={menuSchema} />
      <DiningProvider>
        <section className="menus-section" id="menus">
          <div className="section-heading">
            <div>
              <h1 className="eyebrow">Vegan &amp; Vegetarian Menus in West Hollywood</h1>
              <p className="display-title">
                Your menu.{" "}
                <br />
                <em>Your kind of evening.</em>
              </p>
            </div>
            <p>
              Choose a menu. See every course.
              <br />
              Then <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">book your table</a>.
            </p>
          </div>
          <MenuPanel />
        </section>
      </DiningProvider>
    </SiteShell>
  );
}
