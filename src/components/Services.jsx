import { Link } from "react-router-dom"
import useScrollReveal from "../hooks/useScrollReveal"
import { services } from "../data/services"

const servicesWithIcons = [
  {
    ...services[0],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
      </svg>
    ),
  },
  {
    ...services[1],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-3-3v6"/><rect x="3" y="3" width="18" height="18" rx="3"/>
      </svg>
    ),
  },
  {
    ...services[2],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    ...services[3],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4m0 4h.01"/>
      </svg>
    ),
  },
  {
    ...services[4],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/>
      </svg>
    ),
  },
  {
    ...services[5],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8m8 4H8m2-8H8"/>
      </svg>
    ),
  },
]

export default function Services() {
  const headingRef = useScrollReveal({ threshold: 0.2 })
  const gridRef = useScrollReveal({ threshold: 0.1, stagger: 100 })

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading centered scroll-reveal" ref={headingRef}>
          <p className="eyebrow reveal-item">Services</p>
          <h2 className="reveal-item">Specialized support for contamination-sensitive lab environments.</h2>
          <p className="section-intro reveal-item">
            Not generic cleaning. CultureShield services are built to protect
            sterile workflows, reduce preventable contamination, and free
            scientists to focus on what matters.
          </p>
        </div>

        <div className="services-grid scroll-reveal" ref={gridRef}>
          {servicesWithIcons.map((service) => (
            <Link key={service.title} to={service.href} className="service-card service-card-link reveal-item">
              <div className="service-icon">{service.icon}</div>
              <div className="service-tag">{service.tag}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card-arrow">
                {service.comingSoon ? "Details coming soon" : "Learn more"}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
