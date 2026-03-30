import useScrollReveal from "../hooks/useScrollReveal"

export default function Founder() {
  const sectionRef = useScrollReveal({ threshold: 0.15, stagger: 100 })

  const items = [
    "Hands-on experience in biological lab environments",
    "Understanding of sterile workflow priorities and contamination vectors",
    "Attention to high-risk touchpoints specific to tissue culture",
    "Commitment to consistency, documentation, and operational rigor",
  ]

  return (
    <section className="founder" id="founder">
      <div className="container founder-grid scroll-reveal" ref={sectionRef}>
        <div className="founder-copy reveal-item">
          <p className="eyebrow">Founder Background</p>
          <h2>Built by someone who understands what's at stake in the lab.</h2>
          <p className="founder-text">
            CultureShield was created from direct experience working in
            biological lab settings where contamination control, sterile
            workflows, and attention to detail directly affect research
            outcomes.
          </p>
          <p className="founder-text">
            This isn't generic cleaning repositioned for biotech. It's
            structured, after-hours support designed from the ground up for
            tissue culture and contamination-sensitive environments—built by
            someone who has worked in them.
          </p>
        </div>

        <div className="founder-card reveal-item">
          <p className="founder-card-label">What this means in practice</p>
          <div className="founder-list">
            {items.map((item) => (
              <div className="founder-list-item" key={item}>
                <span className="founder-list-check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
