 
import { useEffect } from 'react'
import BookingSection from '../../sections/BookingSection/BookingSection'
import ContactSectionPage from '../../sections/ContactSectionPage/ContactSectionPage'
import GallerySectionPage from '../../sections/GallerySectionPage/GallerySectionPage'
import HoursSectionPage from '../../sections/HoursSectionPage/HoursSectionPage'
import HeroSectionPage from '../../sections/HeroSectionPage/HeroSectionPage'
import LocationSectionPage from '../../sections/LocationSectionPage/LocationSectionPage'
import Navbar from '../../Components/Navbar/Navbar'
import ServiceSectionPage from '../../sections/ServiceSectionPage/ServiceSectionPage'
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
      <Navbar phone={PHONE} bookingUrl={BOOKING_URL} />

      <main id="top" className="sb-main">
        <HeroSectionPage bookingUrl={BOOKING_URL} />
        <ServiceSectionPage services={SERVICES} bookingUrl={BOOKING_URL} />
        <HoursSectionPage />
        <GallerySectionPage />
        <BookingSection bookingUrl={BOOKING_URL} />
        <LocationSectionPage />
        <ContactSectionPage
          address1={ADDRESS_1}
          address2={ADDRESS_2}
          phone={PHONE}
          email={EMAIL}
          bookingUrl={BOOKING_URL}
        />
      </main>
    </div>
  )
}
