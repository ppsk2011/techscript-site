import { type FormEvent } from 'react'
import SEO from '../components/SEO'

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // This form does not submit to any server.
    // Use the mailto link below to contact us directly.
    alert('Please use the email link above to send your message.')
  }

  return (
    <>
      <SEO
        title="Contact — Techscript Limited"
        description="Get in touch with Techscript Limited. Email us at techscriptlimited@gmail.com."
        url="https://techscript.ca/contact"
      />

      <div className="page-header">
        <div className="container">
          <h1>Contact us</h1>
          <p>We'd love to hear about your project.</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-info">
              <h2>Get in touch</h2>
              <p>
                The best way to reach us is by email. We typically respond within
                one business day.
              </p>
              <a
                href="mailto:techscriptlimited@gmail.com"
                className="contact-email"
                aria-label="Email Techscript Limited"
              >
                📧 techscriptlimited@gmail.com
              </a>
              <p>
                You can also use the form on the right as a quick reference — fill
                it in and then hit "Send via email" to open your mail client with
                the details pre-filled.
              </p>
              <p>
                <strong>Techscript Limited</strong>
                <br />
                <a href="https://techscript.ca">techscript.ca</a>
              </p>
            </div>

            <div>
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project…"
                  />
                </div>
                <a
                  href="mailto:techscriptlimited@gmail.com?subject=Project%20Enquiry"
                  className="btn btn-primary"
                  style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}
                >
                  Send via email
                </a>
                <p className="form-note">
                  This opens your email client. We do not collect form submissions
                  on this site.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
