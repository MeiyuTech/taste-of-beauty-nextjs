import { DiningProvider, BookingForm } from "./dining";

export default function BookingSection() {
  return (
    <DiningProvider queryKey="booking">
      <section className="booking-section" id="booking">
        <div className="booking-title">
          <div className="eyebrow">YOUR NEXT GOOD MEAL</div>
          <h2>
            Let’s find{" "}
            <br />
            <em>your table.</em>
          </h2>
        </div>
        <BookingForm />
      </section>
    </DiningProvider>
  );
}
