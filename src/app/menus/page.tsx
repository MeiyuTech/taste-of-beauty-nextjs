import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { DiningProvider, MenuPanel } from "@/components/dining";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Menus",
  description:
    "Explore five-course dinner, eight-course tasting, lunch and handmade xiaolongbao at Taste of Beauty.",
  ...(siteUrl ? { alternates: { canonical: "/menus" } } : {}),
};
export default function Page() {
  return (
    <SiteShell active="menus" page>
      <DiningProvider>
        <section className="menus-section" id="menus">
          <div className="section-heading">
            <div>
              <div className="eyebrow">THE MENUS</div>
              <h1>
                Your menu.{" "}
                <br />
                <em>Your kind of evening.</em>
              </h1>
            </div>
            <p>
              Choose a menu. See every course.
              <br />
              Then find your table.
            </p>
          </div>
          <MenuPanel />
        </section>
      </DiningProvider>
    </SiteShell>
  );
}
