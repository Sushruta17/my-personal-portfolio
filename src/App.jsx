import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contacts from "./components/sections/Contacts";
import Footer from "./components/layout/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-indigo-50/30">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <main>
        <Hero isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
      </main>

      <Footer />
    </div>
  );
};

export default App;