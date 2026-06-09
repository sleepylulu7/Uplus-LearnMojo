import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { translations } from "./constants/translations"
import AppRouter from "./router/AppRouter"

function App() {
  const [language, setLanguage] = useState("en")
  const copy = translations[language]

  return (
    <div className="app">
      <Header copy={copy.nav} language={language} onLanguageChange={setLanguage} />
      <AppRouter copy={copy} />
      <Footer copy={copy.footer} />
    </div>
  )
}

export default App
