import './ContactSectionPage.scss'

export default function ContactSectionPage({ address1, address2, phone, email, bookingUrl }) {
  return (
    <section id="contact" className="sb-section sb-section-alt">
      <div className="sb-shell">
        <div className="sb-section-head" data-reveal>
          <div className="sb-section-meta">
            <div className="sb-section-index">06</div>
            <div>
              <p className="sb-eyebrow">Contact</p>
              <h2 className="sb-h2">Contact</h2>
            </div>
          </div>
          <p className="sb-muted">Reach out for appointments or questions.</p>
        </div>

        <div className="sb-contact-grid" data-reveal>
          <div className="sb-contact-card sb-contact-details">
            <div className="sb-contact-row">
              <div className="sb-contact-label">Address</div>
              <a
                className="sb-contact-value"
                href="https://www.google.com/maps?q=256+Kilburn+High+Road,+London+NW6+2BY"
                target="_blank"
                rel="noreferrer"
              >
                {address1}, {address2}
              </a>
            </div>
            <div className="sb-contact-row">
              <div className="sb-contact-label">Phone</div>
              <a className="sb-contact-value" href={`tel:${phone.replace(/\s/g, '')}`}>
                {phone}
              </a>
            </div>
            <div className="sb-contact-row">
              <div className="sb-contact-label">Email</div>
              <a className="sb-contact-value" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <div className="sb-contact-row">
              <div className="sb-contact-label">Hours</div>
              <div className="sb-contact-value">8 AM – 5 PM, Mon – Sun</div>
            </div>
            <div className="sb-contact-row">
              <div className="sb-contact-label">Booking</div>
              <a className="sb-contact-value" href={bookingUrl} target="_blank" rel="noreferrer">
                starboybarber.setmore.com
              </a>
            </div>
          </div>

          <div className="sb-contact-card sb-contact-social">
            <div className="sb-card-heading">
              <p className="sb-eyebrow">Social</p>
              <h2 className="sb-h2">Social</h2>
            </div>
            <div className="sb-social-row">
              <a className="sb-social-link" href="https://www.instagram.com/starboy_barbers/" target="_blank" rel="noreferrer">
                <span className="sb-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </span>
                Instagram
              </a>
              <a className="sb-social-link" href="https://m.facebook.com/starboy.barbers.5/" target="_blank" rel="noreferrer">
                <span className="sb-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.12 8.22h1.82V5.26h-1.82c-2.77 0-4.57 1.61-4.57 4.29v1.31H8.98v2.32h1.4V19h2.57v-3.8h1.97l.3-2.32h-2.27V9.64c0-.67.18-1.12 1.12-1.12z" />
                  </svg>
                </span>
                Facebook
              </a>
            </div>
            <div className="sb-footer-mini">
              <div>© {new Date().getFullYear()} Starboy Barber</div>
              <div>North West London</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
