import mascotSvg from "../../assets/svgs/body_image_mascot.svg"
import numbersSvg from "../../assets/svgs/body_image_numbers.svg"
import tabletSvg from "../../assets/svgs/body_image_tablet.svg"
import robotSvg from "../../assets/svgs/body_image_robot_made.svg"
import beakerSvg from "../../assets/svgs/body_image_beaker.svg"
import istockSvg from "../../assets/svgs/body_image_istock.svg"
import { programs } from "../../constants/programs"
import "./Home.css"

function Home({ copy }) {
    return (
        <main id="home" className="home-page">
            <section className="hero-section" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <h1 id="hero-title" className="eyebrow">{copy.hero.title}</h1>
                    <p className="hero-text">{copy.hero.text}</p>
                    <a className="primary-button" href="/home">{copy.hero.cta}</a>
                </div>

                <div className="hero-art" aria-label="LearnMojo classroom illustration">
                    <img className="math-burst" src={numbersSvg} alt="" aria-hidden="true" />
                    <img className="tablet-card" src={tabletSvg} alt="" aria-hidden="true" />
                    <img className="student-robot" src={robotSvg} alt="" aria-hidden="true" />
                    <img className="mascot" src={mascotSvg} alt="" aria-hidden="true" />
                    <img className="beaker" src={beakerSvg} alt="" aria-hidden="true" />
                </div>
            </section>

            <section id="about" className="about-section" aria-labelledby="about-title">
                <div className="about-content">
                    <img className="about-image" src={istockSvg} alt={copy.about.imageAlt} />
                    <div className="about-copy">
                        <h2 id="about-title">{copy.about.title}</h2>
                        <p>{copy.about.text}</p>
                        <a className="secondary-button" href="/about">{copy.about.cta}</a>
                    </div>
                </div>
            </section>

            <section id="programs" className="programs-section" aria-labelledby="programs-title">
                <h2 id="programs-title">{copy.programsTitle}</h2>
                <div className="program-grid">
                    {programs.map((program) => {
                        const programCopy = copy.programs[program.id]

                        return (
                        <article className={`program-item ${program.tone}`} key={program.id}>
                            <div className="program-icon" aria-hidden="true">
                                <img src={program.icon} alt="" />
                            </div>
                            <div>
                                <h3>{programCopy.title}</h3>
                                <p>{programCopy.description}</p>
                                <a href="/home">{copy.programs.letsPlay}</a>
                            </div>
                        </article>
                        )
                    })}
                </div>
            </section>

        </main>
    )
}

export default Home
