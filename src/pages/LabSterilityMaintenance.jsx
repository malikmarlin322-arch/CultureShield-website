import { Link } from "react-router-dom"
import useScrollReveal from "../hooks/useScrollReveal"

const workflow = [
  {
    step: "1",
    title: "Site Assessment",
    text: "We evaluate your tissue culture space — equipment layout, high-touch surfaces, airflow paths, and contamination-risk zones — to design a protocol specific to your lab.",
  },
  {
    step: "2",
    title: "Custom Protocol Design",
    text: "A structured sanitation scope is built around your lab's unique environment, including target surfaces, cleaning agents, sequencing, and frequency.",
  },
  {
    step: "3",
    title: "After-Hours Execution",
    text: "All work is performed outside active research hours using contamination-conscious techniques — protecting experiments, airflow, and sterile integrity.",
  },
  {
    step: "4",
    title: "Documentation & Reporting",
    text: "Every visit produces a timestamped log of completed tasks, observations, and any flagged anomalies — ready for internal reviews or compliance audits.",
  },
]

const included = [
  {
    title: "Benchtop & Surface Sanitation",
    text: "Systematic cleaning of lab benches, shared surfaces, and sterile-adjacent work zones with contamination-conscious handling.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12h6m-3-3v6"/>
      </svg>
    ),
  },
  {
    title: "BSC Exterior Wipe-Down",
    text: "Structured decontamination of biosafety cabinet exteriors, sash rails, and surrounding sterile work zones.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: "High-Touch Point Treatment",
    text: "Targeted sanitation of door handles, equipment controls, shared pipettes, and other frequently contacted surfaces.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
      </svg>
    ),
  },
  {
    title: "Floor & Entry Protocols",
    text: "Lab floor sanitation and entry zone cleaning to reduce tracked-in particulate and microbial load from adjacent corridors.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/>
      </svg>
    ),
  },
  {
    title: "Equipment Exterior Care",
    text: "Exterior cleaning of incubators, centrifuges, water baths, and other shared equipment within the tissue culture suite.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    title: "Visit Documentation",
    text: "Timestamped task records, observation notes, and service summaries delivered after every visit for full operational transparency.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8m8 4H8m2-8H8"/>
      </svg>
    ),
  },
]

const labTypes = [
  "Biotech startup tissue culture suites",
  "University and academic cell culture labs",
  "Shared lab incubators and co-working spaces",
  "Cell therapy and translational research environments",
  "GMP-adjacent and quality-sensitive facilities",
]

