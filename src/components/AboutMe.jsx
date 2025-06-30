import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/animation.json";

const AboutMe = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    "MongoDB", "Express.js", "React", "Node.js",
    "Java", "Python", "C++", "DSA"
  ];

  return (
    <section id="about" className={`min-h-screen py-16 md:py-20 ${isDarkMode ? 'bg-[#0a192f]/50' : 'bg-gray-50/50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Lottie Animation Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center order-2 md:order-1"
          >
            <div className="w-full max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full aspect-square"
              >
                <Player
                  autoplay
                  loop
                  src={animationData}
                  className="w-full h-full"
                />
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -right-4 md:-right-8 top-1/4 bg-violet-500/90 p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                className="absolute -left-4 md:-left-8 bottom-1/4 bg-indigo-500/90 p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className={`space-y-4 text-base md:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                I am a dedicated Full Stack Developer specializing in the MERN stack, with strong skills in building scalable and performant web applications.
                I excel in creating dynamic user interfaces using React.js and developing robust backend services with Node.js and Express.js.
              </p>
              <p>
                Experienced in designing secure authentication systems with JWT, managing application state using Redux and Zustand,
                and deploying projects efficiently on cloud platforms like Vercel.
                Additionally, I have explored and worked with over five different Linux distributions as well as Windows,
                enhancing my versatility and understanding of diverse development environments.
                I am passionate about solving complex problems and delivering clean, maintainable code that enhances user experiences.
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className={`text-xl md:text-2xl font-semibold mb-4 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`px-4 py-2 rounded-full text-sm md:text-base ${isDarkMode
                        ? 'bg-violet-500/20 text-violet-300'
                        : 'bg-violet-100 text-violet-600'
                      }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
