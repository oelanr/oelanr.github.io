export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-700 dark:text-gray-300 text-sm py-4 text-center">
      <div className="max-w-5xl mx-auto">
        <p>&copy; {currentYear} Oëlan RAKOTONIRINA. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300">Mentions</a>
          <a href="https://github.com/Riandy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

