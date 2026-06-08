import { useEffect, useState } from 'react'
import './App.css'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { translations } from "./constants/translations"
import Home from "./pages/Home/Home"
import { useAuth } from './hooks/useAuth'
import { useAuthStore } from './store/auth.store.js'
import { onAuthStateChanged } from 'firebase/auth'
import { authInstance } from './config/firebase.js'

function App() { 
  const [language, setLanguage] = useState("en")
  const user = useAuthStore((state) => state.user)
  const setUser = useAuthStore((state) => state.setUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      setUser(user)
    })

    return unsubscribe
  }, [setUser])

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
