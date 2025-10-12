import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "../App.jsx";
import SocialIcons from "./SocialIcons";
import { MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const Terminal = ({ onClose }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const promptTimer = setTimeout(() => setShowPrompt(true), 500);
    const responseTimer = setTimeout(() => setShowResponse(true), 2000);

    return () => {
      clearTimeout(promptTimer);
      clearTimeout(responseTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-gray-900/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl w-full max-w-2xl font-mono text-sm border border-gray-700/50"
    >
      {/* Rest of Terminal component remains the same */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 transition-colors"
            onClick={onClose}
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-3 h-3 rounded-full bg-yellow-500"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-3 h-3 rounded-full bg-green-500"
          />
        </div>
        <div className="text-gray-400 text-xs">terminal@manoj-portfolio ~ </div>
      </div>

      <div className="text-green-400">
        <AnimatePresence>
          {showPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-blue-400">→</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-4 bg-green-400"
                />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Initiating connection with Manoj Kumar Achanta...
                </span>
              </div>
            </motion.div>
          )}
          {showResponse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-purple-400">system ~</span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Connection established successfully!
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">system ~</span>
                <span className="text-white">
                  Choose your preferred platform to connect:
                </span>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "#2d333b" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/ManojKumarAchanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 rounded-lg transition-all flex items-center gap-2 border border-gray-700/50 hover:border-green-500/50 group text-white"
                >
                  <span className="text-green-400 group-hover:animate-pulse">
                    $
                  </span>
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "#2d333b" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/manojkumarachanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 rounded-lg transition-all flex items-center gap-2 border border-gray-700/50 hover:border-blue-500/50 group text-white"
                >
                  <span className="text-blue-400 group-hover:animate-pulse">
                    $
                  </span>
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "#2d333b" }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:manojkumarachanta@gmail.com"
                  className="px-4 py-2 bg-gray-800 rounded-lg transition-all flex items-center gap-2 border border-gray-700/50 hover:border-red-500/50 group text-white"
                >
                  <span className="text-red-400 group-hover:animate-pulse">
                    $
                  </span>
                  Email
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const MatrixRain = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100 }}
          animate={{ y: 100 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
          className="absolute text-violet-500 text-xs font-mono"
          style={{ left: `${i * 10}%` }}
        >
          {[...Array(4)].map((_, j) => (
            <div key={j}>{"</>"};</div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

const ConnectButton = ({ onClick, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 w-full sm:w-auto md:w-auto md:px-8 py-2 md:py-3 rounded-lg overflow-hidden border-2 border-transparent hover:border-violet-500/30 transition-all whitespace-nowrap"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-indigo-500/20 to-purple-600/20 backdrop-blur-sm" />
      <span
        className={`${
          isDarkMode ? "text-white" : "text-gray-800"
        } relative z-10`}
      >
        <span className="text-xs md:text-base">Connect with Me</span>
        {isHovered && (
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 h-[2px] bg-violet-500"
          />
        )}
      </span>
    </motion.button>
  );
};

const Hero = () => {
  const [showChat, setShowChat] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const resumeURL = "/manojkumar_resume2026.pdf";
  const handleShowTerminal = () => {
    setShowTerminal(true);
  };

  // Handler for closing terminal
  const handleCloseTerminal = () => {
    setShowTerminal(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex items-center justify-center py-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "bg-[#0a192f]/90" : "bg-white/90"
          }`}
        ></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 relative w-full max-w-md mx-auto"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <motion.div
              animate={{
                background: [
                  "linear-gradient(0deg, #7c3aed 0%, #4f46e5 50%, #7e22ce 100%)",
                  "linear-gradient(60deg, #7c3aed 0%, #4f46e5 50%, #7e22ce 100%)",
                  "linear-gradient(120deg, #7c3aed 0%, #4f46e5 50%, #7e22ce 100%)",
                  "linear-gradient(180deg, #7c3aed 0%, #4f46e5 50%, #7e22ce 100%)",
                  "linear-gradient(240deg, #7c3aed 0%, #4f46e5 50%, #7e22ce 100%)",
                  "linear-gradient(300deg, #7c3aed 0%, #4f46e5 50%, #7e22ce 100%)",
                  "linear-gradient(360deg, #7c3aed 0%, #4f46e5 50%, #7e22ce 100%)",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-3xl p-1"
            >
              <div
                className={`h-full w-full rounded-3xl ${
                  isDarkMode ? "bg-[#0D192C]" : "bg-white"
                } overflow-hidden`}
              >
                <img
                  src="/profile.jpeg"
                  alt="Manoj Kumar"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Floating icons */}
            <motion.div
              animate={{ y: [-10, 10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -right-8 top-10 bg-violet-500 p-3 rounded-full shadow-lg"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              }}
              className="absolute -left-8 bottom-10 bg-indigo-500 p-3 rounded-full shadow-lg"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left order-2 lg:order-1 space-y-4 md:space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light text-violet-600 dark:text-violet-400"
          >
            Hello World! I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-2xl sm:text-3xl md:text-5xl font-bold 
              ${isDarkMode ? "text-white" : "text-slate-900"}
              bg-clip-text relative before:absolute before:inset-0 before:-z-10 
              before:bg-gradient-to-r before:from-violet-600 before:via-indigo-500 before:to-purple-600 
              before:animate-gradient before:w-full before:h-full before:bg-clip-text`}
            style={{
              WebkitTextStroke: isDarkMode ? "1px #3f4454" : "0.5px #1e293b",
              textStroke: isDarkMode ? "1px #3f4454" : "0.5px #1e293b",
            }}
          >
            Manoj Kumar Achanta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } leading-relaxed`}
          >
            <span className="relative">
              A passionate{" "}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              specializing in{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                MERN stack
              </span>
              . Creating elegant solutions with{" "}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">
                frontend
              </span>{" "}
              and{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                backend
              </span>{" "}
              expertise.
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 opacity-50"
              />
            </span>
          </motion.p>

          <div
            className={`text-base sm:text-lg md:text-2xl ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Problem Solver",
                  "Tech Explorer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://ik.imagekit.io/mykitt/ManojKumarAchantaResume-2026.pdf?updatedAt=1754042228690",
                  "_blank"
                )
              }
              className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:shadow-violet-500/25 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Resume
              <motion.span
                initial={{ x: -5 }}
                animate={{ x: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                }}
              >
                →
              </motion.span>
            </motion.button>

            <ConnectButton
              onClick={handleShowTerminal}
              isDarkMode={isDarkMode}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4 flex justify-center md:justify-start"
          >
            <SocialIcons />
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <Terminal onClose={handleCloseTerminal} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;
