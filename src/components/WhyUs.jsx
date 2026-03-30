import useScrollReveal from "../hooks/useScrollReveal"

const reasons = [
  {
    num: "01",
    title: "Designed for tissue culture, not office buildings",
    text: "Every protocol accounts for the unique contamination risks in tissue culture environments—from BSC sash rails to incubator water pans.",
  },
  {
    num: "02",
    title: "After-hours execution protects active experiments",
    text: "All work is performed outside active research hours so your team can focus on science without interruption or airflow disruption.",
  },
  {
    num: "03",
    title: "Contamination-conscious handling at every step",
    text: "We understand which surfaces carry risk, how cross-contamination spreads, and what sterile-adjacent practices actually require.",
  },
  {
    num: "04",
    title: "Documented visits support audit-readiness",
    text: "Timestamped task records and visit summaries create a clear operational paper trail for internal reviews and compliance documentation.",
  },
]

export default function WhyUs() {
  const headingRef = useScrollReveal({ threshold: 0.2 })
  const gridRef = useScrollReveal({ threshold: 0.1, stagger: 120 })

  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="section-heading scroll-reveal" ref={headingRef}>
          <p className="eyebrow reveal-item">Why CultureShield</p>
          <h2 className="reveal-item">The gap between janitorial service and sterile lab support is where contamination lives.</h2>
          <p className="section-intro reveal-item">
            Most cleaning vendors treat the lab like another commercial space.
            CultureShield exists because tissue culture environments demand more
            —structured protocols, contamination awareness, and consistency
            your team can trust.
          </p>
        </div>

        <div className="why-us-grid scroll-reveal" ref={gridRef}>
          {reasons.map((reason) => (
            <article className="why-card reveal-item" key={reason.num}>
              <div className="why-card-number">{reason.num}</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
