import WhoWeServe from "../components/WhoWeServe"
import Contact from "../components/Contact"

export default function WhoWeServePage() {
  return (
    <div className="service-page">
      <section className="sp-hero">
        <div className="container">
          <div className="sp-hero-inner">
            <p className="eyebrow">Who We Serve</p>
            <h1>
              Built for teams where{" "}
              <span className="accent-text">sterile workflows</span> are
              non-negotiable.
            </h1>
            <p className="sp-hero-text">
              CultureShield is designed for labs where contamination control,
              equipment care, and operational consistency directly impact
              outcomes.
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
      <WhoWeServe />
      <Contact />
    </div>
  )
}
