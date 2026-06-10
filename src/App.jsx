import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { translations } from "./constants/translations";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";

function App() {
  const [language, setLanguage] = useState("en");
  const copy = translations[language];

  const location = useLocation();
  const hideFooter = location.pathname === "/signin";

  return (
    <div className="app">
      <Header
        copy={copy.nav}
        language={language}
        onLanguageChange={setLanguage}
      />

      <Routes>
        <Route path="/" element={<Home copy={copy} />} />
        <Route path="/signin" element={<Login copy={copy.auth} />} />
      </Routes>

      {!hideFooter && <Footer copy={copy.footer} />}
    </div>
  );
}

export default App;
