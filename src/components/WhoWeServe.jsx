import useScrollReveal from "../hooks/useScrollReveal"

const audiences = [
  {
    title: "Biotech Startups",
    text: "Early-stage teams that need structured contamination-control support without building an internal cleaning function from scratch.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2z"/>
      </svg>
    ),
  },
  {
    title: "University Research Labs",
    text: "Academic cell culture labs that need stronger consistency, better routines, and support that respects sensitive workflows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
      </svg>
    ),
  },
  {
    title: "Shared Lab Incubators & Co-Working Spaces",
    text: "Multi-tenant research environments where high equipment use and frequent personnel movement increase contamination risk.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/><circle cx="12" cy="14" r="2"/>
      </svg>
    ),
  },
  {
    title: "Cell Therapy & Translational Teams",
    text: "Programs operating in sensitive biological environments where process discipline, sterility awareness, and documentation matter most.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
]

export default function WhoWeServe() {
  const headingRef = useScrollReveal({ threshold: 0.2 })
  const gridRef = useScrollReveal({ threshold: 0.1, stagger: 100 })

  return (
    <section className="audiences" id="who-we-serve">
      <div className="container">
        <div className="section-heading centered scroll-reveal" ref={headingRef}>
          <p className="eyebrow reveal-item">Who We Serve</p>
          <h2 className="reveal-item">Built for teams where sterile workflows are non-negotiable.</h2>
          <p className="section-intro reveal-item">
            CultureShield is designed for labs where contamination control,
            equipment care, and operational consistency directly impact outcomes.
          </p>
        </div>

        <div className="audiences-grid scroll-reveal" ref={gridRef}>
          {audiences.map((audience) => (
            <article className="audience-card reveal-item" key={audience.title}>
              <div className="audience-icon">{audience.icon}</div>
              <div>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
