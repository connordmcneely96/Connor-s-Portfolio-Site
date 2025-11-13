import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Leadership Journey</h1>
          <p className="hero-subtitle">Empowering leaders to build lasting legacies through coaching, mentorship, and community</p>
          <div className="hero-cta">
            <Link href="/coaching" className="btn btn-primary">Explore Coaching</Link>
            <Link href="/community" className="btn btn-secondary">Join Community</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Connor Mcneely?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Coaching</h3>
              <p>One-on-one guidance tailored to your unique leadership journey and goals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Mentorship Community</h3>
              <p>Connect with like-minded leaders in a supportive, growth-focused environment</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Proven Results</h3>
              <p>Evidence-based strategies that drive real transformation and measurable outcomes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Professional Services</h3>
              <p>Comprehensive leadership development programs for individuals and organizations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Take the first step toward transformational leadership</p>
          <Link href="/contact" className="btn btn-primary">Get Started Today</Link>
        </div>
      </section>
    </>
  )
}
