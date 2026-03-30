import { useState, useEffect, useRef } from "react"

const stats = [
  { value: "100%", label: "After-Hours Service", numericEnd: 100, suffix: "%", prefix: "" },
  { value: "BSL-1/2", label: "Lab Environments", text: "BSL-1/2" },
  { value: "24hr", label: "Emergency Response", numericEnd: 24, suffix: "hr", prefix: "" },
  { value: "Every", label: "Visit Documented", text: "Every" },
]

function AnimatedValue({ stat }) {
  const [display, setDisplay] = useState(stat.text || "0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setDisplay(stat.text || `${stat.prefix || ""}${stat.numericEnd}${stat.suffix || ""}`)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          observer.disconnect()

          // If text-only stat (no counter), just reveal
          if (stat.text) {
            setDisplay(stat.text)
            return
          }

          // Animate number
          const duration = 1400
          const start = performance.now()
          const end = stat.numericEnd

          function tick(now) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * end)
            setDisplay(`${stat.prefix || ""}${current}${stat.suffix || ""}`)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated, stat])

  return (
    <div className="stat-item" ref={ref}>
      <h3>{display}</h3>
      <p>{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <AnimatedValue key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
