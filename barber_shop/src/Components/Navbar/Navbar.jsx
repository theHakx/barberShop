import './Navbar.scss'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#hours', label: 'Hours' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#booking', label: 'Booking' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ phone, bookingUrl }) {
  const phoneLink = `tel:${phone.replace(/\s/g, '')}`

  return (
    <header className="sb-header" role="banner">
      <div className="sb-shell sb-header-inner">
        <a className="sb-brand" href="#top" aria-label="Starboy Barber">
          <span className="sb-mark" aria-hidden="true">
            SB
          </span>
          <span className="sb-brand-text">
            <span className="sb-brand-title">Starboy Barber</span>
            <span className="sb-brand-sub">Kilburn, NW London</span>
          </span>
        </a>

        <nav className="sb-nav" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sb-header-cta">
          <a className="sb-phone" href={phoneLink}>
            {phone}
          </a>
          <a className="sb-btn sb-btn-solid" href={bookingUrl} target="_blank" rel="noreferrer">
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}
