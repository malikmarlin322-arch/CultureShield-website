import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import logoImg from "../assets/CultureShield_Logo_4.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
      setScrollProgress(Math.min(progress, 100))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const close = () => setMenuOpen(false)
  const sectionHref = (hash) => isHome ? hash : `/${hash}`

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={close} aria-label="Go to CultureShield homepage">
          <img
            src={logoImg}
            alt="CultureShield Sterility Solutions"
            className="navbar-logo-img"
          />
        </Link>

        <nav className="navbar-links">
          <a href={sectionHref("#services")}>Services</a>
          <a href={sectionHref("#why-us")}>Why Us</a>
          <a href={sectionHref("#how-it-works")}>How It Works</a>
          <a href={sectionHref("#who-we-serve")}>Who We Serve</a>
          <a href={sectionHref("#contact")} className="btn btn-primary navbar-cta">
            Get Started
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 8h16"/><path d="M4 16h16"/></svg>
          )}
        </button>
      </div>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <a href={sectionHref("#services")} onClick={close}>Services</a>
        <a href={sectionHref("#why-us")} onClick={close}>Why Us</a>
        <a href={sectionHref("#how-it-works")} onClick={close}>How It Works</a>
        <a href={sectionHref("#who-we-serve")} onClick={close}>Who We Serve</a>
        <a href={sectionHref("#founder")} onClick={close}>Founder</a>
        <a href={sectionHref("#contact")} className="btn btn-primary" onClick={close}>
          Get Started
        </a>
      </nav>
    </header>
  )
}
