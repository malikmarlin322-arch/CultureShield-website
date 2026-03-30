import { useState } from "react"
import useScrollReveal from "../hooks/useScrollReveal"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useScrollReveal({ threshold: 0.1, stagger: 120 })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with actual form handler (e.g., Formspree, Netlify Forms)
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-wrapper scroll-reveal" ref={sectionRef}>
        <div className="contact-copy reveal-item">
          <p className="eyebrow">Get Started</p>
          <h2>Let's discuss your lab's sanitation needs.</h2>
          <p className="contact-text">
            Whether you're setting up a new tissue culture space or replacing
            an existing cleaning vendor, we'll scope a plan built around your
            lab's specific environment and contamination-risk profile.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span>hello@cultureshield.co</span>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <span>Typical response within 24 hours</span>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span>Serving the greater Bay Area</span>
            </div>
          </div>
        </div>

        <div className="contact-form reveal-item">
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--teal-50)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: 8, color: "var(--navy-900)" }}>
                Message received
              </h3>
              <p style={{ color: "var(--gray-500)", lineHeight: 1.6 }}>
                We'll review your inquiry and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Dr. Jane Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" placeholder="jane@lab.edu" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="org">Organization</label>
                <input type="text" id="org" placeholder="Company or university name" />
              </div>

              <div className="form-group">
                <label htmlFor="type">Lab Type</label>
                <select id="type" defaultValue="">
                  <option value="" disabled>Select your lab environment</option>
                  <option>Biotech startup</option>
                  <option>University research lab</option>
                  <option>Shared lab / incubator space</option>
                  <option>Cell therapy / translational</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your lab environment and what kind of support you're looking for..."
                  rows="4"
                />
              </div>

              <button type="submit" className="btn btn-accent" style={{ width: "100%" }}>
                Submit Inquiry
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
