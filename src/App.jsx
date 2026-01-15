import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ContactMe from './components/ContactMe';
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  return (
    <div className="flex">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 ml-0 md:ml-64 min-h-screen">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Hero />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<ContactMe />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position='top-right' />
      <Router>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
