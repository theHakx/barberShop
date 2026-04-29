import { useEffect, useRef, useState } from 'react'
import heroVideo from '../../assets/brbVideo.mp4'
import brbVideo2 from '../../assets/brbVideo2.mp4'
import brbVideo3 from '../../assets/brbVideo3.mp4'
import './HeroSectionPage.scss'

const HERO_VIDEOS = [heroVideo, brbVideo2, brbVideo3]

export default function HeroSectionPage({ bookingUrl }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()
    const playPromise = video.play()
    if (playPromise?.catch) {
      playPromise.catch(() => {})
    }
  }, [currentVideoIndex])

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % HERO_VIDEOS.length)
  }

  return (
    <section className="sb-hero" aria-label="Intro">
      <div className="sb-hero-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="sb-hero-video"
          autoPlay
          muted
          loop={false}
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        >
          <source src={HERO_VIDEOS[currentVideoIndex]} type="video/mp4" />
        </video>
      </div>

      <div className="sb-shell sb-hero-inner" data-reveal>
        <div className="sb-hero-copy">
          <p className="sb-kicker">North West London</p>
          <h1 className="sb-h1">Starboy Barbers</h1>
          <p className="sb-lead">
            An elegant barbershop experience in Kilburn.
          </p>

          <div className="sb-hero-actions">
            <a className="sb-btn sb-btn-solid" href={bookingUrl} target="_blank" rel="noreferrer">
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
  )
}
