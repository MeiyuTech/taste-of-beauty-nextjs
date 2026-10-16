import Image from "next/image";
import InternalLink from "./internal-link";

export default function StorySection() {
  return (
    <section className="image-story image-story--food" id="our-story" aria-labelledby="story-title">
      <div className="image-story-media">
        <Image
          src="/images/food/pumpkin-soup-landscape.png"
          alt="Golden pumpkin soup with delicate crisp garnish in a turquoise bowl"
          fill
          sizes="(max-width: 900px) 92vw, (min-width: 1800px) 1204px, 65vw"
        />
      </div>
      <div className="image-story-copy">
        <div className="eyebrow">OUR STORY</div>
        <h2 id="story-title">
          We’re all
          <br />
          <em>Earthlings.</em>
        </h2>
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
        <InternalLink className="image-story-link" href="/menus">
          Discover our menus <span aria-hidden="true">↗</span>
        </InternalLink>
      </div>
    </section>
  );
}