export default function LabSterilityMaintenance() {
  const heroRef = useScrollReveal({ threshold: 0.1 })
  const workflowHeadRef = useScrollReveal({ threshold: 0.2 })
  const workflowGridRef = useScrollReveal({ threshold: 0.1, stagger: 150 })
  const includedHeadRef = useScrollReveal({ threshold: 0.2 })
  const includedGridRef = useScrollReveal({ threshold: 0.1, stagger: 100 })
  const envRef = useScrollReveal({ threshold: 0.15, stagger: 80 })
  const afterHoursRef = useScrollReveal({ threshold: 0.15, stagger: 100 })
  const ctaRef = useScrollReveal({ threshold: 0.2 })

  return (
    <main className="service-page">
      {/* Hero */}
      <section className="sp-hero">
        <div className="container">
          <div className="sp-hero-inner scroll-reveal" ref={heroRef}>
            <div className="sp-breadcrumb reveal-item">
              <Link to="/">Home</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="m9 6 6 6-6 6"/></svg>
              <Link to="/#services">Services</Link>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="m9 6 6 6-6 6"/></svg>
              <span>Lab Sterility Maintenance</span>
            </div>
            <p className="eyebrow reveal-item">Recurring Support</p>
            <h1 className="reveal-item">
              Nightly Lab Sterility<br />
              <span className="accent-text">Maintenance</span>
            </h1>
            <p className="sp-hero-text reveal-item">
              Scheduled after-hours sanitation designed specifically for tissue
              culture environments. Consistent protocols. Contamination-conscious
              execution. Documented every visit.
            </p>
            <div className="sp-hero-actions reveal-item">
              <a href="/#contact" className="btn btn-primary">
                Schedule a Consultation
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="/#how-it-works" className="btn btn-secondary">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How the service works */}
      <section className="sp-workflow">
        <div className="container">
          <div className="section-heading centered scroll-reveal" ref={workflowHeadRef}>
            <p className="eyebrow reveal-item">Service Process</p>
            <h2 className="reveal-item">How Lab Sterility Maintenance works.</h2>
            <p className="section-intro reveal-item">
              Every engagement follows a structured process — from initial
              assessment to ongoing documentation — designed to reduce
              contamination risk without disrupting your research.
            </p>
          </div>

          <div className="sp-workflow-grid scroll-reveal" ref={workflowGridRef}>
            {workflow.map((item) => (
              <div className="sp-workflow-step reveal-item" key={item.step}>
                <div className="sp-workflow-num">{item.step}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="sp-included">
        <div className="container">
          <div className="section-heading centered scroll-reveal" ref={includedHeadRef}>
            <p className="eyebrow reveal-item">What's Included</p>
            <h2 className="reveal-item">Comprehensive, protocol-driven lab sanitation.</h2>
            <p className="section-intro reveal-item">
              Each visit covers every contamination-sensitive surface and
              high-risk touchpoint in your tissue culture environment.
            </p>
          </div>

          <div className="sp-included-grid scroll-reveal" ref={includedGridRef}>
            {included.map((item) => (
              <div className="sp-included-card reveal-item" key={item.title}>
                <div className="sp-included-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal lab environments */}
      <section className="sp-environments">
        <div className="container">
          <div className="sp-env-grid scroll-reveal" ref={envRef}>
            <div className="sp-env-copy reveal-item">
              <p className="eyebrow">Ideal Environments</p>
              <h2>Built for labs where sterile workflows are non-negotiable.</h2>
              <p>
                Lab Sterility Maintenance is designed for any tissue culture
                environment where contamination control, consistency, and
                operational accountability directly impact research outcomes.
              </p>
            </div>
            <div className="sp-env-list reveal-item">
              {labTypes.map((type) => (
                <div className="sp-env-item" key={type}>
                  <span className="sp-env-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why after-hours */}
      <section className="sp-after-hours">
        <div className="container">
          <div className="sp-ah-inner scroll-reveal" ref={afterHoursRef}>
            <div className="sp-ah-copy reveal-item">
              <p className="eyebrow">Why After-Hours</p>
              <h2>Sanitation that never disrupts active research.</h2>
              <p>
                All Lab Sterility Maintenance work is performed outside active
                research hours — protecting experiments in progress, reducing
                airflow disruption from foot traffic, and giving your team
                a clean, organized environment to walk into every morning.
              </p>
              <p>
                After-hours execution isn't just convenient — it's a deliberate
                contamination-control measure. Reducing personnel overlap in
                sterile spaces means fewer vectors, fewer risks, and more
                consistent outcomes.
              </p>
            </div>
            <div className="sp-ah-highlights reveal-item">
              <div className="sp-ah-card">
                <h4>Zero Workflow Interruption</h4>
                <p>Your scientists never have to pause experiments or share space with cleaning teams.</p>
              </div>
              <div className="sp-ah-card">
                <h4>Reduced Cross-Contamination</h4>
                <p>Fewer personnel in the lab means fewer contamination vectors during critical work hours.</p>
              </div>
              <div className="sp-ah-card">
                <h4>Morning-Ready Environment</h4>
                <p>Every surface cleaned, documented, and ready before your team starts the next day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <div className="container">
          <div className="sp-cta-inner scroll-reveal" ref={ctaRef}>
            <p className="eyebrow reveal-item">Get Started</p>
            <h2 className="reveal-item">Ready to protect your lab's sterile integrity?</h2>
            <p className="reveal-item">
              Let's discuss your tissue culture environment and build a
              maintenance protocol that fits your lab's unique needs.
            </p>
            <div className="sp-cta-actions reveal-item">
              <a href="/#contact" className="btn btn-accent">
                Schedule a Consultation
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <Link to="/" className="btn btn-secondary">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
