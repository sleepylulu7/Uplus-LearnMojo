import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { translations } from "./constants/translations"
import Home from "./pages/Home/Home"

function App() {
  const [language, setLanguage] = useState("en")
  const copy = translations[language]

  return (
    <div className="app">
      <Header copy={copy.nav} language={language} onLanguageChange={setLanguage} />
      <Home copy={copy} />
      <Footer copy={copy.footer} />
    </div>
  )
}

export default App
