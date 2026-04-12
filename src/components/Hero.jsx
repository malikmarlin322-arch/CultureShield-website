import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import heroImg from "../assets/hero.png"

export default function Hero() {
  const copyRef = useRef(null)

  useEffect(() => {
    if (!copyRef.current) return
    const children = copyRef.current.querySelectorAll(".hero-anim")
    children.forEach((el, i) => {
      el.style.animationDelay = `${i * 140 + 100}ms`
      el.classList.add("hero-fade-in")
    })
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Scientist working in a biosafety cabinet" loading="eager" />
      </div>
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-copy" ref={copyRef}>
          <p className="eyebrow hero-anim">After-Hours Tissue Culture Lab Sanitation</p>

          <h1 className="hero-anim">
            Protect <span className="accent-text">sterile workflows</span> without
            pulling scientists away from experiments.
          </h1>

          <p className="hero-text hero-anim">
            CultureShield delivers after-hours contamination-control support
            for tissue culture environments. Scientifically informed protocols.
            Contamination-conscious execution. Documented every visit.
          </p>

          <div className="hero-actions hero-anim">
            <a href="#contact" className="btn btn-primary">
              Schedule a Consultation
              <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <Link
              to="/services"
              className="btn btn-secondary"
              onClick={() => window.scrollTo(0, 0)}
            >
              Explore Services
            </Link>
          </div>

          <div className="hero-badges hero-anim">
            <span className="hero-badge">
              <span className="badge-dot" />
              After-Hours Only
            </span>
            <span className="hero-badge">
              <span className="badge-dot" />
              Compliance-Ready Logs
            </span>
            <span className="hero-badge">
              <span className="badge-dot" />
              BSL-1 &amp; BSL-2 Environments
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
