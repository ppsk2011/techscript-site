import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy — Techscript Limited"
        description="Privacy Policy for Techscript Limited. Learn what data we collect, how we use it, and your rights."
        url="https://techscript.ca/privacy"
      />

      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: 2026-02-24</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container prose">
          <p>
            This Privacy Policy describes how <strong>Techscript Limited</strong>{' '}
            ("we", "us", or "our") collects, uses, and protects information in
            connection with our website at{' '}
            <a href="https://techscript.ca">https://techscript.ca</a> (the "Site").
          </p>

          <h2>1. Information we collect</h2>
          <p>
            We collect minimal information necessary to operate and improve the Site:
          </p>
          <ul>
            <li>
              <strong>Information you provide voluntarily:</strong> If you contact
              us by email, we receive your email address and any information you
              choose to include in your message.
            </li>
            <li>
              <strong>Automatically collected data:</strong> Like most websites,
              our hosting provider (GitHub Pages) may log standard server access
              data such as IP addresses, browser type, referring URLs, and page
              views. We do not control this logging and it is governed by GitHub's
              Privacy Policy.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> use cookies, analytics trackers, or
            advertising networks on this Site.
          </p>

          <h2>2. How we use information</h2>
          <p>Any information we receive is used solely to:</p>
          <ul>
            <li>Respond to enquiries and support requests</li>
            <li>Operate and maintain the Site</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information sharing</h2>
          <p>
            We do <strong>not</strong> sell, rent, or share your personal
            information with third parties for marketing or advertising purposes.
            We will not disclose your information except as required by law or to
            protect the rights, property, or safety of Techscript Limited or others.
          </p>

          <h2>4. Data retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfil the
            purpose for which it was collected or as required by applicable law.
            Email correspondence is retained for a reasonable period to allow us to
            manage our business.
          </p>

          <h2>5. Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect
            information against unauthorised access, loss, or disclosure. However,
            no internet transmission is 100% secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>6. Third-party links</h2>
          <p>
            The Site may contain links to third-party websites. We are not
            responsible for the privacy practices of those sites and encourage you
            to review their privacy policies.
          </p>

          <h2>7. Children's privacy</h2>
          <p>
            This Site is not directed to children under the age of 13. We do not
            knowingly collect personal information from children.
          </p>

          <h2>8. Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access,
            correct, or delete personal information we hold about you. To exercise
            these rights, please contact us at the email address below.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with a revised "Last updated" date.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions or concerns about this Privacy Policy? Contact us at:{' '}
            <a href="mailto:techscriptlimited@gmail.com">
              techscriptlimited@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
