import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/login', label: 'Login' },
  { to: '/signup', label: 'Sign Up' },
]

const CTA_LINK = { to: '/my-reservations', label: 'My Reservations' }

const Header = () => (
  <header className="site-header">
    <div className="brand-block">
      <span className="brand-overline">Restaurant</span>
      <h1 className="brand-title">
        Sabor da Terra
        <span className="brand-subtitle">Northeastern Kitchen</span>
      </h1>
    </div>
    <nav className="main-nav" aria-label="Primary navigation">
      {NAV_LINKS.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          end={end}
        >
          {label}
        </NavLink>
      ))}
    </nav>
    <NavLink
      to={CTA_LINK.to}
      className={({ isActive }) => `nav-cta${isActive ? ' active' : ''}`}
    >
      {CTA_LINK.label}
    </NavLink>
  </header>
)

export default Header
