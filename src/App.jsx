import { useEffect, useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { translations } from "./constants/translations"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"

const ROUTE_LINKS = {
  home: "/home",
  about: "/about",
}

const getCurrentPath = () => {
  const currentPath = window.location.pathname

  if (currentPath === ROUTE_LINKS.about) {
    return ROUTE_LINKS.about
  }

  return ROUTE_LINKS.home
}

function App() {
  const [language, setLanguage] = useState("en")
  const [currentPath, setCurrentPath] = useState(getCurrentPath)
  const copy = translations[language]
  const isAboutRoute = currentPath === ROUTE_LINKS.about

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.history.replaceState(null, "", ROUTE_LINKS.home)
    }

    const updateRoute = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener("popstate", updateRoute)
    return () => window.removeEventListener("popstate", updateRoute)
  }, [])

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0 })
    })
  }, [currentPath])

  return (
    <div className="app">
      <Header copy={copy.nav} language={language} onLanguageChange={setLanguage} />
      {isAboutRoute ? <About copy={copy} /> : <Home copy={copy} />}
      <Footer copy={copy.footer} />
    </div>
  )
}

export default App
