import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logoImg from "../assets/CultureShield_Logo_4.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()

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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const close = () => setMenuOpen(false)

  const handleGetStarted = (e) => {
    e.preventDefault()
    close()
    if (location.pathname === "/") {
      const el = document.getElementById("contact")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/#contact")
    }
  }

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
          <Link to="/services">Services</Link>
          <Link to="/why-cultureshield">Why CultureShield</Link>
          <Link to="/who-we-serve">Who We Serve</Link>
          <a href="/#contact" className="btn btn-primary navbar-cta" onClick={handleGetStarted}>
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

      {/* Mobile overlay backdrop */}
      <div
        className={`mobile-nav-overlay${menuOpen ? " open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <div className="mobile-nav-links">
          <Link to="/services" onClick={close}>Services</Link>
          <Link to="/why-cultureshield" onClick={close}>Why CultureShield</Link>
          <Link to="/who-we-serve" onClick={close}>Who We Serve</Link>
        </div>
        <a href="/#contact" className="btn btn-primary mobile-nav-cta" onClick={handleGetStarted}>
          Get Started
          <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </nav>
    </header>
  )
}
