import Image from "next/image";

export default function VisitSection() {
  return (
    <section className="image-story image-story--philosophy" id="visit" aria-labelledby="philosophy-title">
      <div className="image-story-media">
        <Image
          src="/images/restaurant/window-side-room.png"
          alt="Warm dining room with Buddha hand artwork and plants beside sunlit windows"
          fill
          sizes="100vw"
        />
      </div>
      <div className="image-story-copy">
        <div className="eyebrow">OUR PHILOSOPHY</div>
        <h2 id="philosophy-title">
          At Taste of Beauty, we believe beauty begins with <em>seeing life differently.</em>
        </h2>
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
