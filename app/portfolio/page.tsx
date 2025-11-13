export const metadata = {
  title: 'Portfolio - Connor Mcneely',
}

export default function Portfolio() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Portfolio & Success Stories</h1>
          <p className="lead">Showcasing transformative leadership outcomes and impactful projects</p>
        </div>
      </section>

      <section className="portfolio-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Impact Through Leadership</h2>
            <p>Each engagement represents a unique journey of growth, transformation, and sustained success. Here are some highlights of the work I&apos;ve been privileged to be part of.</p>
          </div>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3>Executive Leadership Transformation</h3>
                <p className="portfolio-meta">Fortune 500 Company | 2024</p>
                <p>Guided C-suite executives through organizational change, resulting in improved team performance and strategic alignment.</p>
                <div className="portfolio-tags">
                  <span className="tag">Executive Coaching</span>
                  <span className="tag">Change Management</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3>Emerging Leaders Program</h3>
                <p className="portfolio-meta">Tech Startup | 2023</p>
                <p>Developed and delivered comprehensive leadership development program for high-potential team members.</p>
                <div className="portfolio-tags">
                  <span className="tag">Group Mentorship</span>
                  <span className="tag">Skill Development</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3>Nonprofit Leadership Initiative</h3>
                <p className="portfolio-meta">Community Organization | 2023</p>
                <p>Coached nonprofit leaders in strategic planning, stakeholder engagement, and sustainable growth strategies.</p>
                <div className="portfolio-tags">
                  <span className="tag">Strategic Planning</span>
                  <span className="tag">Community Impact</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3>Healthcare Leadership Development</h3>
                <p className="portfolio-meta">Regional Hospital System | 2022</p>
                <p>Facilitated leadership workshops focused on team building, communication, and patient-centered care.</p>
                <div className="portfolio-tags">
                  <span className="tag">Team Building</span>
                  <span className="tag">Healthcare Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Create Your Success Story?</h2>
          <p>Let&apos;s discuss how we can work together to achieve your leadership goals</p>
          <a href="/contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </section>
    </>
  )
}
