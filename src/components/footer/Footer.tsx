import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {

  const { language } = useLanguage();

  return (
    <footer className="w-full px-4 py-3 border-t-3 border-white flex items-center justify-center mt-auto relative bg-neutral-900">
      <p className="text-sm text-white">
        © {new Date().getFullYear()} Filipe Santos · {language === "pt" ? "Inspirado por" : "Inspired by"}{" "}
        <a
          href="https://www.geniol.com.br/palavras/palavras-secretas/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-800 transition-colors duration-200"
        >
          {language === "pt" ? "Palavras Secretas" : "Secret Words"}
        </a>{" "}
        {language === "pt" ? "do" : "of"} Geniol
      </p>
    </footer >
  );
};

export default Footer;