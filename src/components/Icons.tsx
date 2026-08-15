// Lightweight hand-authored inline SVG icons — no external icon library
// dependency needed (keeps bundle small, no network install required).
type IconProps = { size?: number; className?: string }

export const PhoneIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1C10.6 21 3 13.4 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.6a1 1 0 01-.25 1l-2.2 2.2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export const MailIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3.5 6.5l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SearchIcon = ({ size = 18, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

export const CartIcon = ({ size = 18, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h7.5a2 2 0 002-1.6L21 8H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="21" r="1.3" fill="currentColor"/>
    <circle cx="17" cy="21" r="1.3" fill="currentColor"/>
  </svg>
)

export const HeartIcon = ({ size = 18, className, filled = false }: IconProps & { filled?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} className={className} aria-hidden="true">
    <path d="M12 20.5s-7.5-4.7-9.8-9.4C.6 7.6 2.2 4 5.7 4c2 0 3.3 1 4.3 2.4C11 5 12.3 4 14.3 4c3.5 0 5.1 3.6 3.5 7.1C20.5 15.8 12 20.5 12 20.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export const UserIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4.5 20c1.4-3.5 4.2-5.5 7.5-5.5s6.1 2 7.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

export const ChevronDownIcon = ({ size = 12, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const MenuIcon = ({ size = 22, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const CloseIcon = ({ size = 22, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const StarIcon = ({ size = 16, className, filled = true }: IconProps & { filled?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} className={className} aria-hidden="true">
    <path d="M12 2.5l2.9 6 6.6.7-4.9 4.5 1.3 6.5L12 16.9 6.1 20.2l1.3-6.5L2.5 9.2l6.6-.7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
)

export const ArrowRightIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const BookIcon = ({ size = 28, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 014 18.5v-13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 001.5-1.5v-13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export const LayersIcon = ({ size = 28, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 9.5h16M4 14.5h16" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)

export const TrendingIcon = ({ size = 28, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ClockIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

export const CommentIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 5h16v10H8l-4 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export const FacebookIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5H16.6V4.2C16.3 4.1 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.4H7.7v3h2.6V21h3.2z"/>
  </svg>
)

export const InstagramIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
)

export const TwitterIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2.1 2.8 3.9 2.8A8.2 8.2 0 012 18.6a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/>
  </svg>
)

export const YoutubeIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="2.5" y="5.5" width="19" height="13" rx="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor"/>
  </svg>
)
