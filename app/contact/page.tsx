'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    alert('Thank you for your message! We will get back to you within 24-48 hours.')
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get Started Today</h1>
          <p className="lead">Let&apos;s begin your leadership transformation journey</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let&apos;s Connect</h2>
              <p>Whether you&apos;re interested in coaching, joining the community, or exploring how we can work together, I&apos;d love to hear from you.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>connor@leadershiplegacy.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <p>Available by appointment</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💼</div>
                  <div className="method-content">
                    <h3>LinkedIn</h3>
                    <p>Connect professionally</p>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <h3>What to Expect</h3>
                <ul>
                  <li>Response within 24-48 hours</li>
                  <li>Free initial consultation call</li>
                  <li>Personalized recommendations</li>
                  <li>No pressure, just conversation</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">I&apos;m Interested In *</label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="">Select an option</option>
                    <option value="1-on-1 Coaching">1-on-1 Coaching</option>
                    <option value="Group Mentorship">Group Mentorship</option>
                    <option value="Corporate Programs">Corporate Programs</option>
                    <option value="Community Membership">Community Membership</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
