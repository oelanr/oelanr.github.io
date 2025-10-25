interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  language: "FR" | "EN";
  setLanguage: (value: "FR" | "EN") => void;
}

export default function Navbar({ darkMode, setDarkMode, language, setLanguage }: NavbarProps) {

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "EN" : "FR");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm transition">
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-bold text-gray-900 dark:text-gray-100">Riandy</a>
          <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 transition">{language === 'FR' ? 'À propos' : 'About'}</a>
            <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 transition">{language === 'FR' ? 'Compétences' : 'Skills'}</a>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition">{language === 'FR' ? 'Projets' : 'Projects'}</a>
            <a href="#certifications" className="hover:text-blue-500 dark:hover:text-blue-400 transition">{language === 'FR' ? 'Certifications' : 'Certifications'}</a>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition">{language === 'FR' ? 'Contact' : 'Contact'}</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="change-language"
          >
            {language === "FR" ? "EN" : "FR"}
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition"
          >
            {language === 'FR' ? 'Télécharger CV' : 'Download CV'}
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="toggle-dark-mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
