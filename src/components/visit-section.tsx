export default function VisitSection() {
  return (
  <section className="visit-section" id="visit">
    <div className="visit-photo">
      <img
        src="/assets/interior.webp"
        alt="Taste of Beauty dining room with warm wood interiors and a piano"
        loading="lazy"
      />
    </div>
    <div className="visit-info">
      <div className="eyebrow">COME AS YOU ARE</div>
      <h2>
        A beautiful meal.
        <br />
        <em>A place to pause.</em>
      </h2>
      <div className="visit-pairs">
        <div>
          <h3>Find us</h3>
          <p>
            616 N Robertson Blvd
            <br />
            West Hollywood, CA 90069
          </p>
          <a
            className="inline-link"
            href="https://www.google.com/maps/search/?api=1&query=616+N+Robertson+Blvd+West+Hollywood+CA+90069"
            target="_blank"
            rel="noopener"
          >
            Directions
          </a>
        </div>
        <div>
          <h3>Tuesday–Sunday</h3>
          <p>
            Lunch · 12:30–3:30 pm
            <br />
            Dinner · 5:30–9:00 pm
            <br />
            Monday closed
          </p>
        </div>
      </div>
      <a className="inline-link" href="tel:+16575063567">
        (657) 506-3567
      </a>
      <p className="fine">
        Dietary needs or allergies? Please let us know before you dine.
      </p>
    </div>
  </section>
  );
}
