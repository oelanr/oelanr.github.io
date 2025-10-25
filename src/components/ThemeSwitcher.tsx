import { useState, useEffect } from 'react';

const themes = [
  {
    name: 'blue',
    primary: '#3b82f6',
  },
  {
    name: 'green',
    primary: '#22c55e',
  },
  {
    name: 'purple',
    primary: '#a855f7',
  },
  {
    name: 'red',
    primary: '#ef4444',
  },
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(0);

  const switchTheme = () => {
    setCurrentTheme((currentTheme + 1) % themes.length);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', themes[currentTheme].primary);
  }, [currentTheme]);

  return (
    <button
      onClick={switchTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
      aria-label="Switch theme"
    >
      <div
        className="w-6 h-6 rounded-full"
        style={{ backgroundColor: themes[(currentTheme + 1) % themes.length].primary }}
      />
    </button>
  );
}
