import { useState } from "react";
import Typewriter from "typewriter-effect";
import SocialIcons from "./SocialIcons";
import PropTypes from "prop-types";
const Terminal = props => {
  const { onClose } = props;
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl font-mono text-sm border border-gray-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            className="w-3 h-3 rounded-full bg-gray-400 cursor-pointer hover:bg-gray-600 transition-colors"
            onClick={onClose}
            aria-label="Close terminal"
          />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
        </div>
        <div className="text-gray-500 text-xs">terminal@manoj-portfolio ~ </div>
      </div>

      <div className="text-gray-800 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-700">→</span>
          <span>Initiating connection with Manoj Kumar Achanta...</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700">system ~</span>
          <span>Connection established successfully.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700">system ~</span>
          <span>Choose your preferred platform to connect:</span>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://github.com/ManojKumarAchanta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 text-gray-800"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manojkumarachanta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 text-gray-800"
          >
            LinkedIn
          </a>
          <a
            href="mailto:manojkumarachanta@gmail.com"
            className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 text-gray-800"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};
Terminal.propTypes = {
  onClose: PropTypes.func.isRequired,
};



const ConnectButton = props => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="px-4 w-full sm:w-auto bg-gray-800 md:w-auto md:px-8 py-2 md:py-3 rounded-lg border border-gray-900 text-white transition-all whitespace-nowrap hover:bg-gray-900"
    >
      <span className="text-xs md:text-base">Connect with Me</span>
    </button>
  );
};

ConnectButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleShowTerminal = () => {
    setShowTerminal(true);
  };

  const handleCloseTerminal = () => {
    setShowTerminal(false);
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center py-16 px-4 md:px-8 bg-white">

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
        {/* Photo Section */}
        <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 rounded-3xl p-1 border border-gray-300">
              <div className="h-full w-full rounded-3xl bg-white overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Manoj Kumar"
                  className="w-full h-full object-cover object-center rounded-3xl "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center lg:text-left order-2 lg:order-1 space-y-4 md:space-y-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-800">
            Hello World! I&apos;m
          </h2>
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900"
          >
            Manoj Kumar Achanta
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 text-gray-700 leading-relaxed"
          >
            <span className="relative">
              A passionate{" "}
              <span className="font-semibold">
                Full Stack Developer
              </span>{" "}
              specializing in{" "}
              <span className="font-semibold">
                MERN stack
              </span>
              . Creating elegant solutions with{" "}
              <span className="font-semibold">
                frontend
              </span>{" "}
              and{" "}
              <span className="font-semibold">
                backend
              </span>{" "}
              expertise.
            </span>
          </p>

          <div className="text-base sm:text-lg md:text-2xl text-gray-700">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-4">
            <button
              onClick={() =>
                window.open(
                  "https://ik.imagekit.io/mykitt/ManojKumar-2026.pdf",
                  "_blank"
                )
              }
              className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3 bg-black text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm md:text-base shadow-md hover:bg-gray-900 transition-all"
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
              <span>→</span>
            </button>

            <ConnectButton
              onClick={handleShowTerminal}
            />
          </div>

          <div className="pt-4 flex justify-center md:justify-start">
            <SocialIcons />
          </div>
        </div>
      </div>

      {showTerminal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Terminal onClose={handleCloseTerminal} />
        </div>
      )}
    </div>
  );
};

Hero.propTypes = {
  showTerminal: PropTypes.bool.isRequired,
  handleShowTerminal: PropTypes.func.isRequired,
  handleCloseTerminal: PropTypes.func.isRequired,
};

export default Hero;
