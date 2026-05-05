import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import WhyCultureShieldPage from "./pages/WhyCultureShieldPage"
import WhoWeServePage from "./pages/WhoWeServePage"
import LabSterilityMaintenance from "./pages/LabSterilityMaintenance"
import ServiceComingSoon from "./pages/ServiceComingSoon"
import ScrollToTop from "./components/ScrollToTop"
import MobileNavDrawer from "./components/MobileNavDrawer"
import { MobileNavProvider, useMobileNav } from "./context/MobileNavContext"

/**
 * PageShell
 * ---------
 * Wraps the navbar + routed pages + footer. When the mobile drawer opens, this
 * shell receives the .drawer-open class and slides to the right via CSS, which
 * gives the "page pushes right while drawer slides in from left" effect.
 *
 * Importantly, the drawer and overlay are siblings of this shell (not children)
 * so they remain anchored to the viewport while the page slides.
 */
function PageShell() {
  const { isOpen } = useMobileNav()
  return (
    <div className={`page-shell${isOpen ? " drawer-open" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-cultureshield" element={<WhyCultureShieldPage />} />
        <Route path="/who-we-serve" element={<WhoWeServePage />} />
        <Route path="/services/lab-sterility-maintenance" element={<LabSterilityMaintenance />} />
        <Route path="/services/:slug" element={<ServiceComingSoon />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <MobileNavProvider>
      <ScrollToTop />
      <PageShell />
      <MobileNavDrawer />
    </MobileNavProvider>
  )
}
