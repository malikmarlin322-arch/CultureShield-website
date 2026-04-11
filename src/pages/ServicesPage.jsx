import Services from "../components/Services"
import Contact from "../components/Contact"

export default function ServicesPage() {
  return (
    <div className="service-page">
      <section className="sp-hero">
        <div className="container">
          <div className="sp-hero-inner">
            <p className="eyebrow">Services</p>
            <h1>
              Contamination-control services built for{" "}
              <span className="accent-text">tissue culture labs</span>.
            </h1>
            <p className="sp-hero-text">
              Not generic cleaning. CultureShield services are designed to
              protect sterile workflows, reduce preventable contamination,
              and free scientists to focus on what matters.
            </p>
            <div className="sp-hero-actions">
              <a href="/#contact" className="btn btn-primary">
                Schedule a Consultation
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Contact />
    </div>
  )
}
