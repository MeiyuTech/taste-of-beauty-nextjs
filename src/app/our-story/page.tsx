import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import InternalLink from "@/components/internal-link";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Nature, imagination and a little more kindness. Discover the story of Taste of Beauty.",
  ...(siteUrl ? { alternates: { canonical: "/our-story" } } : {}),
};
export default function Page() {
  return (
    <SiteShell active="our-story" page>
      <section className="brand-story-section" id="our-story">
        <div className="brand-story-photo">
          <img
            src="/assets/tea.webp"
            alt="A quiet moment of tea being poured at Taste of Beauty"
            loading="lazy"
          />
          <span>BEAUTY IN THE EVERYDAY · 日常之中，发现美</span>
        </div>
        <div className="brand-story-copy">
          <div className="eyebrow">OUR STORY · 品牌故事</div>
          <h1>
            We’re all
            <br />
            <em>Earthlings.</em>
          </h1>
          <p className="story-cn-title">我们，都是地球上的生命。</p>
          <p>
            At Taste of Beauty, we see a world of possibility in plants. A leaf,
            a mushroom, a familiar vegetable — each can become something
            unexpected, beautiful and full of flavor.
          </p>
          <p>
            We bring nature and imagination to the table through vegan and
            vegetarian cooking. Whether you join us for a quiet lunch, a tasting
            menu or a gathering with people you love, our wish is simple: a good
            meal, a moment of connection, and a little more kindness.
          </p>
          <div className="story-chinese">
            <p>
              在 Taste of
              Beauty，我们相信，植物之中藏着丰富的可能。一片叶子、一朵菌菇、一种熟悉的蔬菜，都能化作意想不到的美与滋味。
            </p>
            <p>
              我们通过纯素与蛋奶素料理，把自然与想象带上餐桌。无论是一顿自在午餐、一场品鉴晚餐，还是与珍视之人的相聚，我们希望这一餐带来美味、人与人的连接，以及多一点善意。
            </p>
          </div>
          <InternalLink className="inline-link" href="/menus">
            Discover our menus · 探索我们的菜单 ↗
          </InternalLink>
        </div>
      </section>
    </SiteShell>
  );
}
