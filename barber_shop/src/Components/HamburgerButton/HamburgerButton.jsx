import { useState } from 'react'
import './HamburgerButton.scss'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#hours', label: 'Hours' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#booking', label: 'Booking' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
]

export default function HamburgerButton({ phone, bookingUrl }) {
  const [isOpen, setIsOpen] = useState(false)
  const phoneLink = `tel:${phone.replace(/\s/g, '')}`

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="sb-hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="sb-hamburger-line"></span>
        <span className="sb-hamburger-line"></span>
        <span className="sb-hamburger-line"></span>
      </button>

      {isOpen && (
        <div className="sb-mobile-menu-overlay" onClick={closeMenu}>
          <nav className="sb-mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="sb-mobile-menu-header">
              <a className="sb-mobile-brand" href="#top" onClick={closeMenu}>
                <span className="sb-mark">SB</span>
                <span className="sb-mobile-brand-text">
                  <span className="sb-brand-title">Starboy Barber</span>
                  <span className="sb-brand-sub">Kilburn, NW London</span>
                </span>
              </a>
              <button
                className="sb-mobile-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <div className="sb-mobile-nav">
              {NAV_LINKS.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="sb-mobile-cta">
              <a className="sb-mobile-phone" href={phoneLink} onClick={closeMenu}>
                {phone}
              </a>
              <a
                className="sb-btn sb-btn-solid"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Book now
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}