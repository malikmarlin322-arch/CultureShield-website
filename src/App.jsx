import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import LabSterilityMaintenance from "./pages/LabSterilityMaintenance"
import ServiceComingSoon from "./pages/ServiceComingSoon"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/lab-sterility-maintenance" element={<LabSterilityMaintenance />} />
        <Route path="/services/:slug" element={<ServiceComingSoon />} />
      </Routes>
      <Footer />
    </>
  )
}
