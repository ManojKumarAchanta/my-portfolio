import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { certifications } from '../constants/constants';

const CertificationCard = ({ certification, index, isDarkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className={`group relative overflow-hidden rounded-xl shadow-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}
  >
    <div className="relative h-48 overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        src={certification.img}
        alt={certification.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>

    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className={`text-sm font-mono ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {certification.date}
        </span>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          isDarkMode 
            ? 'bg-gray-700 text-gray-300' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          {certification.issuer}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {certification.title}
      </h3>

      <p className={`mb-4 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {certification.description}
      </p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all"
      >
        <span>View Certificate</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </motion.a>
    </div>
  </motion.div>
);

const Certifications = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Certifications
            </span>
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Professional certifications and courses that have enhanced my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              certification={cert}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-12 p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-xl text-center`}
        >
          <h3 className="text-xl font-bold mb-4 font-mono bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Continuous Learning
          </h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Always expanding my knowledge and staying up-to-date with the latest technologies.
            Currently pursuing advanced courses in cloud computing and system design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
