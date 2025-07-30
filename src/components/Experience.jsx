import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const experience = {
    company: "Kaushika Krishna Consultancy",
    position: "Full Stack Development Intern",
    location: "Tadepalligudem, Andhra Pradesh",
    duration: "2025 Feb - Present",
    description: "As a Full Stack Development Intern, I worked on end-to-end development of web applications. I contributed to scalable platform architecture, developed user-facing features, and integrated backend systems using the MERN stack (MongoDB, Express.js, React, Node.js). ",
    projects: [
      {
        name: "BagDash Platform",
        description: "The All-In-One Platform for Order aggregations, Custom Website & Mobile App, Surveillance Platform for Liquor and convenience stores.",
        logo: "https://media.licdn.com/dms/image/v2/D560BAQENRrqferMSzg/company-logo_200_200/B56ZUh.th6GoAI-/0/1740031842706/bagndash_logo?e=1756944000&v=beta&t=4BPkvgYDSEv7q-Xv94IiOggHZVTHgLacivDCjmJaxSk",
        technologies: ["React", "Node.js", "MongoDB", "Express.js"],
        features: ["Order Aggregations", "Custom Website & Mobile App", "Surveillance Platform","POS System"]
      },
    ]
  };

  return (
    <section className={`min-h-screen py-16 md:py-20 ${isDarkMode ? 'bg-[#0a192f]/50' : 'bg-gray-50/50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`}>
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 md:p-8 mb-8 ${
              isDarkMode 
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' 
                : 'bg-white shadow-lg border border-gray-200'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className={`p-3 rounded-full mr-4 ${
                  isDarkMode ? 'bg-violet-500/20' : 'bg-violet-100'
                }`}>
                  <Briefcase className={`w-6 h-6 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {experience.position}
                  </h3>
                  <p className={`text-lg font-semibold ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                    {experience.company}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end space-y-2">
                <div className="flex items-center">
                  <Calendar className={`w-4 h-4 mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {experience.duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className={`w-4 h-4 mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            <p className={`text-base md:text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {experience.description}
            </p>

            {/* Projects Section */}
            <div className="space-y-6">
              <h4 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                Projects Worked On
              </h4>
              
              <div className="grid md:grid-cols-2 justify-center gap-6">
                {experience.projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`rounded-xl p-6 ${
                      isDarkMode 
                        ? 'bg-gray-700/50 border border-gray-600' 
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <img 
                        src={project.logo} 
                        alt={`${project.name} logo`}
                        className="w-12 h-12 mr-4 rounded-lg"
                      />
                      <div>
                        <h5 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {project.name}
                        </h5>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h6 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                        Technologies Used
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full ${
                              isDarkMode 
                                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                                : 'bg-violet-100 text-violet-700 border border-violet-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h6 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                        Key Features
                      </h6>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className={`text-xs flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              isDarkMode ? 'bg-violet-400' : 'bg-violet-600'
                            }`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 