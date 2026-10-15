import type { Metadata } from "next";
import { BOOKING_URL, ORDER_URL } from "@/lib/booking";
import XiaolongbaoNav from "@/components/xiaolongbao-nav";
import "./xiaolongbao.css";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Handmade Xiaolongbao",
  description:
    "Discover handmade xiaolongbao at Taste of Beauty, West Hollywood. Dine in, order pickup or delivery.",
  ...(siteUrl ? { alternates: { canonical: "/xiaolongbao" } } : {}),
};
export default function XiaolongbaoPage() {
  return (
    <div className="xlb-page">
      <a className="skip" href="#main">
        Skip to content · 跳至正文
      </a>

      <XiaolongbaoNav />
      <main id="main">
        <section className="hero xlb-hero">
          <div className="hero-copy">
            <div className="eyebrow">TASTE OF BEAUTY · WEST HOLLYWOOD</div>
            <h1>
              Small folds.
              <br />
              <em>Beautiful bites.</em>
            </h1>
            <p className="cn hero-cn">一口小笼，一份用心。</p>
            <p className="intro">
              Handmade xiaolongbao, made for the simple pleasure of a good meal.
            </p>
            <p className="cn">
              把手作的温度，包进小小一口。来店里慢慢品尝，或把美味带回家。
            </p>
            <div className="actions">
              <a
                className="button"
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order xiaolongbao <small>查看口味与下单 ↗</small>
              </a>
              <a className="text-link" href="#enjoy">
                Make it your moment<small>选择用餐方式 ↓</small>
              </a>
            </div>
            <div className="hero-note">
              HANDMADE · READY TO SHARE
              <br />
              <span>手工小笼包 · 与喜欢的人一起享用</span>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/assets/xlb-0.webp"
              alt="Taste of Beauty xiaolongbao in a yellow bamboo steamer on a gray stone background"
              fetchPriority="high"
            />
            <div className="photo-caption">
              <span>
                A LITTLE BASKET OF COMFORT.<small>一笼热气，一餐好滋味。</small>
              </span>
              <span>TOB / XIAOLONGBAO</span>
            </div>
          </div>
        </section>
        <div className="xlb-strip">
          <span>HANDMADE · 手作</span>
          <span>DINE IN · 堂食</span>
          <span>TAKEAWAY · 外带</span>
          <span>WEST HOLLYWOOD · 西好莱坞</span>
        </div>
        <section className="story section xlb-story" id="craft">
          <div className="story-photo">
            <img
              src="/assets/xlb-2.webp"
              loading="lazy"
              alt="Hands folding a xiaolongbao wrapper"
            />
            <span>THE BEAUTY IS IN THE DETAILS · 美，藏在细节里</span>
          </div>
          <div className="story-copy">
            <div className="eyebrow">01 — A SMALL PLEASURE · 小小的满足</div>
            <h2>
              Folded
              <br />
              <em>with care.</em>
            </h2>
            <p className="cn large-cn">认真对待每一口，日常也值得用心。</p>
            <p>
              A delicate wrapper. A savory filling. The pleasure of bringing a
              basket to the table and reaching for the first bite. Some of the
              best moments are the simplest.
            </p>
            <p className="cn">
              薄薄的面皮，鲜香的内馅。一笼端上桌，夹起第一口，与身边的人分享。那些让人满足的时刻，往往很简单。
            </p>
            <a className="text-link" href="#selection">
              Explore the selection <small>了解口味与选择 ↓</small>
            </a>
          </div>
        </section>
        <section className="section xlb-selection" id="selection">
          <div className="section-top">
            <div>
              <div className="eyebrow">
                02 — FIND YOUR FAVORITE · 找到你喜欢的一口
              </div>
              <h2>
                A basket <em>to make your own.</em>
              </h2>
              <p className="cn">今天，想吃哪一种？</p>
            </div>
            <p>
              Discover the fillings available today.
              <br />
              Choose with your appetite, and your dietary needs, in mind.
              <small>查看当日供应口味，按喜好及饮食需求选择。</small>
            </p>
          </div>
          <div className="xlb-selection-grid">
            <img
              src="/assets/xlb-1.webp"
              alt="An overhead view of Taste of Beauty xiaolongbao arranged in a steamer"
              loading="lazy"
            />
            <div className="xlb-selection-copy">
              <h3>
                Xiaolongbao<small>手工小笼包</small>
              </h3>
              <p>
                Browse the current ordering menu for available fillings,
                portions and prices. Offerings may vary between dine-in and
                delivery.
              </p>
              <p className="cn">
                当前口味、份量与价格请查看点餐页面。堂食与外送供应可能不同；到店前也欢迎致电确认。
              </p>
              <div className="diet-note">
                <b>
                  A note on dietary preferences<small>关于饮食需求</small>
                </b>
                <p>
                  Not every filling is vegan. Please check each item's
                  ingredients; egg-containing fillings are vegetarian. Let our
                  team know about any allergies before you order.
                </p>
                <p className="cn">
                  并非每款馅料都是纯素；含蛋款属于蛋奶素。请逐款核对配料，下单前告知过敏情况。
                </p>
              </div>
              <div className="actions">
                <a
                  className="button"
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See today's menu <small>查看当日菜单 ↗</small>
                </a>
                <a className="text-link" href="tel:+16575063567">
                  Ask our team<small>致电咨询 ↗</small>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="takeaway section" id="enjoy">
          <div className="eyebrow">
            03 — YOUR TABLE, YOUR WAY · 按你的方式享用
          </div>
          <div className="section-top">
            <div>
              <h2>
                Here, there,
                <br />
                <em>or home.</em>
              </h2>
              <p className="cn">来餐厅坐坐，也把好滋味带走。</p>
            </div>
          </div>
          <div className="xlb-ways">
            <article>
              <span>01 / DINE IN · 堂食</span>
              <h3>
                A slower lunch.<small>给午餐一点从容。</small>
              </h3>
              <p>
                Join us for lunch, Tuesday–Sunday, 12:30–3:30 pm. Ask our team
                about the day's xiaolongbao selection.
              </p>
              <p className="cn">
                周二至周日，12:30–3:30 pm
                午餐时段，欢迎到店。小笼包当日供应请向服务人员确认。
              </p>
              <a
                className="button light"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve for lunch <small>预订午餐 ↗</small>
              </a>
            </article>
            <article>
              <span>02 / PICKUP · 自取</span>
              <h3>
                On your way home.<small>顺路带一份美味。</small>
              </h3>
              <p>
                Choose pickup on our ordering page and check availability and
                collection time before placing your order.
              </p>
              <p className="cn">
                在点餐页面选择自取，确认当日供应及取餐时间后下单。
              </p>
              <a
                className="button light"
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order for pickup <small>进入自取点餐 ↗</small>
              </a>
            </article>
            <article>
              <span>03 / DELIVERY · 外送</span>
              <h3>
                Comfort, delivered.<small>在家，也能好好吃饭。</small>
              </h3>
              <p>
                Enter your address on Uber Eats to see delivery availability,
                current prices and estimated arrival time.
              </p>
              <p className="cn">
                在优步外卖输入地址，查看配送范围、当前价格和预计送达时间。
              </p>
              <a
                className="button light"
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order delivery <small>进入外送点餐 ↗</small>
              </a>
            </article>
          </div>
        </section>
        <section className="section xlb-faq">
          <div className="eyebrow">BEFORE YOUR FIRST BITE · 用餐前的小提示</div>
          <h2>
            A little <em>good to know.</em>
          </h2>
          <p className="cn">让这一餐，吃得更安心。</p>
          <details>
            <summary>
              Are all the xiaolongbao vegan? · 所有小笼包都是纯素吗？{" "}
              <span>＋</span>
            </summary>
            <p>
              No. Check the specific filling before ordering. Egg-containing
              fillings are vegetarian and are not suitable for a vegan diet.
              <small>
                不是。请核对具体馅料；含蛋款属于蛋奶素，不适合纯素饮食。
              </small>
            </p>
          </details>
          <details>
            <summary>
              Can I order them for dinner? · 晚餐可以单点吗？ <span>＋</span>
            </summary>
            <p>
              Please call our team to confirm dinner availability and ordering
              arrangements before visiting.
              <small>晚餐小笼包的供应与单点安排，请到店前致电餐厅确认。</small>
            </p>
          </details>
          <details>
            <summary>
              Where can I see flavors and prices? · 在哪里看口味与价格？{" "}
              <span>＋</span>
            </summary>
            <p>
              Our ordering page shows the current online selection. Dine-in
              options may differ; call us for the day's restaurant offering.
              <small>
                点餐页面显示当前线上供应；堂食可能不同，欢迎致电询问当日菜品。
              </small>
            </p>
            <a
              className="text-link"
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Current ordering menu · 查看当前点餐菜单 ↗
            </a>
          </details>
          <div className="xlb-end">
            <p>616 N Robertson Blvd · West Hollywood, CA 90069</p>
            <a className="text-link" href="/#visit">
              Plan your visit · 查看地址与营业时间 ↗
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-brand">
          TASTE OF BEAUTY
          <small>
            Good food. A gentler world.
            <br />
            一餐之美，一份善意。
          </small>
        </div>
        <div>
          <a href="/#menus">Menus · 菜单</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Reservations · 订位 ↗
          </a>
          <a href="/xiaolongbao">Xiaolongbao · 小笼包</a>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
            Takeaway · 外带 ↗
          </a>
          <a href="mailto:events@thetasteofbeauty.com">Private dining · 包场</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Taste of Beauty</span>
        </div>
      </footer>
      <div className="mobile-cta">
        <a href="/#menus">Menus · 查看菜单</a>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Reserve · 立即订位 ↗
        </a>
      </div>
    </div>
  );
}
