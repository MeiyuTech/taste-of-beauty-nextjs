import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Gatherings & Private Dining",
  description:
    "Plan birthdays, anniversaries, social gatherings and vegetarian wedding celebrations at Taste of Beauty.",
  ...(siteUrl ? { alternates: { canonical: "/gatherings" } } : {}),
};
export default function Page() {
  return (
    <SiteShell active="gatherings" page>
      <section className="gatherings-section" id="gatherings">
        <div className="gatherings-intro">
          <div className="eyebrow">
            GATHERINGS & PRIVATE DINING · 聚会与包场
          </div>
          <h1>
            Bring your people.
            <br />
            <em>Make it beautiful.</em>
          </h1>
          <p className="gatherings-cn-title">与喜欢的人，把相聚过得更美。</p>
          <p>
            For birthdays, meaningful celebrations and time together. Tell us
            your date, guest count and occasion — we’ll help you explore the
            dining arrangements.
          </p>
          <p className="zh">
            生日、纪念日，或一场期待已久的相聚。告诉我们日期、人数与活动类型，一起沟通适合的用餐安排。
          </p>
          <div className="hero-actions">
            <a
              className="cta"
              href="mailto:events@thetasteofbeauty.com?subject=Private%20dining%20enquiry"
            >
              Plan your gathering<small>咨询聚会包场 ↗</small>
            </a>
            <a className="inline-link" href="tel:+16575063567">
              Call us · 致电咨询 ↗
            </a>
          </div>
          <p className="fine">
            Space, menu, pricing and availability are confirmed individually
            with our team.
            <br />
            空间、菜单、费用及可用时间，请与餐厅逐项确认。
          </p>
        </div>
        <div className="gathering-options">
          <div>
            <span>01</span>
            <h3>
              Birthdays & anniversaries<small>生日与纪念日</small>
            </h3>
          </div>
          <div>
            <span>02</span>
            <h3>
              Social & private gatherings<small>亲友、团队与私人聚会</small>
            </h3>
          </div>
          <div>
            <span>03</span>
            <h3>
              Vegetarian wedding celebrations<small>素食婚宴</small>
            </h3>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
