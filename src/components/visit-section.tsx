export default function VisitSection() {
  return (
    <section className="visit-section" id="visit" aria-label="Our philosophy">
      <div className="visit-photo">
        <img
          src="/assets/interior.webp"
          alt="Taste of Beauty dining room with warm wood interiors and a piano"
          loading="lazy"
        />
      </div>
      <div className="visit-info visit-philosophy">
        <p className="philosophy-lead">
          At Taste of Beauty, we believe beauty begins with seeing life differently.
        </p>
        <p>
          A vegetable is more than a side dish. An animal is another living being.
          We are part of nature, not above it.
        </p>
        <p>
          That is why we celebrate the abundance of nature through thoughtfully
          crafted vegan and vegetarian cuisine — transforming simple ingredients
          into expressions of beauty, creativity, and flavor.
        </p>
        <p>
          We believe a meal is more than food. It is a moment to connect, to
          appreciate life, and to share a little more kindness.
        </p>
      </div>
    </section>
  );
}
