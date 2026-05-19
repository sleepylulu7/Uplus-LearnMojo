import facebookIcon from "../../assets/icons/facebook.svg"
import instagramIcon from "../../assets/icons/instagram.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import "./Footer.css"

function Footer({ copy }) {
    return (
        <footer id="contact" className="site-footer">
            <div className="footer-links" aria-label={copy.navigationLabel}>
                <div>
                    <h2>{copy.home}</h2>
                    <a href="#programs">{copy.programs}</a>
                    <a href="#testimonials">{copy.testimonials}</a>
                    <a href="#partners">{copy.partners}</a>
                </div>
                <div>
                    <h2>{copy.about}</h2>
                    <a href="#story">{copy.story}</a>
                    <a href="#teachers">{copy.teachers}</a>
                    <a href="#bookstore">{copy.bookstore}</a>
                </div>
                <div id="join">
                    <h2>{copy.join}</h2>
                    <a href="#registration">{copy.registration}</a>
                    <a href="#faqs">{copy.faqs}</a>
                    <a href="#contact">{copy.contact}</a>
                </div>
                <div>
                    <h2>{copy.follow}</h2>
                    <a className="social-link" href="#instagram">
                        <img src={instagramIcon} alt="" aria-hidden="true" />
                        <span>Instagram</span>
                    </a>
                    <a className="social-link" href="#facebook">
                        <img src={facebookIcon} alt="" aria-hidden="true" />
                        <span>Facebook</span>
                    </a>
                    <a href="#wechat">WeChat</a>
                    <a className="social-link" href="#linkedin">
                        <img src={linkedinIcon} alt="" aria-hidden="true" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>

            <form className="mailing-list" aria-label={copy.mailingLabel}>
                <label htmlFor="email">{copy.mailingTitle}</label>
                <input id="email" type="email" placeholder={copy.emailPlaceholder} />
                <button type="submit">{copy.subscribe}</button>
            </form>

            <p className="copyright">{copy.copyright}</p>
        </footer>
    )
}

export default Footer
