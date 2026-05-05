import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logoImg from "../assets/CultureShield_Logo_4.png"
import { useMobileNav } from "../context/MobileNavContext"

/**
 * Navbar
 * ------
 * Renders the top navigation bar. On desktop (>= 901px) it shows full inline
 * links + the Get Started CTA. On mobile (<= 900px) it shows just the logo
 * and a hamburger button which toggles the off-canvas drawer.
 *
 * The drawer panel itself is NOT rendered here — it lives in <MobileNavDrawer />
 * at the App root. Drawer state is shared via <MobileNavProvider>.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const { isOpen, toggle, close } = useMobileNav()

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
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </nav>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={toggle}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
        >
          {/* Always show the hamburger icon — the close X lives inside the
              drawer itself, and the navbar shifts off-screen when the drawer
              is open so a swap here would be invisible anyway. */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 8h16"/><path d="M4 16h16"/>
          </svg>
        </button>
      </div>
    </header>
  )
}
