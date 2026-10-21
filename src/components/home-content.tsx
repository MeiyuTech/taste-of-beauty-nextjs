import GoogleReviews from "./google-reviews";
import MediaLogos from "./media-logos";
import { pressMedia } from "@/lib/press";
import GatheringsSection from "./gatherings-section";
import VisitSection from "./visit-section";
import StorySection from "./story-section";
import BookingSection from "./booking-section";
import SiteShell from "./site-shell";
import InternalLink from "./internal-link";
import LegacyEntry from "./legacy-entry";
export default function HomeContent() {
  return (
    <SiteShell>
      <LegacyEntry />
      <section className="bright-hero">
        <div className="bright-title">
          <h1 className="eyebrow">Vegan Fine Dining in West Hollywood</h1>
          <p className="display-title">
            Good vegan food.
            <br />
            <em>Beautiful plans.</em>
          </p>
          <p className="intro">
            Five courses for $59. An eight-course tasting menu, vegan or vegetarian, for $99.
            <br />
            Or make lunch your favorite part of the day.
          </p>
          <div className="hero-actions">
            <InternalLink className="cta" href="/menus">
              See the menus
            </InternalLink>
            <InternalLink className="inline-link" href="/#booking">
              Reserve a table
            </InternalLink>
          </div>
          <div className="tiny-location">
            616 N Robertson Blvd · West Hollywood, CA
          </div>
        </div>
        <div className="bright-choices">
          <div className="eyebrow">
            WHAT ARE YOU IN THE MOOD FOR?
          </div>
          <h2 className="menu-picker-heading">Your next vegan dinner, tasting menu or lunch</h2>
          <div className="choice-grid">
            <InternalLink href="/menus?menu=59">
              <img src="/assets/garden.webp" alt="Five-course vegan dinner" />
              <div>
                <strong>$59</strong>
                <span>5-Course Special Tasting</span>
              </div>
            </InternalLink>
            <InternalLink href="/menus?menu=99">
              <img src="/assets/lotus.webp" alt="Eight-course tasting menu" />
              <div>
                <strong>$99</strong>
                <span>8-Course Tasting Menu</span>
              </div>
            </InternalLink>
            <InternalLink href="/menus?menu=lunch">
              <img src="/assets/vegetable-noodles.png" alt="Vegetable noodles with mushrooms and fresh basil at Taste of Beauty" />
              <div>
                <strong>Lunch</strong>
                <span>A little everyday pleasure</span>
              </div>
            </InternalLink>
            <InternalLink href="/vegan-xiaolongbao">
              <img src="/assets/xlb-0.webp" alt="Handmade xiaolongbao" />
              <div>
                <strong>Xiaolongbao</strong>
                <span>Handmade vegan dumplings</span>
              </div>
            </InternalLink>
          </div>
        </div>
      </section>
      <MediaLogos logos={pressMedia} />
      <StorySection />
      <GoogleReviews />
      <BookingSection />
      <GatheringsSection />
      <VisitSection />
    </SiteShell>
  );
}
