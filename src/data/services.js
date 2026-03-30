export const services = [
  {
    tag: "Recurring Support",
    title: "Nightly Lab Sterility Maintenance",
    description:
      "Scheduled after-hours sanitation for tissue culture spaces, high-touch surfaces, shared equipment exteriors, and contamination-sensitive work areas.",
    href: "/services/lab-sterility-maintenance",
    slug: "lab-sterility-maintenance",
    comingSoon: false,
  },
  {
    tag: "Critical Workspace",
    title: "Biosafety Cabinet Decontamination",
    description:
      "Structured wipe-down protocols for BSC surfaces and adjacent sterile work zones, performed with contamination-conscious handling and proper technique.",
    href: "/services/biosafety-cabinet-decontamination",
    slug: "biosafety-cabinet-decontamination",
    comingSoon: true,
  },
  {
    tag: "Equipment Care",
    title: "CO₂ Incubator Deep Cleaning",
    description:
      "Interior cleaning, tray sanitation, and contamination-risk reduction for incubators used in active cell culture workflows.",
    href: "/services/co2-incubator-deep-cleaning",
    slug: "co2-incubator-deep-cleaning",
    comingSoon: true,
  },
  {
    tag: "Emergency Service",
    title: "Contamination Event Response",
    description:
      "Rapid-response after-hours cleaning for contamination events, with clear documentation and incident-conscious execution protocols.",
    href: "/services/contamination-event-response",
    slug: "contamination-event-response",
    comingSoon: true,
  },
  {
    tag: "Launch Support",
    title: "New Lab Setup Sterilization",
    description:
      "Pre-opening cleaning and readiness support for new lab suites, startup spaces, and newly occupied research environments.",
    href: "/services/new-lab-setup-sterilization",
    slug: "new-lab-setup-sterilization",
    comingSoon: true,
  },
  {
    tag: "Documentation",
    title: "Visit Logs & Task Records",
    description:
      "Timestamped visit summaries and task records that support consistency, visibility, and audit-readiness across your operations.",
    href: "/services/visit-logs-and-task-records",
    slug: "visit-logs-and-task-records",
    comingSoon: true,
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
