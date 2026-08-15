import { PhoneIcon, MailIcon, InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from './Icons'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href="tel:+12255550118" className="topbar__item">
            <PhoneIcon /> (225) 555-0118
          </a>
          <a href="mailto:michelle.rivera@example.com" className="topbar__item">
            <MailIcon /> michelle.rivera@example.com
          </a>
        </div>

        <p className="topbar__promo">Follow Us and get a chance to win 80% off</p>

        <div className="topbar__social">
          <span>Follow Us:</span>
          <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
          <a href="#" aria-label="Facebook"><FacebookIcon /></a>
          <a href="#" aria-label="Twitter"><TwitterIcon /></a>
        </div>
      </div>
    </div>
  )
}
