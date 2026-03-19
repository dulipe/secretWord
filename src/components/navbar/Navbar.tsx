const Navbar = () => {
    return (
      <header className="w-full px-6 py-4 border-b-3 border-b-white flex items-center justify-between relative bg-neutral-900">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">Filipe Santos</span>
          <span className="text-xs text-white">Full Stack Developer</span>
        </div>
  
        <h1 className="text-xl font-bold text-white tracking-wide absolute left-1/2 -translate-x-1/2">
          Secret Word
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
      </header>
    );
  };
  
  export default Navbar;