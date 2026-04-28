import './HoursSectionPage.scss'

const HOURS = [
  { day: 'Monday', time: '8 AM – 5 PM' },
  { day: 'Tuesday', time: '8 AM – 5 PM' },
  { day: 'Wednesday', time: '8 AM – 5 PM' },
  { day: 'Thursday', time: '8 AM – 5 PM' },
  { day: 'Friday', time: '8 AM – 5 PM' },
  { day: 'Saturday', time: '8 AM – 5 PM' },
  { day: 'Sunday', time: '8 AM – 5 PM' },
]

export default function HoursSectionPage() {
  return (
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
          {HOURS.map((hour) => (
            <div key={hour.day} className="sb-hours-row">
              <div className="sb-hours-day">{hour.day}</div>
              <div className="sb-hours-time">{hour.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
