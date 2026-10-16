import InternalLink from "./internal-link";

export default function StorySection() {
  return (
    <section className="brand-story-section" id="our-story">
      <div className="brand-story-photo">
        <img
          src="/assets/tea.webp"
          alt="A quiet moment of tea being poured at Taste of Beauty"
          loading="lazy"
        />
        <span>BEAUTY IN THE EVERYDAY</span>
      </div>
      <div className="brand-story-copy">
        <div className="eyebrow">OUR STORY</div>
        <h2>
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
        <InternalLink className="inline-link" href="/menus">
          Discover our menus
        </InternalLink>
      </div>
    </section>
  );
}
