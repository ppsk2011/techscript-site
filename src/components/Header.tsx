import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container">
        <NavLink to="/" className="site-logo" aria-label="Techscript Limited — home">
          <span>Techscript</span> Limited
        </NavLink>
        <nav aria-label="Main navigation">
          <ul className="site-nav">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className={({ isActive }) => isActive ? 'active' : ''}>
                Privacy
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
