import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Briefcase,
  Code2,
  Award,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  User,
  MessageCircle,
} from "lucide-react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    setActiveSection(currentPath || "hero");
  }, [location, setActiveSection]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    navigate(sectionId === "" ? "/" : `/${sectionId}`);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-md md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className={isDarkMode ? "text-white" : "text-gray-900"} />
        ) : (
          <Menu className={isDarkMode ? "text-white" : "text-gray-900"} />
        )}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`fixed ${
          isMenuOpen ? "left-0" : "-left-full md:left-0"
        } top-0 h-full w-64 transition-all duration-300 ease-in-out z-40 ${
          isDarkMode ? "bg-gray-800/95 backdrop-blur-md" : "bg-white/95 backdrop-blur-md"
        } shadow-lg md:w-64`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 font-mono text-xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-sm text-transparent">
              &lt;manojkumarachanta.tech /&gt;
            </span>
          </motion.div>

          {/* Nav Items */}
          <div className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === (item.id || "hero");
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700/50"
                      : "text-gray-600 hover:bg-gray-100/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="ml-4 font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`w-full flex items-center p-3 rounded-lg mt-4 ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700/50"
                : "text-gray-600 hover:bg-gray-100/50"
            }`}
          >
            {isDarkMode ? (
              <>
                <Sun className="w-5 h-5" />
                <span className="ml-4 font-medium">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                <span className="ml-4 font-medium">Dark Mode</span>
              </>
            )}
          </motion.button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
