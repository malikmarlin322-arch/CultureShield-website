import { Link, useLocation, useNavigate } from "react-router-dom"
import logoImg from "../assets/CultureShield_Logo_4.png"
import { useMobileNav } from "../context/MobileNavContext"

/**
 * MobileNavDrawer
 * ---------------
 * Off-canvas left-side drawer for mobile navigation.
 *
 * Rendered as a sibling of the page-shell (NOT inside it) so the drawer stays
 * fixed to the viewport while the page shifts to the right behind the overlay.
 *
 * Layout:
 *   [ header: logo + close X ]
 *   [ nav: stacked links     ]
 *   [ footer: primary CTA    ]
 *
 * The drawer is hidden entirely on desktop (>= 901px) via CSS, so this
 * component is safe to mount at all viewport widths.
 */
export default function MobileNavDrawer() {
  const { isOpen, close } = useMobileNav()
  const location = useLocation()
  const navigate = useNavigate()

  // Get Started CTA — closes the drawer first, then scrolls/navigates.
  // The setTimeout lets the close animation finish before scroll begins,
  // which avoids a visible jump while the drawer is still sliding out.
  const handleGetStarted = (e) => {
    e.preventDefault()
    close()
    if (location.pathname === "/") {
      const el = document.getElementById("contact")
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 320)
      }
    } else {
      navigate("/#contact")
    }
  }

  return (
    <>
      {/* Backdrop overlay — clicking it closes the drawer.
          touch-action: none + onTouchMove preventDefault block scroll
          gestures from leaking through to the page below on iOS. */}
      <div
        className={`mobile-drawer-backdrop${isOpen ? " open" : ""}`}
        onClick={close}
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        id="mobile-nav-drawer"
        className={`mobile-drawer${isOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-drawer-header">
          <Link
            to="/"
            onClick={close}
            className="mobile-drawer-logo"
            aria-label="CultureShield home"
            tabIndex={isOpen ? 0 : -1}
          >
            <img src={logoImg} alt="CultureShield Sterility Solutions" />
          </Link>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={close}
            aria-label="Close navigation"
            tabIndex={isOpen ? 0 : -1}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Primary">
          <Link to="/" onClick={close} tabIndex={isOpen ? 0 : -1}>
            Home
          </Link>
          <Link to="/services" onClick={close} tabIndex={isOpen ? 0 : -1}>
            Services
          </Link>
          <Link to="/why-cultureshield" onClick={close} tabIndex={isOpen ? 0 : -1}>
            Why CultureShield
          </Link>
          <Link to="/who-we-serve" onClick={close} tabIndex={isOpen ? 0 : -1}>
            Who We Serve
          </Link>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="/#contact"
            className="btn btn-primary mobile-drawer-cta"
            onClick={handleGetStarted}
            tabIndex={isOpen ? 0 : -1}
          >
            Get Started
            <svg
              className="arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </aside>
    </>
  )
}
