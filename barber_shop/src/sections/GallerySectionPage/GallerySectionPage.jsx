import blackHairCut1 from '../../assets/blackHairCut1.jpg'
import blackHairCut2 from '../../assets/blackHairCut2.jpg'
import blackHairCut3 from '../../assets/blackHairCut3.jpg'
import blackHairCut4 from '../../assets/blackHairCut4.jpg'
import './GallerySectionPage.scss'

const GALLERY_IMAGES = [
  { src: blackHairCut1, alt: 'Haircut 1' },
  { src: blackHairCut2, alt: 'Haircut 2' },
  { src: blackHairCut3, alt: 'Haircut 3' },
  { src: blackHairCut4, alt: 'Haircut 4' },
]

export default function GallerySectionPage() {
  return (
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
          {GALLERY_IMAGES.map((image) => (
            <img key={image.alt} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}
