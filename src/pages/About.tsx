import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About — Techscript Limited"
        description="Learn about Techscript Limited, a Canadian software development and consulting company focused on mobile and web solutions."
        url="https://techscript.ca/about"
      />

      <div className="page-header">
        <div className="container">
          <h1>About Techscript Limited</h1>
          <p>Software development &amp; technology consulting — Canada</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container prose">
          <p>
            <strong>Techscript Limited</strong> is a Canadian software development
            and consulting company. We design and build mobile and web applications
            that are reliable, maintainable, and user-friendly.
          </p>
          <p>
            Our focus is on delivering practical technology solutions — from
            Android and cross-platform mobile apps published on Google Play, to
            modern web applications and API services. We work with startups,
            small businesses, and established organisations who need a trusted
            technical partner.
          </p>

          <h2>Our mission</h2>
          <p>
            To create software that solves real problems and stands the test of
            time. We believe great software comes from a combination of clear
            thinking, sound architecture, and careful craftsmanship.
          </p>

          <h2>Services</h2>
          <ul>
            <li>Android and cross-platform mobile application development</li>
            <li>React and TypeScript web application development</li>
            <li>REST and GraphQL API design and implementation</li>
            <li>Cloud infrastructure setup and optimisation</li>
            <li>Code reviews, architecture consulting, and technical strategy</li>
            <li>Google Play app publishing and account management</li>
          </ul>

          <h2>Location</h2>
          <p>
            Techscript Limited is incorporated in Canada. We work remotely with
            clients across Canada and internationally.
          </p>

          <h2>Contact</h2>
          <p>
            Have a project in mind? Reach us at{' '}
            <a href="mailto:techscriptlimited@gmail.com">
              techscriptlimited@gmail.com
            </a>
            {' '}or visit our{' '}
            <a href="/contact">contact page</a>.
          </p>
        </div>
      </section>
    </>
  )
}
