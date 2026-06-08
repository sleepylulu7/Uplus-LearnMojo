import facebookIcon from "../../assets/icons/facebook.svg"
import instagramIcon from "../../assets/icons/instagram.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import wechatIcon from "../../assets/icons/wechat.svg"
import "./Footer.css"

const UPLUS_LINKS = {
    programs: "https://www.upluseducation.ca/program/",
    testimonials: "https://www.upluseducation.ca/awards-testimonials/",
    partners: "https://www.upluseducation.ca/partners",
    story: "https://www.upluseducation.ca/about/",
    teachers: "https://www.upluseducation.ca/teachers/",
    bookstore: "https://www.upluseducation.ca/bookstore/",
    registration: "https://www.upluseducation.ca/registration/",
    faqs: "https://www.upluseducation.ca/faq/",
    contact: "http://localhost:5173/contact",
    instagram: "https://www.instagram.com/upluseducation/",
    facebook: "https://www.facebook.com/upluseducation",
    linkedin: "https://www.linkedin.com/company/upluseducation",
    socialHub: "https://linktr.ee/upluseducation",
}

function Footer({ copy }) {
    return (
        <footer id="contact" className="site-footer">
            <div className="footer-links" aria-label={copy.navigationLabel}>
                <div>
                    <h2>{copy.home}</h2>
                    <a href={UPLUS_LINKS.programs}>{copy.programs}</a>
                    <a href={UPLUS_LINKS.testimonials}>{copy.testimonials}</a>
                    <a href={UPLUS_LINKS.partners}>{copy.partners}</a>
                </div>
                <div>
                    <h2>{copy.about}</h2>
                    <a href={UPLUS_LINKS.story}>{copy.story}</a>
                    <a href={UPLUS_LINKS.teachers}>{copy.teachers}</a>
                    <a href={UPLUS_LINKS.bookstore}>{copy.bookstore}</a>
                </div>
                <div id="join">
                    <h2>{copy.join}</h2>
                    <a href={UPLUS_LINKS.registration}>{copy.registration}</a>
                    <a href={UPLUS_LINKS.faqs}>{copy.faqs}</a>
                    <a href={UPLUS_LINKS.contact}>{copy.contact}</a>
                </div>
                <div>
                    <h2>{copy.follow}</h2>
                    <a className="social-link" href={UPLUS_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="" aria-hidden="true" />
                        <span>Instagram</span>
                    </a>
                    <a className="social-link" href={UPLUS_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="" aria-hidden="true" />
                        <span>Facebook</span>
                    </a>
                    <a className="social-link" href={UPLUS_LINKS.socialHub} target="_blank" rel="noopener noreferrer">
                        <img src={wechatIcon} alt="" aria-hidden="true" />
                        <span>WeChat</span>
                    </a>
                    <a className="social-link" href={UPLUS_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
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
