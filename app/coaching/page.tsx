import Link from 'next/link'

export const metadata = {
  title: 'Coaching & Mentorship Services - Connor Mcneely',
}

export default function Coaching() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Coaching & Mentorship Services</h1>
          <p className="lead">Personalized guidance to unlock your leadership potential</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="section-title">Service Offerings</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">👤</div>
                <h3>1-on-1 Coaching</h3>
              </div>
              <p className="service-description">Personalized coaching sessions focused on your unique goals, challenges, and growth areas. Work directly with Connor to develop actionable strategies for success.</p>
              <ul className="service-features">
                <li>Weekly or bi-weekly sessions</li>
                <li>Customized action plans</li>
                <li>Ongoing support and accountability</li>
                <li>Progress tracking and assessment</li>
              </ul>
              <Link href="/contact" className="btn btn-outline">Learn More</Link>
            </div>

            <div className="service-card featured">
              <div className="service-badge">Most Popular</div>
              <div className="service-header">
                <div className="service-icon">👥</div>
                <h3>Group Mentorship</h3>
              </div>
              <p className="service-description">Join a cohort of leaders for collaborative learning, shared experiences, and peer support. Benefit from group wisdom while receiving expert guidance.</p>
              <ul className="service-features">
                <li>Monthly group sessions</li>
                <li>Peer-to-peer learning</li>
                <li>Structured curriculum</li>
                <li>Community access</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
            </div>

            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🏢</div>
                <h3>Corporate Programs</h3>
              </div>
              <p className="service-description">Comprehensive leadership development programs designed for organizations looking to build strong leadership cultures and high-performing teams.</p>
              <ul className="service-features">
                <li>Team workshops and training</li>
                <li>Leadership assessments</li>
                <li>Custom program design</li>
                <li>Executive coaching</li>
              </ul>
              <Link href="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Leadership?</h2>
          <p>Schedule a free consultation to discuss your goals</p>
          <Link href="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </>
  )
}
