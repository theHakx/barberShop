import './BookingSection.scss'

export default function BookingSection({ bookingUrl }) {
  return (
    <section id="booking" className="sb-section sb-section-soft">
      <div className="sb-shell">
        <div className="sb-section-head" data-reveal>
          <div className="sb-section-meta">
            <div className="sb-section-index">04</div>
            <div>
              <p className="sb-eyebrow">Booking</p>
              <h2 className="sb-h2">Book Your Appointment</h2>
            </div>
          </div>
          <p className="sb-muted">Reserve your time with our skilled barbers.</p>
        </div>

        <div className="sb-booking-panel" data-reveal>
          <div className="sb-booking-copy">
            <p className="sb-booking-lead">
              Secure your spot with a simple online booking flow. Starboy Barber uses Setmore to manage appointments, so you get fast confirmation and reliable availability.
            </p>
            <ul className="sb-booking-list">
              <li>All appointments are 40 minutes</li>
              <li>Instant booking confirmation</li>
              <li>Same-day and next-day availability</li>
            </ul>
          </div>

          <div className="sb-booking-action">
            <a
              className="sb-btn sb-btn-solid sb-btn-lg"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open booking page
            </a>
            <p className="sb-booking-note">
              Opens Setmore in a new tab so the site stays clean while booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
