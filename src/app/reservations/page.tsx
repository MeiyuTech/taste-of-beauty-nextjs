import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { DiningProvider, BookingForm } from "@/components/dining";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Reserve a Table",
  description:
    "Choose your preferred date, time and party size, then check availability on OpenTable.",
  ...(siteUrl ? { alternates: { canonical: "/reservations" } } : {}),
};
export default function Page() {
  return (
    <SiteShell active="reservations" page>
      <DiningProvider>
        <section className="booking-section" id="booking">
          <div className="booking-title">
            <div className="eyebrow">YOUR NEXT GOOD MEAL · 下一顿美好</div>
            <h1>
              Let’s find{" "}
              <br />
              <em>your table.</em>
            </h1>
            <p className="zh">选好时间，期待见面。</p>
          </div>
          <BookingForm />
        </section>
      </DiningProvider>
    </SiteShell>
  );
}
