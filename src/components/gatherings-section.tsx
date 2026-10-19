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
          For birthdays, anniversary dinners, meaningful celebrations and time together. Tell us your date, guest count and occasion — we’ll help you plan private dining in West Hollywood.
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
          <div><h3>Birthday & anniversary dinners</h3><p>A tasting menu for the table, a quiet corner, and a reason to stay a little longer.</p></div>
        </div>
        <div>
          <span>02</span>
          <div><h3>Private dining & social gatherings</h3><p>Team dinners, family meals and long tables, with a menu planned with our team.</p></div>
        </div>
        <div>
          <span>03</span>
          <div><h3>Vegetarian wedding celebrations</h3><p>Rehearsal dinners and intimate celebrations with a vegan or vegetarian menu built around your day.</p></div>
        </div>
      </div>
    </section>
  );
}
