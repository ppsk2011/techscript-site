import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <p>
          &copy; {year} Techscript Limited &mdash;{' '}
          <a href="https://techscript.ca" rel="noopener noreferrer">techscript.ca</a>
        </p>
      </div>
    </footer>
  )
}
