import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logoImg from "../assets/CultureShield_Logo_4.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const scrollPosRef = useRef(0)

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

  /**
   * Bulletproof body scroll lock that works on iOS Safari.
   * Plain `overflow: hidden` is ignored by iOS — we have to pin the body
   * with `position: fixed` and restore scroll position on close.
   */
  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    if (menuOpen) {
      scrollPosRef.current = window.scrollY || window.pageYOffset || 0
      body.style.position = "fixed"
      body.style.top = `-${scrollPosRef.current}px`
      body.style.left = "0"
      body.style.right = "0"
      body.style.width = "100%"
      body.style.overflow = "hidden"
      html.style.overflow = "hidden"
    } else {
      const restore = scrollPosRef.current
      body.style.position = ""
      body.style.top = ""
      body.style.left = ""
      body.style.right = ""
      body.style.width = ""
      body.style.overflow = ""
      html.style.overflow = ""
      // Only restore if we actually have a position to restore (avoids initial jump)
      if (restore > 0) {
        window.scrollTo(0, restore)
      }
    }

    return () => {
      body.style.position = ""
      body.style.top = ""
      body.style.left = ""
      body.style.right = ""
      body.style.width = ""
      body.style.overflow = ""
      html.style.overflow = ""
    }
  }, [menuOpen])

  // Close on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

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
    <header className={`navbar${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
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
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 8h16"/><path d="M4 16h16"/></svg>
          )}
        </button>
      </div>

      {/* Backdrop — clicking it closes the menu and blocks page interaction */}
      <div
        className={`mobile-nav-backdrop${menuOpen ? " open" : ""}`}
        onClick={close}
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true"
      />

      {/* Slide-in nav panel */}
      <nav
        id="mobile-nav-panel"
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
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
