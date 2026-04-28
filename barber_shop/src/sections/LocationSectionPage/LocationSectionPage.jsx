import './LocationSectionPage.scss'

export default function LocationSectionPage() {
  return (
    <section id="location" className="sb-section sb-section-soft">
      <div className="sb-shell sb-location">
        <div className="sb-section-head" data-reveal>
          <div className="sb-section-meta">
            <div className="sb-section-index">05</div>
            <div>
              <p className="sb-eyebrow">Location</p>
              <h2 className="sb-h2">Find us</h2>
            </div>
          </div>
          <p className="sb-muted">Kilburn, North West London.</p>
        </div>

        <div className="sb-map" aria-label="Map" data-reveal>
          <iframe
            title="Starboy Barber map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=256%20Kilburn%20High%20Road%2C%20London%20NW6%202BY&output=embed"
          />
        </div>
      </div>
    </section>
  )
}
