import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const tools = [
  {
    name: 'ReadSwift',
    url: 'https://readswift.techscript.ca',
    displayUrl: 'readswift.techscript.ca',
    icon: '📖',
    iconBg: '#eff6ff',
    colorA: '#2563eb',
    colorB: '#0ea5e9',
    description:
      'A fast, distraction-free reading experience for articles, documents, and web content. ReadSwift enhances focus with clean typography, adjustable reading speed, and a clutter-free interface — perfect for students, researchers, and avid readers.',
    features: ['Speed Reading', 'Dark Mode', 'Text-to-Speech', 'Distraction-Free'],
  },
  {
    name: 'ShrinkIt',
    url: 'https://shrinkit.techscript.ca',
    displayUrl: 'shrinkit.techscript.ca',
    icon: '🔗',
    iconBg: '#f0fdf4',
    colorA: '#16a34a',
    colorB: '#0d9488',
    description:
      'A powerful yet simple URL shortener and link management tool. Turn long, unwieldy links into clean, shareable short URLs in seconds. Track click analytics, organise links, and share them confidently — built for everyday use.',
    features: ['URL Shortening', 'Click Analytics', 'Custom Aliases', 'Link Management'],
  },
  {
    name: 'PDF Tools',
    url: 'https://pdf-tools.techscript.ca',
    displayUrl: 'pdf-tools.techscript.ca',
    icon: '📄',
    iconBg: '#fef2f2',
    colorA: '#dc2626',
    colorB: '#ea580c',
    description:
      'A comprehensive online PDF utility suite that handles everything PDF. Merge multiple files, split large documents, compress file sizes, convert to and from popular formats, and more — all in your browser with no software to install.',
    features: ['Merge & Split', 'Compress', 'Convert', 'Edit & Annotate'],
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Techscript Limited — Utility Apps & Software Development"
        description="Techscript Limited builds everyday utility apps and tools. Explore ReadSwift, ShrinkIt, PDF Tools, and more — built in Canada."
        url="https://techscript.ca/"
      />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <h1 id="hero-heading">
            Everyday tools,<br />
            <span>beautifully engineered</span>
          </h1>
          <p>
            Techscript Limited builds practical utility apps and web tools that
            people reach for every day. Simple, fast, and reliable —
            made in Canada, used worldwide.
          </p>
          <div className="hero-actions">
            <a href="#tools" className="btn btn-primary">
              Explore our tools
            </a>
            <Link to="/contact" className="btn btn-outline">
              Work with us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Tools ──────────────────────────────────────────── */}
      <section className="page-section" id="tools" aria-labelledby="tools-heading">
        <div className="container">
          <span className="section-heading">Our Products</span>
          <h2 id="tools-heading">Tools built for everyday life</h2>
          <p>
            Each product solves a real problem — no bloat, no subscriptions, no
            friction. Just open and use.
          </p>
          <div className="tool-cards">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-card"
                style={{ '--tool-color-a': tool.colorA, '--tool-color-b': tool.colorB } as React.CSSProperties}
                aria-label={`${tool.name} — ${tool.displayUrl}`}
              >
                <div className="tool-card-header">
                  <div className="tool-card-icon" style={{ background: tool.iconBg }}>
                    {tool.icon}
                  </div>
                  <div>
                    <div className="tool-card-name">{tool.name}</div>
                    <div className="tool-card-url">{tool.displayUrl}</div>
                  </div>
                </div>
                <p className="tool-card-desc">{tool.description}</p>
                <ul className="tool-card-features" aria-label="Features">
                  {tool.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <span className="tool-card-link">
                  Open {tool.name} <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we do ─────────────────────────────────────────── */}
      <section className="page-section section-alt" aria-labelledby="services-heading">
        <div className="container">
          <span className="section-heading">Services</span>
          <h2 id="services-heading">What we do</h2>
          <p>
            Beyond our own products, we partner with organisations to design,
            build, and maintain digital solutions that solve real problems.
          </p>
          <div className="cards">
            <article className="card">
              <div className="card-icon" aria-hidden="true">📱</div>
              <h3>Mobile Development</h3>
              <p>
                Cross-platform and native Android apps built with modern
                frameworks and published on Google Play.
              </p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🌐</div>
              <h3>Web Applications</h3>
              <p>
                Fast, accessible, and SEO-friendly web apps using React,
                TypeScript, and proven cloud infrastructure.
              </p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🔧</div>
              <h3>Technology Consulting</h3>
              <p>
                Architecture reviews, technical strategy, and hands-on
                guidance to help your team ship with confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Why Techscript ─────────────────────────────────────── */}
      <section className="page-section" aria-labelledby="why-heading">
        <div className="container">
          <span className="section-heading">Why us</span>
          <h2 id="why-heading">Why Techscript?</h2>
          <div className="cards">
            <article className="card">
              <div className="card-icon" aria-hidden="true">✅</div>
              <h3>Quality first</h3>
              <p>Thorough testing and clean code so your product stands up to real-world usage.</p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🚀</div>
              <h3>Fast delivery</h3>
              <p>Lean processes mean you get working software in your hands sooner.</p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🤝</div>
              <h3>Transparent partnership</h3>
              <p>Clear communication, honest estimates, and no surprises.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="page-section section-alt" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Ready to start?</h2>
          <p>Tell us about your project — we'll get back to you promptly.</p>
          <br />
          <Link to="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
