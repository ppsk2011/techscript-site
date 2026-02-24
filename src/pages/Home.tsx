import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO
        title="Techscript Limited — Software Development & Consulting"
        description="Techscript Limited builds reliable mobile and web applications. Based in Canada, serving clients worldwide."
        url="https://techscript.ca/"
      />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <h1 id="hero-heading">
            Software built to <span>last</span>
          </h1>
          <p>
            Techscript Limited delivers high-quality mobile and web application
            development and technology consulting for businesses across Canada and
            beyond.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="page-section" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading">What we do</h2>
          <p>
            We partner with organisations to design, build, and maintain
            digital products that solve real problems.
          </p>
          <div className="cards">
            <article className="card">
              <div className="card-icon" aria-hidden="true">📱</div>
              <h3>Mobile Development</h3>
              <p>
                Cross-platform and native Android apps built with modern
                frameworks, published on Google Play.
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

      <section className="page-section section-alt" aria-labelledby="why-heading">
        <div className="container">
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

      <section className="page-section" aria-labelledby="cta-heading">
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
