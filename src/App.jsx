import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ContactMe from './components/ContactMe';
// import Chatbox from './components/Chatbox';
// import AdminChat from './components/AdminChat';
import {Toaster} from "react-hot-toast";
import { AnimatePresence } from 'framer-motion';

export const ThemeContext = createContext();

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  return (
    <div className="flex">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 ml-0 md:ml-64 min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Hero />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="contact" element={<ContactMe />} />
          </Routes>
        </AnimatePresence>
        {/* <Chatbox /> */}
      </main>
    </div>
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className={`min-h-screen ${isDarkMode ? 'bg-[#0D192C]' : 'bg-gray-50'}`}>
          <Toaster position='top-right' />
          <Router>
            <Routes>
              <Route path="/*" element={<MainLayout />} />
            </Routes>
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
