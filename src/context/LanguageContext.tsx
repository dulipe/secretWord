import { createContext, useContext } from "react";

type Language = "pt" | "en";

type LanguageContextType = {
  language: Language;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
});

export const useLanguage = () => useContext(LanguageContext);