import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Taste of Beauty in West Hollywood. View our address, lunch and dinner hours, and directions.",
  ...(siteUrl ? { alternates: { canonical: "/visit" } } : {}),
};
export default function Page() {
  return (
    <SiteShell active="visit" page>
      <section className="visit-section" id="visit">
        <div className="visit-photo">
          <img
            src="/assets/interior.webp"
            alt="Taste of Beauty dining room with warm wood interiors and a piano"
            loading="lazy"
          />
        </div>
        <div className="visit-info">
          <div className="eyebrow">COME AS YOU ARE · 期待你的到来</div>
          <h1>
            A beautiful meal.
            <br />
            <em>A place to pause.</em>
          </h1>
          <p className="zh">好好吃饭，也好好相聚。</p>
          <div className="visit-pairs">
            <div>
              <h3>Find us · 地址</h3>
              <p>
                616 N Robertson Blvd
                <br />
                West Hollywood, CA 90069
              </p>
              <a
                className="inline-link"
                href="https://www.google.com/maps/search/?api=1&query=616+N+Robertson+Blvd+West+Hollywood+CA+90069"
                target="_blank"
                rel="noopener"
              >
                Directions · 导航 ↗
              </a>
            </div>
            <div>
              <h3>Tuesday–Sunday · 周二至周日</h3>
              <p>
                Lunch · 午餐 12:30–3:30 pm
                <br />
                Dinner · 晚餐 5:30–9:00 pm
                <br />
                Monday closed · 周一休息
              </p>
            </div>
          </div>
          <a className="inline-link" href="tel:+16575063567">
            (657) 506-3567 · 致电咨询 ↗
          </a>
          <p className="fine">
            Dietary needs or allergies? Please let us know before you dine.
            <br />
            如有饮食要求或过敏情况，请提前告知。
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
