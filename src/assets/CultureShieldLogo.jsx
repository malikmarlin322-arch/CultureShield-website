export default function CultureShieldLogo({ variant = "dark" }) {
  const textColor = variant === "light" ? "#FFFFFF" : "#0A1628"
  const subColor = variant === "light" ? "rgba(255,255,255,0.45)" : "#8494A7"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="190" aria-label="CultureShield logo">
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A1628"/>
          <stop offset="100%" stopColor="#0E3D6B"/>
        </linearGradient>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B4A0"/>
          <stop offset="100%" stopColor="#0090FF"/>
        </linearGradient>
        <clipPath id="hexClip">
          <polygon points="58,18 98,18 118,52 98,86 58,86 38,52"/>
        </clipPath>
      </defs>

      <polygon points="58,18 98,18 118,52 98,86 58,86 38,52" fill="url(#hexGrad)"/>
      <polygon points="58,18 98,18 118,52 98,86 58,86 38,52" fill="none" stroke="url(#arcGrad)" strokeWidth="2.5"/>

      <g clipPath="url(#hexClip)" opacity="0.12">
        <polygon points="78,30 88,30 93,38 88,46 78,46 73,38" fill="none" stroke="white" strokeWidth="1"/>
        <polygon points="58,38 68,38 73,46 68,54 58,54 53,46" fill="none" stroke="white" strokeWidth="1"/>
        <polygon points="88,46 98,46 103,54 98,62 88,62 83,54" fill="none" stroke="white" strokeWidth="1"/>
        <polygon points="68,54 78,54 83,62 78,70 68,70 63,62" fill="none" stroke="white" strokeWidth="1"/>
      </g>

      <g transform="translate(78,52)">
        <path d="M0,-22 A22,22 0 0,1 19,11" fill="none" stroke="url(#arcGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
        <path d="M19,11 A22,22 0 0,1 -19,11" fill="none" stroke="url(#arcGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.75"/>
        <path d="M-19,11 A22,22 0 0,1 0,-22" fill="none" stroke="url(#arcGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
        <circle cx="0" cy="0" r="5" fill="#00B4A0"/>
        <circle cx="0" cy="0" r="2.5" fill="white"/>
      </g>

      <text x="138" y="60" fontFamily="'Outfit','Trebuchet MS',sans-serif" fontSize="38" fontWeight="700" letterSpacing="-0.5">
        <tspan fill={textColor}>CULTURE</tspan>
        <tspan dx="3" fill="url(#arcGrad)">SHIELD</tspan>
      </text>

      <text x="139" y="84" fontFamily="'Outfit','Trebuchet MS',sans-serif" fontSize="10.5" fill={subColor} letterSpacing="3.5">
        BSL-1 · BSL-2 SANITATION SERVICES
      </text>

      <rect x="138" y="92" width="320" height="2" fill="url(#arcGrad)" rx="1" opacity="0.5"/>
    </svg>
  )
}
