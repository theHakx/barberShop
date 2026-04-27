 
import { useEffect } from 'react'
import heroVideo from '../../assets/brbVideo.mp4'
import blackHairCut1 from '../../assets/blackHairCut1.jpg'
import blackHairCut2 from '../../assets/blackHairCut2.jpg'
import blackHairCut3 from '../../assets/blackHairCut3.jpg'
import blackHairCut4 from '../../assets/blackHairCut4.jpg'
import './LandingPage.scss'

const BOOKING_URL = 'https://starboybarber.setmore.com'
const PHONE = '+44 7588 781631'
const EMAIL = 'starboybarbersltd@gmail.com'
const ADDRESS_1 = '256 Kilburn High Road'
const ADDRESS_2 = 'London, NW6 2BY'

const SERVICES = [
  {
    group: 'Kids',
    items: [
      { name: 'Kids Haircut', price: '£25', duration: '40 mins' }
    ]
  },
  {
    group: 'Teen',
    items: [
      { name: 'Teenager', price: '£30', duration: '40 mins' },
      { name: 'Teenager Shape Up', price: '£15', duration: '40 mins' }
    ]
  },
  {
    group: 'Adult',
    items: [
      { name: 'Adult', price: '£40', duration: '40 mins' },
      { name: 'Adult Shape Up', price: '£20', duration: '40 mins' },
      { name: 'Adult Trim and Wash', price: '£45', duration: '40 mins' },
      { name: 'Adult Long Haircut', price: '£50', duration: '40 mins' },
      { name: 'Shape Up with Beard', price: '£30', duration: '40 mins' },
      { name: 'Wash Only', price: '£15', duration: '40 mins' },
      { name: 'VIP Haircut for Wedding', price: '£60', duration: '40 mins' }
    ]
  }
]

