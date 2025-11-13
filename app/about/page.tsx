import Link from 'next/link'

export const metadata = {
  title: 'About Connor Mcneely - Leadership Coach',
}

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Connor Mcneely</h1>
          <p className="lead">Building leaders who create lasting impact</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>My Story</h2>
              <p>Connor Mcneely is a dedicated leadership coach and mentor committed to empowering individuals to reach their full potential. With a passion for developing leaders who create lasting legacies, Connor brings a unique blend of experience, insight, and practical wisdom to every coaching engagement.</p>

              <h3>Philosophy</h3>
              <p>True leadership isn&apos;t about authority—it&apos;s about influence, impact, and legacy. I believe that every individual has the capacity to lead in their own unique way, and my mission is to help you discover and develop that leadership potential.</p>

              <h3>Approach</h3>
              <p>My coaching approach is personalized, practical, and results-oriented. I combine proven leadership principles with innovative strategies to help you overcome challenges, maximize your strengths, and achieve your goals.</p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <h4>Core Values</h4>
                <ul>
                  <li>Integrity in all interactions</li>
                  <li>Commitment to growth</li>
                  <li>Excellence in service</li>
                  <li>Authentic leadership</li>
                  <li>Community empowerment</li>
                </ul>
              </div>
              <div className="highlight-card">
                <h4>Expertise Areas</h4>
                <ul>
                  <li>Executive Leadership</li>
                  <li>Team Development</li>
                  <li>Strategic Planning</li>
                  <li>Personal Growth</li>
                  <li>Legacy Building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="credentials">
        <div className="container">
          <h2>Qualifications & Experience</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <div className="credential-icon">🎓</div>
              <h3>Education</h3>
              <p>Advanced certifications in leadership development and coaching methodologies</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">⭐</div>
              <h3>Experience</h3>
              <p>Years of hands-on experience coaching leaders across diverse industries</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">🏆</div>
              <h3>Results</h3>
              <p>Proven track record of helping clients achieve breakthrough results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Let&apos;s Work Together</h2>
          <p>Ready to take your leadership to the next level?</p>
          <Link href="/contact" className="btn btn-primary">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
