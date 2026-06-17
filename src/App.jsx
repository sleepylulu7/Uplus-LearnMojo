import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { translations } from "./constants/translations";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import AppRouter from "./router/AppRouter";

function App() {
  const [language, setLanguage] = useState("en");
  const copy = translations[language];

  const location = useLocation();
  const hideFooter = location.pathname === "/signin";

  // const setUser = useAuthStore((state) => state.setUser)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(authInstance, (user) => {
  //     setUser(user)
  //   })

  //   return unsubscribe
  // }, [setUser])

  return (
    <div className="app">
      <Header
        copy={copy.nav}
        language={language}
        onLanguageChange={setLanguage}
      />

      <AppRouter copy={copy} />
      <Footer copy={copy.footer} />
    </div>
  );
}

export default App;
