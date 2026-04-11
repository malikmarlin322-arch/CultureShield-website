import WhyUs from "../components/WhyUs"
import Stats from "../components/Stats"
import Contact from "../components/Contact"

export default function WhyCultureShieldPage() {
  return (
    <div className="service-page">
      <section className="sp-hero">
        <div className="container">
          <div className="sp-hero-inner">
            <p className="eyebrow">Why CultureShield</p>
            <h1>
              The gap between janitorial service and{" "}
              <span className="accent-text">sterile lab support</span>.
            </h1>
            <p className="sp-hero-text">
              Most cleaning vendors treat the lab like another commercial
              space. CultureShield exists because tissue culture environments
              demand more — structured protocols, contamination awareness,
              and consistency your team can trust.
            </p>
            <div className="sp-hero-actions">
              <a href="/#contact" className="btn btn-primary">
                Schedule a Consultation
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="/services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <Stats />
      <Contact />
    </div>
  )
}
