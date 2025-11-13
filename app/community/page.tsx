import Link from 'next/link'

export const metadata = {
  title: 'Community - Connor Mcneely Leadership',
}

export default function Community() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Leadership Community</h1>
          <p className="lead">Join a thriving network of leaders committed to growth and excellence</p>
        </div>
      </section>

      <section className="community-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Welcome to the Community</h2>
              <p>Our leadership community is more than just a network—it&apos;s a supportive ecosystem where leaders connect, collaborate, and grow together. Whether you&apos;re an emerging leader or a seasoned executive, you&apos;ll find value, inspiration, and support here.</p>
              <p>Members benefit from exclusive resources, networking opportunities, and ongoing mentorship that extends beyond individual coaching sessions.</p>
            </div>
            <div className="intro-image">
              <div className="community-visual">
                <div className="visual-icon">🌟</div>
                <p>A space for<br/><strong>Growth & Connection</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-benefits">
        <div className="container">
          <h2>Community Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💬</div>
              <h3>Monthly Meetups</h3>
              <p>Regular virtual and in-person gatherings for networking, learning, and sharing experiences with fellow leaders</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Resource Library</h3>
              <p>Access to exclusive tools, templates, guides, and resources to support your leadership development</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Workshops & Webinars</h3>
              <p>Participate in specialized training sessions covering various aspects of leadership and personal development</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Peer Support</h3>
              <p>Connect with like-minded leaders for accountability, encouragement, and collaborative problem-solving</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Success Tracking</h3>
              <p>Tools and frameworks to measure your progress and celebrate milestones along your leadership journey</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Mastermind Groups</h3>
              <p>Join small cohorts of peers for deep-dive discussions, strategic thinking, and mutual growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Join the Community</h2>
          <p>Connect with leaders who are committed to growth and excellence</p>
          <Link href="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </>
  )
}
