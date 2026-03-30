import { Link } from "react-router-dom"
import logoImg from "../assets/CultureShield_Logo_4.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Go to CultureShield homepage">
              <img
                src={logoImg}
                alt="CultureShield Sterility Solutions"
                className="footer-logo-img"
              />
            </Link>
            <p>
              Keep your tissue culture environment clean, controlled, and ready
              for work. Get in contact with CultureShield today to discuss your
              lab&apos;s sterility maintenance needs.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/services/lab-sterility-maintenance">Lab Sterility Maintenance</Link>
            <Link to="/services/biosafety-cabinet-decontamination">BSC Decontamination</Link>
            <Link to="/services/co2-incubator-deep-cleaning">Incubator Deep Cleaning</Link>
            <Link to="/services/contamination-event-response">Contamination Response</Link>
            <Link to="/services/new-lab-setup-sterilization">New Lab Setup</Link>
            <Link to="/services/visit-logs-and-task-records">Visit Documentation</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="/#why-us">Why CultureShield</a>
            <a href="/#how-it-works">How It Works</a>
            <a href="/#who-we-serve">Who We Serve</a>
            <a href="/#founder">Founder</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@cultureshield.co">hello@cultureshield.co</a>
            <a href="/#contact">Schedule a Consultation</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} CultureShield. All rights reserved.</span>
          <span>BSL-1 &middot; BSL-2 Sanitation Services</span>
        </div>
      </div>
    </footer>
  )
}
