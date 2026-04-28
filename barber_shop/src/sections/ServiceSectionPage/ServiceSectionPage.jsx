import './ServiceSectionPage.scss'

export default function ServiceSectionPage({ services, bookingUrl }) {
  return (
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
          {services.map((group, groupIndex) => (
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
              {groupIndex < services.length - 1 && (
                <div className="sb-menu-divider" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>

        <div className="sb-section-cta">
          <a className="sb-btn sb-btn-solid" href={bookingUrl} target="_blank" rel="noreferrer">
            Book now
          </a>
        </div>
      </div>
    </section>
  )
}
