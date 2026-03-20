type Language = "pt" | "en";

type LanguageSelectorProps = {
  onSelect: (language: Language) => void;
};

const LanguageSelector = ({ onSelect }: LanguageSelectorProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-60 gap-8">

      <h1 className="text-4xl font-bold text-gray-800 tracking-wide">Escolha o idioma / Choose a language</h1>

      <div className="flex gap-6">
        <button
          onClick={() => onSelect("pt")}
          className="w-36 h-36 flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-gray-400 transition-all duration-200 cursor-pointer"
        >
          <span className="text-4xl">🇧🇷</span>
          <span className="text-base font-semibold text-gray-800">Português</span>
        </button>

        <button
          onClick={() => onSelect("en")}
          className="w-36 h-36 flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-md border-2 border-transparent hover:border-gray-400 transition-all duration-200 cursor-pointer"
        >
          <span className="text-4xl">🇺🇸</span>
          <span className="text-base font-semibold text-gray-800">English</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;