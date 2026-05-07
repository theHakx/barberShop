import './Footer.scss'

export default function Footer({ address1, address2, phone, email, bookingUrl }) {
  return (
    <footer className="sb-footer">
      <div className="sb-shell">
        <div className="sb-footer-content">
          <div className="sb-footer-brand">
            <div className="sb-footer-logo">
              <span className="sb-mark" aria-hidden="true">SB</span>
              <span className="sb-footer-title">Starboy Barber</span>
            </div>
            <p className="sb-footer-description">
              An elegant barbershop experience in Kilburn, North West London.
              Precision cuts, sharp fades, and an unforgettable experience.
            </p>
          </div>

          <div className="sb-footer-links">
            <div className="sb-footer-section">
              <h3 className="sb-footer-heading">Services</h3>
              <ul className="sb-footer-list">
                <li><a href="#services">Services & Pricing</a></li>
                <li><a href="#gallery">Our Work</a></li>
                <li><a href="#booking">Book Appointment</a></li>
              </ul>
            </div>

            <div className="sb-footer-section">
              <h3 className="sb-footer-heading">Contact</h3>
              <ul className="sb-footer-list">
                <li><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></li>
                <li><a href={`mailto:${email}`}>{email}</a></li>
                <li><a href="#location">{address1}, {address2}</a></li>
              </ul>
            </div>

            <div className="sb-footer-section">
              <h3 className="sb-footer-heading">Hours</h3>
              <ul className="sb-footer-list">
                <li>Mon - Sun: 8 AM - 5 PM</li>
                <li><a href="#hours">View Full Hours</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sb-footer-bottom">
          <div className="sb-footer-social">
            <a href="https://www.instagram.com/starboy_barbers/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
            <a href="https://m.facebook.com/starboy.barbers.5/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.12 8.22h1.82V5.26h-1.82c-2.77 0-4.57 1.61-4.57 4.29v1.31H8.98v2.32h1.4V19h2.57v-3.8h1.97l.3-2.32h-2.27V9.64c0-.67.18-1.12 1.12-1.12z" />
              </svg>
            </a>
          </div>
          <div className="sb-footer-copyright">
            © {new Date().getFullYear()} Starboy Barber. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
