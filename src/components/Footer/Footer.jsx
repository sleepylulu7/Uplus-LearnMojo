import facebookIcon from "../../assets/icons/facebook.svg"
import instagramIcon from "../../assets/icons/instagram.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import { ROUTE_PATHS } from "../../router/routePaths"
import "./Footer.css"

function Footer({ copy }) {
    return (
        <footer id="contact" className="site-footer">
            <div className="footer-links" aria-label={copy.navigationLabel}>
                <div>
                    <h2>{copy.home}</h2>
                    <a href={ROUTE_PATHS.programs}>{copy.programs}</a>
                    <a href={ROUTE_PATHS.about}>{copy.testimonials}</a>
                    <a href={ROUTE_PATHS.resources}>{copy.partners}</a>
                </div>
                <div>
                    <h2>{copy.about}</h2>
                    <a href={ROUTE_PATHS.about}>{copy.story}</a>
                    <a href={ROUTE_PATHS.about}>{copy.teachers}</a>
                    <a href={ROUTE_PATHS.about}>{copy.bookstore}</a>
                </div>
                <div id="join">
                    <h2>{copy.join}</h2>
                    <a href={ROUTE_PATHS.contact}>{copy.registration}</a>
                    <a href={ROUTE_PATHS.resources}>{copy.faqs}</a>
                    <a href={ROUTE_PATHS.contact}>{copy.contact}</a>
                </div>
                <div>
                    <h2>{copy.follow}</h2>
                    <a className="social-link" href={ROUTE_PATHS.about}>
                        <img src={instagramIcon} alt="" aria-hidden="true" />
                        <span>Instagram</span>
                    </a>
                    <a className="social-link" href={ROUTE_PATHS.about}>
                        <img src={facebookIcon} alt="" aria-hidden="true" />
                        <span>Facebook</span>
                    </a>
                    <a href={ROUTE_PATHS.about}>WeChat</a>
                    <a className="social-link" href={ROUTE_PATHS.about}>
                        <img src={linkedinIcon} alt="" aria-hidden="true" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>

            <form className="mailing-list" aria-label={copy.mailingLabel}>
                <label htmlFor="email">{copy.mailingTitle}</label>
                <div className="mailing-list-controls">
                    <input id="email" type="email" placeholder={copy.emailPlaceholder} />
                    <button type="submit">{copy.subscribe}</button>
                </div>
            </form>

            <p className="copyright">{copy.copyright}</p>
        </footer>
    )
}

export default Footer
