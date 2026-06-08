import { useState } from "react"
import logoHeadSvg from "../../assets/svgs/logo-head.svg"
import { languageOptions } from "../../constants/languageOptions"
import "./Header.css"

function Header({ copy, language, onLanguageChange }) {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
    const currentLanguage = languageOptions.find((option) => option.code === language)

    const selectLanguage = (code) => {
        onLanguageChange(code)
        setIsLanguageMenuOpen(false)
    }

    return (
        <header className="site-header">
            <a className="brand" href="#home" aria-label="LearnMojo home">
                <img
                    alt="U+"
                    loading="lazy"
                    decoding="async"
                    src={logoHeadSvg} />
                <span className="brand-name">LearnMojo</span>
            </a>

            <nav className="main-nav" aria-label="Primary navigation">
                <a href="#home">{copy.home}</a>
                <a href="#about">{copy.about}</a>
                <a href="#programs">{copy.program}</a>
                <a href="#resources">{copy.resources}</a>
                <a href="#contact">{copy.contact}</a>
            </nav>

            <div className="header-actions">
                <a className="signin-button button" href="#signin">{copy.signIn}</a>
                <a className="donate-button button" href="#join">{copy.signingUp}</a>

                <div className="language-selector">
                    <button
                        aria-expanded={isLanguageMenuOpen}
                        aria-haspopup="listbox"
                        className="language-button"
                        type="button"
                        onClick={() => setIsLanguageMenuOpen((isOpen) => !isOpen)}
                    >
                        <span>{currentLanguage.label}</span>
                        <span className="language-chevron" aria-hidden="true" />
                    </button>
                    {isLanguageMenuOpen && (
                        <div className="language-menu" role="listbox" aria-label="Select language">
                            {languageOptions.map((option) => (
                                <button
                                    aria-selected={option.code === language}
                                    className="language-option"
                                    key={option.code}
                                    role="option"
                                    type="button"
                                    onClick={() => selectLanguage(option.code)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
