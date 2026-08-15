import { useState, type FormEvent } from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icons'
import './Footer.css'

const FOOTER_COLUMNS = [
  {
    title: 'Company Info',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    title: 'Legal',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    title: 'Features',
    links: ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
  },
  {
    title: 'Resources',
    links: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    // Landing page scope: no backend endpoint provided for newsletter signup,
    // so we confirm locally rather than fabricate an API call.
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__top">
          <a href="#home" className="footer__logo">Bandage</a>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
          </div>
        </div>

        <div className="footer__grid">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="footer__col-title">Get In Touch</h4>
            <form className="footer__subscribe" onSubmit={handleSubmit}>
              <label htmlFor="footer-email" className="visually-hidden">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p className="footer__note" role="status">
              {subscribed ? 'Thanks — you\u2019re subscribed!' : 'Lorem imp sum dolor Amit'}
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}
