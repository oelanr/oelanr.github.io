import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<"FR" | "EN">("EN");

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-poppins">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Hero language={language} />
        <AnimatedSection>
          <About language={language} />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Projects language={language} />
        </AnimatedSection>
        <AnimatedSection>
          <Certifications language={language} />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
