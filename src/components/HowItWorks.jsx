import useScrollReveal from "../hooks/useScrollReveal"

const steps = [
  {
    number: "1",
    title: "Discovery Call",
    text: "We discuss your lab environment, equipment footprint, and sanitation priorities to determine if CultureShield is the right fit.",
  },
  {
    number: "2",
    title: "Scope & Protocol",
    text: "A structured service scope is created outlining target areas, visit frequency, and contamination-sensitive considerations.",
  },
  {
    number: "3",
    title: "After-Hours Service",
    text: "Work is performed outside active research hours using contamination-conscious protocols designed for tissue culture spaces.",
  },
  {
    number: "4",
    title: "Visit Documentation",
    text: "Every visit includes a timestamped summary of completed tasks and observations to maintain full operational visibility.",
  },
]

export default function HowItWorks() {
  const headingRef = useScrollReveal({ threshold: 0.2 })
  const gridRef = useScrollReveal({ threshold: 0.1, stagger: 150 })

  return (
    <section className="how" id="how-it-works">
      <div className="container">
        <div className="section-heading centered scroll-reveal" ref={headingRef}>
          <p className="eyebrow reveal-item">How It Works</p>
          <h2 className="reveal-item">Simple, structured support built for active research labs.</h2>
          <p className="section-intro reveal-item">
            CultureShield engagements are intentionally straightforward. The
            focus is reducing contamination risk and maintaining consistency
            without disrupting your experiments.
          </p>
        </div>

        <div className="how-grid scroll-reveal" ref={gridRef}>
          {steps.map((step) => (
            <div className="how-step reveal-item" key={step.number}>
              <div className="how-number">{step.number}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
