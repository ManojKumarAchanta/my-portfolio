
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../App";
import {
  Atom,
  Server,
  Database,
  Code,
  Settings,
  Terminal,
  Cloud,
  Layers,
  MoveDiagonal,
  ChevronRightSquare,
  GitBranch,
  PaintBucket,
} from "lucide-react";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    { name: "React", icon: Atom, color: "#61DAFB" },
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "JavaScript", icon: Code, color: "#F7DF1E" },
    { name: "Python", icon: Terminal, color: "#3776AB" },
    { name: "Java", icon: ChevronRightSquare, color: "#007396" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "PostgreSQL", icon: Database, color: "#336791" },
    { name: "Redis", icon: MoveDiagonal, color: "#DC382D" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "TailwindCSS", icon: PaintBucket, color: "#06B6D4" },
    { name: "SQL", icon: Database, color: "#4479A1" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          Technical Skills
        </h2>
        <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Technologies I work with
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 max-w-5xl mx-auto"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className={`flex flex-col items-center p-4 rounded-xl ${
              isDarkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/50 hover:bg-gray-50/50"
            } backdrop-blur-sm shadow-lg`}
          >
            <skill.icon className="w-12 h-12 mb-3" style={{ color: skill.color }} />
            <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
