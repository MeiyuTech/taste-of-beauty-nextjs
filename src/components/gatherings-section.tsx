export default function GatheringsSection() {
  return (
    <section className="gatherings-section" id="gatherings">
      <div className="gatherings-intro">
        <div className="eyebrow">
          GATHERINGS & PRIVATE DINING
        </div>
        <h2>
          Bring your people.
          <br />
          <em>Make it beautiful.</em>
        </h2>
        <p>
          For birthdays, meaningful celebrations and time together. Tell us
          your date, guest count and occasion — we’ll help you explore the
          dining arrangements.
        </p>
        <div className="hero-actions">
          <a
            className="cta"
            href="mailto:events@thetasteofbeauty.com?subject=Private%20dining%20enquiry"
          >
            Plan your gathering
          </a>
          <a className="inline-link" href="tel:+16575063567">
            Call us
          </a>
        </div>
        <p className="fine">
          Space, menu, pricing and availability are confirmed individually
          with our team.
        </p>
      </div>
      <div className="gathering-options">
        <div>
          <span>01</span>
          <h3>
            Birthdays & anniversaries
          </h3>
        </div>
        <div>
          <span>02</span>
          <h3>
            Social & private gatherings
          </h3>
        </div>
        <div>
          <span>03</span>
          <h3>
            Vegetarian wedding celebrations
          </h3>
        </div>
      </div>
    </section>
  );
}
