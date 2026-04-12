import { useState } from "react"
import useScrollReveal from "../hooks/useScrollReveal"

/**
 * Contact form — submits to Formspree.
 *
 * SETUP REQUIRED (see CONTACT_FORM_SETUP.md for full instructions):
 *   1. Create a free Formspree account at https://formspree.io
 *   2. Create a new form, set the receiving email to hello@cultureshieldlabs.com
 *   3. Copy the form's endpoint (e.g. https://formspree.io/f/abcdwxyz)
 *   4. In Vercel, add an environment variable:
 *        VITE_FORMSPREE_ENDPOINT = https://formspree.io/f/abcdwxyz
 *      (Or replace the FORM_ENDPOINT_FALLBACK constant below directly.)
 *
 * No backend code or serverless function is required.
 */

const FORM_ENDPOINT_FALLBACK = "https://formspree.io/f/REPLACE_WITH_YOUR_ID"
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || FORM_ENDPOINT_FALLBACK

export default function Contact() {
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("")
  const sectionRef = useScrollReveal({ threshold: 0.1, stagger: 120 })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMsg("")

    const form = e.currentTarget
    const formData = new FormData(form)

    // Subject line that will appear in the inbox at hello@cultureshieldlabs.com
    formData.append("_subject", `New inquiry from ${formData.get("name") || "website visitor"}`)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        const data = await response.json().catch(() => ({}))
        const message =
          data?.errors?.map((err) => err.message).join(", ") ||
          "Something went wrong. Please try again, or email us directly."
        setStatus("error")
        setErrorMsg(message)
      }
    } catch (err) {
      setStatus("error")
      setErrorMsg("Network error. Please try again, or email us directly at hello@cultureshieldlabs.com.")
    }
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
              <a href="mailto:hello@cultureshieldlabs.com" className="contact-info-link">hello@cultureshieldlabs.com</a>
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
          {status === "success" ? (
            <div className="form-status form-status-success">
              <div className="form-status-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3>Message received</h3>
              <p>
                Thanks for reaching out — we'll review your inquiry and respond within 24 hours at the email you provided.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot field for basic bot protection (Formspree convention) */}
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Dr. Jane Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" placeholder="jane@lab.edu" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="org">Organization</label>
                <input type="text" id="org" name="organization" placeholder="Company or university name" />
              </div>

              <div className="form-group">
                <label htmlFor="type">Lab Type</label>
                <select id="type" name="lab_type" defaultValue="" required>
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
                  name="message"
                  placeholder="Tell us about your lab environment and what kind of support you're looking for..."
                  rows="4"
                  required
                />
              </div>

              {status === "error" && (
                <div className="form-status form-status-error" role="alert">
                  <p>{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-accent contact-submit-btn"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Submit Inquiry"}
                {status !== "submitting" && (
                  <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
