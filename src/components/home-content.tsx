import SiteShell from "./site-shell";
import InternalLink from "./internal-link";
import LegacyEntry from "./legacy-entry";
export default function HomeContent() {
  return (
    <SiteShell>
      <LegacyEntry />
      <section className="bright-hero">
        <div className="bright-title">
          <div className="eyebrow">
            VEGAN & VEGETARIAN DINING · 纯素与蛋奶素料理
          </div>
          <h1>
            Good food.
            <br />
            <em>Beautiful plans.</em>
          </h1>
          <p className="hero-zh">今晚的美好，从一顿好饭开始。</p>
          <p className="intro">
            Five courses for $59. Eight for $99.
            <br />
            Or make lunch your favorite part of the day.
          </p>
          <p className="zh">
            $59 五道式 · $99 八道式，也欢迎来吃一顿自在午餐。
          </p>
          <div className="hero-actions">
            <InternalLink className="cta" href="/menus">
              See the menus<small>先看菜单 ↗</small>
            </InternalLink>
            <InternalLink className="inline-link" href="/reservations">
              Reserve a table · 立即订位 ↗
            </InternalLink>
          </div>
          <div className="tiny-location">
            616 N Robertson Blvd · West Hollywood
          </div>
        </div>
        <div className="bright-choices">
          <div className="eyebrow">
            WHAT ARE YOU IN THE MOOD FOR? · 今天想吃什么？
          </div>
          <div className="choice-grid">
            <InternalLink href="/menus?menu=59">
              <img src="/assets/garden.webp" alt="五道纯素晚餐" />
              <div>
                <strong>$59</strong>
                <span>Five-course dinner</span>
                <small>五道纯素晚餐</small>
              </div>
              <b>↗</b>
            </InternalLink>
            <InternalLink href="/menus?menu=99">
              <img src="/assets/lotus.webp" alt="八道式品鉴" />
              <div>
                <strong>$99</strong>
                <span>Eight-course tasting</span>
                <small>八道式品鉴</small>
              </div>
              <b>↗</b>
            </InternalLink>
            <InternalLink href="/menus?menu=lunch">
              <img src="/assets/pot.webp" alt="自在午餐" />
              <div>
                <strong>Lunch</strong>
                <span>A little everyday pleasure</span>
                <small>自在午餐</small>
              </div>
              <b>↗</b>
            </InternalLink>
            <InternalLink href="/xiaolongbao">
              <img src="/assets/xlb-0.webp" alt="手工小笼包" />
              <div>
                <strong>Xiaolongbao</strong>
                <span>Handmade little comforts</span>
                <small>手工小笼包</small>
              </div>
              <b>↗</b>
            </InternalLink>
          </div>
        </div>
      </section>
      <section className="home-intro" aria-label="Explore Taste of Beauty">
        <div>
          <div className="eyebrow">OUR STORY · 品牌故事</div>
          <h2>
            We’re all <em>Earthlings.</em>
          </h2>
          <p className="zh">我们，都是地球上的生命。</p>
          <p>At Taste of Beauty, we see a world of possibility in plants.</p>
          <InternalLink className="inline-link" href="/our-story">
            Our story · 了解品牌故事 ↗
          </InternalLink>
        </div>
        <div>
          <div className="eyebrow">GATHERINGS · 聚会与包场</div>
          <h2>
            Bring your people.
            <br />
            <em>Make it beautiful.</em>
          </h2>
          <p className="zh">与喜欢的人，把相聚过得更美。</p>
          <InternalLink className="inline-link" href="/gatherings">
            Plan your gathering · 探索聚会包场 ↗
          </InternalLink>
        </div>
        <div>
          <div className="eyebrow">VISIT · 期待你的到来</div>
          <h2>
            A place <em>to pause.</em>
          </h2>
          <p>
            616 N Robertson Blvd
            <br />
            West Hollywood, CA 90069
          </p>
          <InternalLink className="inline-link" href="/visit">
            Plan your visit · 地址与营业时间 ↗
          </InternalLink>
        </div>
      </section>
    </SiteShell>
  );
}
