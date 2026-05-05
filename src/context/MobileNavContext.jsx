import { createContext, useContext, useState, useEffect, useRef, useCallback } from "react"
import { useLocation } from "react-router-dom"

/**
 * MobileNavContext
 * ----------------
 * Single source of truth for the mobile off-canvas drawer state.
 *
 * Why a context?
 * The drawer panel is rendered at the App level (outside the page-shell that
 * shifts to the right) while the hamburger button lives inside <Navbar />,
 * which IS inside the page-shell. Both need to share open/close state, so we
 * lift it once and consume it from both places via this context.
 *
 * Side-effects owned by this provider:
 *   1. Body scroll lock while the drawer is open (iOS-safe technique:
 *      position:fixed on body + restore scrollY on close).
 *   2. Auto-close on route change.
 *   3. Auto-close on Escape key.
 *   4. Auto-close when the viewport widens past the mobile breakpoint
 *      (e.g. user rotates their device or resizes the browser).
 */
const MobileNavContext = createContext(null)

const MOBILE_BREAKPOINT = 900 // matches CSS @media (max-width: 900px)

export function MobileNavProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const scrollPosRef = useRef(0)
  const location = useLocation()

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  // ---- Body scroll lock (iOS Safari–safe) -----------------------------------
  // Plain `overflow: hidden` is ignored by iOS Safari. Pinning the body with
  // `position: fixed` and restoring scroll on close is the only reliable way.
  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    if (isOpen) {
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
      // Only restore if we actually had a scroll position (avoids initial jump)
      if (restore > 0) {
        window.scrollTo(0, restore)
      }
    }

    // Always reset on unmount in case provider unmounts mid-open
    return () => {
      body.style.position = ""
      body.style.top = ""
      body.style.left = ""
      body.style.right = ""
      body.style.width = ""
      body.style.overflow = ""
      html.style.overflow = ""
    }
  }, [isOpen])

  // ---- Close on route change -----------------------------------------------
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // ---- Close on Escape -----------------------------------------------------
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen])

  // ---- Close on resize past mobile breakpoint -------------------------------
  // If a user rotates a tablet or resizes the desktop window, we shouldn't
  // leave the drawer stranded open in a desktop layout.
  useEffect(() => {
    if (!isOpen) return
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setIsOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [isOpen])

  return (
    <MobileNavContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </MobileNavContext.Provider>
  )
}

export function useMobileNav() {
  const ctx = useContext(MobileNavContext)
  if (!ctx) {
    throw new Error("useMobileNav must be used within <MobileNavProvider>")
  }
  return ctx
}
