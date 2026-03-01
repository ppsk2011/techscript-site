import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span>Techscript</span> Limited
            </Link>
            <p>
              Building practical utility apps and software for everyday use.
              Based in Canada, shipping worldwide.
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Our Tools</h4>
              <ul>
                <li><a href="https://readswift.techscript.ca" target="_blank" rel="noopener noreferrer">ReadSwift</a></li>
                <li><a href="https://shrinkit.techscript.ca" target="_blank" rel="noopener noreferrer">ShrinkIt</a></li>
                <li><a href="https://pdf-tools.techscript.ca" target="_blank" rel="noopener noreferrer">PDF Tools</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {year} Techscript Limited &mdash;{' '}
            <a href="https://techscript.ca" rel="noopener noreferrer">techscript.ca</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
