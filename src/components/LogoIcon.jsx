export default function LogoIcon({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="www.linkedin.com/in/dyotacloud">
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00c6ff"/>
          <stop offset="100%" stopColor="#0055b3"/>
        </linearGradient>
        <linearGradient id="lg2" x1="22" y1="14" x2="22" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#bae6fd"/>
        </linearGradient>
      </defs>

      {/* Rounded square background */}
      <rect width="44" height="44" rx="11" fill="url(#lg1)"/>

      {/* Cloud shape */}
      <circle cx="18" cy="24" r="6"  fill="url(#lg2)"/>
      <circle cx="26" cy="24" r="6"  fill="url(#lg2)"/>
      <circle cx="22" cy="20" r="7"  fill="url(#lg2)"/>
      <rect   x="14" y="24" width="16" height="6" fill="url(#lg2)"/>

      {/* Upload arrow */}
      <path d="M22 28 L22 20 M19 23 L22 20 L25 23" stroke="#0070D2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Shine dot */}
      <circle cx="17" cy="19" r="1.5" fill="white" opacity="0.6"/>
    </svg>
  )
}