export default function LandingPage() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (elements.length === 0) return

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const hero = document.querySelector('.sb-hero')
      if (hero) {
        const rate = scrolled * -0.5
        hero.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const gallerySection = document.getElementById('gallery')
    if (!gallerySection) return

    const darkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gallerySection.classList.add('is-dark')
          } else {
            gallerySection.classList.remove('is-dark')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    )

    darkObserver.observe(gallerySection)
    return () => darkObserver.disconnect()
  }, [])

  return (
    <div className="sb">
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
            <a href="#services">Services</a>
            <a href="#hours">Hours</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="sb-header-cta">
            <a className="sb-phone" href={`tel:${PHONE.replace(/\s/g, '')}`}>
              {PHONE}
            </a>
            <a className="sb-btn sb-btn-solid" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book now
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="sb-main">
        <section className="sb-hero" aria-label="Intro">
          <div className="sb-hero-bg" aria-hidden="true">
            <video
              className="sb-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>

          <div className="sb-shell sb-hero-inner" data-reveal>
            <div className="sb-hero-copy">
              <p className="sb-kicker">North West London</p>
              <h1 className="sb-h1">Starboy Barbers</h1>
              <p className="sb-lead">
                An elegant barbershop experience in Kilburn — clean finishes, crafted detail.
              </p>

              <div className="sb-hero-actions">
                <a className="sb-btn sb-btn-solid" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book an appointment
                </a>
                <a className="sb-btn sb-btn-ghost" href="#services">
                  View services
                </a>
              </div>
            </div>
          </div>

          <div className="sb-scroll-cue" aria-hidden="true">
            <div className="sb-scroll-line"></div>
            <span>Scroll</span>
          </div>
        </section>

        <section id="services" className="sb-section sb-section-soft">
          <div className="sb-shell">
            <div className="sb-section-head" data-reveal>
              <div className="sb-section-meta">
                <div className="sb-section-index">01</div>
                <div>
                  <p className="sb-eyebrow">Services</p>
                  <h2 className="sb-h2">Services & Pricing</h2>
                </div>
              </div>
              <p className="sb-muted">All sessions are 40 minutes.</p>
            </div>

            <div className="sb-menu" role="list">
              {SERVICES.map((group, groupIndex) => (
                <div key={group.group} className="sb-menu-group">
                  {group.items.map((s) => (
                    <div key={s.name} className="sb-menu-item" role="listitem" data-reveal>
                      <div className="sb-menu-top">
                        <div className="sb-menu-name">{s.name}</div>
                        <div className="sb-menu-leader" aria-hidden="true"></div>
                        <div className="sb-menu-price">{s.price}</div>
                      </div>
                      <div className="sb-menu-sub">{s.duration}</div>
                    </div>
                  ))}
                  {groupIndex < SERVICES.length - 1 && (
                    <div className="sb-menu-divider" aria-hidden="true"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="sb-section-cta">
              <a className="sb-btn sb-btn-solid" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book now
              </a>
            </div>
          </div>
        </section>

        <section id="hours" className="sb-section sb-section-alt">
          <div className="sb-shell sb-split">
            <div className="sb-section-head" data-reveal>
              <div className="sb-section-meta">
                <div className="sb-section-index">02</div>
                <div>
                  <p className="sb-eyebrow">Hours</p>
                  <h2 className="sb-h2">Opening Hours</h2>
                </div>
              </div>
              <p className="sb-muted">Open 8 AM – 5 PM, Monday to Sunday.</p>
            </div>
            <div className="sb-hours" data-reveal>
              <div className="sb-hours-row">
                <div className="sb-hours-day">Monday</div>
                <div className="sb-hours-time">8 AM – 5 PM</div>
              </div>
              <div className="sb-hours-row">
                <div className="sb-hours-day">Tuesday</div>
                <div className="sb-hours-time">8 AM – 5 PM</div>
              </div>
              <div className="sb-hours-row">
                <div className="sb-hours-day">Wednesday</div>
                <div className="sb-hours-time">8 AM – 5 PM</div>
              </div>
              <div className="sb-hours-row">
                <div className="sb-hours-day">Thursday</div>
                <div className="sb-hours-time">8 AM – 5 PM</div>
              </div>
              <div className="sb-hours-row">
                <div className="sb-hours-day">Friday</div>
                <div className="sb-hours-time">8 AM – 5 PM</div>
              </div>
              <div className="sb-hours-row">
                <div className="sb-hours-day">Saturday</div>
                <div className="sb-hours-time">8 AM – 5 PM</div>
              </div>
              <div className="sb-hours-row">
                <div className="sb-hours-day">Sunday</div>
                <div className="sb-hours-time">8 AM – 5 PM</div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="sb-section sb-section-soft">
          <div className="sb-shell">
            <div className="sb-section-head" data-reveal>
              <div className="sb-section-meta">
                <div className="sb-section-index">03</div>
                <div>
                  <p className="sb-eyebrow">Gallery</p>
                  <h2 className="sb-h2">Our Work</h2>
                </div>
              </div>
              <p className="sb-muted">Showcasing our craftsmanship.</p>
            </div>

            <div className="sb-gallery" data-reveal>
              <img src={blackHairCut1} alt="Haircut 1" />
              <img src={blackHairCut2} alt="Haircut 2" />
              <img src={blackHairCut3} alt="Haircut 3" />
              <img src={blackHairCut4} alt="Haircut 4" />
            </div>
          </div>
        </section>

        <section id="location" className="sb-section sb-section-soft">
          <div className="sb-shell sb-location">
            <div className="sb-section-head" data-reveal>
              <div className="sb-section-meta">
                <div className="sb-section-index">04</div>
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

        <section id="contact" className="sb-section sb-section-alt">
          <div className="sb-shell">
            <div className="sb-section-head" data-reveal>
              <div className="sb-section-meta">
                <div className="sb-section-index">05</div>
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
                    {ADDRESS_1}, {ADDRESS_2}
                  </a>
                </div>
                <div className="sb-contact-row">
                  <div className="sb-contact-label">Phone</div>
                  <a className="sb-contact-value" href={`tel:${PHONE.replace(/\s/g, '')}`}>
                    {PHONE}
                  </a>
                </div>
                <div className="sb-contact-row">
                  <div className="sb-contact-label">Email</div>
                  <a className="sb-contact-value" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </div>
                <div className="sb-contact-row">
                  <div className="sb-contact-label">Hours</div>
                  <div className="sb-contact-value">8 AM – 5 PM, Mon – Sun</div>
                </div>
                <div className="sb-contact-row">
                  <div className="sb-contact-label">Booking</div>
                  <a className="sb-contact-value" href={BOOKING_URL} target="_blank" rel="noreferrer">
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
      </main>
    </div>
  )
}
