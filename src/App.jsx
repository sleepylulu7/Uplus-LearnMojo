import { useState } from 'react'
import {Routes, Route } from "react-router-dom"
import './App.css'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { translations } from "./constants/translations"
import Home from "./pages/Home/Home"
import Minigame from "./pages/Minigame";

function App() {
  const [language, setLanguage] = useState("en")
  const copy = translations[language]

  return (
    <div className="app">
      <Header copy={copy.nav} language={language} onLanguageChange={setLanguage} />
    
    <Routes>
      <Route path="/" element ={<Home copy={copy} />} />
      <Route path="/minigame" element={<Minigame />} />
    </Routes>
      
      <Footer copy={copy.footer} />
    </div>
  )
}

export default App
