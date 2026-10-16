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
              <div className="eyebrow">THE MENUS · 一眼找到想吃的</div>
              <h1>
                Your menu.{" "}
                <br />
                <em>Your kind of evening.</em>
              </h1>
              <p className="zh">先看吃什么，再决定何时来。</p>
            </div>
            <p>
              Choose a menu. See every course.
              <br />
              Then find your table.
              <small>选择菜单，直接看菜品，再查看可订时间。</small>
            </p>
          </div>
          <MenuPanel />
        </section>
      </DiningProvider>
    </SiteShell>
  );
}
