import arithmeticIcon from "../../assets/svgs/Arithmetic_Icon.svg"
import bookIcon from "../../assets/svgs/Book_Icon.svg"
import emc2Icon from "../../assets/svgs/E_MC2_Icon.svg"
import mascotSvg from "../../assets/svgs/body_image_mascot.svg"
import pencilIcon from "../../assets/svgs/Pencil_Icon.svg"
import "./About.css"

const reviews = [
  {
    id: "review-1",
    quote: "Review From Student",
    student: "Student Name, Age",
    program: "Program Name",
  },
  {
    id: "review-2",
    quote: "",
    student: "",
    program: "",
  },
  {
    id: "review-3",
    quote: "",
    student: "",
    program: "",
  },
]

function About({ copy }) {
  return (
    <main id="about" className="about-page">
      <section className="about-hero" aria-labelledby="about-page-title">
        <div className="about-hero__decor about-hero__decor--left" aria-hidden="true" />
        <div className="about-hero__decor about-hero__decor--center" aria-hidden="true" />
        <div className="about-hero__decor about-hero__decor--right" aria-hidden="true" />
        <img className="about-hero__pencil" src={pencilIcon} alt="" aria-hidden="true" />
        <img className="about-hero__book" src={bookIcon} alt="" aria-hidden="true" />
        <img className="about-hero__arithmetic" src={arithmeticIcon} alt="" aria-hidden="true" />
        <img className="about-hero__emc2" src={emc2Icon} alt="" aria-hidden="true" />
        <img className="about-hero__mascot" src={mascotSvg} alt="" aria-hidden="true" />
        <h1 id="about-page-title" className="about-hero__title">{copy.aboutPage.title}</h1>
      </section>

      <section className="about-story" aria-label={copy.aboutPage.storyLabel}>
        <div className="about-story__panel">
          <p>{copy.aboutPage.story}</p>
        </div>
      </section>

      <section id="testimonials" className="about-reviews" aria-labelledby="about-reviews-title">
        <p className="about-reviews__eyebrow">{copy.aboutPage.reviewsEyebrow}</p>
        <h2 id="about-reviews-title">{copy.aboutPage.reviewsTitle}</h2>
        <div className="about-reviews__grid">
          {reviews.map((review) => (
            <article className="about-review-card" key={review.id}>
              <span className="about-review-card__mark" aria-hidden="true">"</span>
              {review.quote && <p className="about-review-card__quote">{review.quote}</p>}
              <div className="about-review-card__meta">
                {review.student && <strong>{review.student}</strong>}
                {review.program && <span>{review.program}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-join" aria-labelledby="about-join-title">
        <span className="about-join__dot about-join__dot--one" aria-hidden="true" />
        <span className="about-join__dot about-join__dot--two" aria-hidden="true" />
        <span className="about-join__dot about-join__dot--three" aria-hidden="true" />
        <span className="about-join__orb about-join__orb--left" aria-hidden="true" />
        <span className="about-join__orb about-join__orb--right" aria-hidden="true" />
        <h2 id="about-join-title">{copy.aboutPage.joinTitle}</h2>
        <a className="about-join__button" href="/about">{copy.aboutPage.joinCta}</a>
      </section>
    </main>
  )
}

export default About
