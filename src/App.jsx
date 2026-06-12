import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { translations } from "./constants/translations";
import AppRouter from "./router/AppRouter";
import { ROUTE_PATHS } from "./router/routePaths";

function App() {
  const [language, setLanguage] = useState("en");
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const copy = translations[language];

  const hideFooter = currentPath === ROUTE_PATHS.signin;

  return (
    <div className="app">
      <Header
        copy={copy.nav}
        language={language}
        onLanguageChange={setLanguage}
      />

      {!hideFooter && <Footer copy={copy.footer} />}

      <AppRouter copy={copy} onRouteChange={setCurrentPath} />
    </div>
  );
}

export default App;
