import { Link, useParams } from "react-router-dom"
import { getServiceBySlug } from "../data/services"

export default function ServiceComingSoon() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <main className="service-coming-page">
        <section className="coming-soon-hero">
          <div className="container">
            <div className="coming-soon-shell">
              <p className="eyebrow">Service Page</p>
              <h1>Page not found.</h1>
              <p>
                The service page you requested is not available.
              </p>
              <div className="coming-soon-actions">
                <Link to="/" className="btn btn-primary">Back to homepage</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="service-coming-page">
      <section className="coming-soon-hero">
        <div className="container">
          <div className="coming-soon-shell">
            <p className="eyebrow">{service.tag}</p>
            <h1>{service.title}</h1>
            <p className="coming-soon-intro">{service.description}</p>

            <div className="coming-soon-badge">Details coming soon</div>

            <p className="coming-soon-copy">
              We are building out a dedicated page for this service with workflow,
              scope, and deliverable details. For now, contact CultureShield if you
              want to discuss whether this support fits your lab environment.
            </p>

            <div className="coming-soon-actions">
              <a href="/#contact" className="btn btn-primary">Contact CultureShield</a>
              <Link to="/#services" className="btn btn-secondary">View all services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
