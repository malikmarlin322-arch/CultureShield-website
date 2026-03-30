import { useEffect, useRef } from "react"

/**
 * useScrollReveal — IntersectionObserver-powered scroll reveal.
 *
 * Adds `.revealed` to the ref element when it enters the viewport,
 * then disconnects (fires once). Children with `.reveal-item` get
 * staggered delays automatically.
 *
 * @param {object} opts
 * @param {number} opts.threshold  – visibility ratio to trigger (0-1)
 * @param {string} opts.rootMargin – observer margin
 * @param {number} opts.stagger    – ms between child delays
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  stagger = 80,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      el.classList.add("revealed")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger children with .reveal-item
          const items = el.querySelectorAll(".reveal-item")
          items.forEach((child, i) => {
            child.style.transitionDelay = `${i * stagger}ms`
          })
          el.classList.add("revealed")
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, stagger])

  return ref
}
