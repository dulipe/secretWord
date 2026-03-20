import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { LanguageContext } from "@/context/LanguageContext";
import LanguageSelector from "@/components/languageSelector/LanguageSelector";
import App from "@/app/App";
import "./index.css";

type Language = "pt" | "en";

function Root() {
  const [language, setLanguage] = useState<Language | null>(null);

  if (!language) return <LanguageSelector onSelect={setLanguage} />;

  return (
    <LanguageContext.Provider value={{ language }}>
      <App language={language} />
    </LanguageContext.Provider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);