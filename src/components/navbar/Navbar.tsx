import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {

  const { language } = useLanguage();

  return (
    <header className="w-full px-6 py-4 border-b-3 border-white flex items-center justify-between relative bg-neutral-900">
      <div className="hidden sm:flex flex-col">
        <span className="text-sm font-semibold text-white">Filipe Santos</span>
        <span className="text-xs text-white">
          {language === "pt" ? "Desenvolvedor Full Stack" : "Full Stack Developer"}
        </span>
      </div>

      <h1 className="text-xl font-bold text-white tracking-wide sm:absolute sm:left-1/2 sm:-translate-x-1/2 mx-auto sm:mx-0">
        {language === "pt" ? "Palavra Secreta" : "Secret Word"}
      </h1>

      <a
        href="https://www.filipe-santos.dev/"
        target="_blank"
        rel="noopener noreferrer"
        title="Portfólio"
        className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
      >
        <img src="/fs.png" alt="GitHub" width={22} height={22} />
      </a>
    </header >
  );
};

export default Navbar;