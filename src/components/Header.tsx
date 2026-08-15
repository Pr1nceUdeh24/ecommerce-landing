import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggleMobileMenu, closeMobileMenu, toggleWishlistItem } from '../features/ui/uiSlice'
import { SearchIcon, CartIcon, HeartIcon, UserIcon, ChevronDownIcon, MenuIcon, CloseIcon } from './Icons'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop', hasDropdown: true },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Pages', href: '#pages', hasDropdown: true },
]

export default function Header() {
  const dispatch = useAppDispatch()
  const { mobileMenuOpen, cartCount, wishlistCount } = useAppSelector((s) => s.ui)

  return (
    <header className="header" id="home">
      <div className="container header__inner">
        <a href="#home" className="header__logo">Bandage</a>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => dispatch(closeMobileMenu())}>
                  {link.label}
                  {link.hasDropdown && <ChevronDownIcon />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#login" className="header__login">
            <UserIcon />
            <span>Login / Register</span>
          </a>

          <button className="header__icon-btn" aria-label="Search">
            <SearchIcon />
          </button>

          <button
            className="header__icon-btn header__icon-btn--badge"
            aria-label="Wishlist"
            onClick={() => dispatch(toggleWishlistItem())}
          >
            <HeartIcon />
            {wishlistCount > 0 && <span className="header__badge">{wishlistCount}</span>}
          </button>

          <button className="header__icon-btn header__icon-btn--badge" aria-label="Cart">
            <CartIcon />
            {cartCount > 0 && <span className="header__badge">{cartCount}</span>}
          </button>

          <button
            className="header__menu-toggle"
            aria-label="Toggle menu"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
