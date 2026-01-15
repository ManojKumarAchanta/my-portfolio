import {
  Atom,
  Server,
  Database,
  Code,
  Terminal,
  MoveDiagonal,
  ChevronRightSquare,
  GitBranch,
  PaintBucket,
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "React", icon: Atom },
    { name: "Node.js", icon: Server },
    { name: "JavaScript", icon: Code },
    { name: "Python", icon: Terminal },
    { name: "Java", icon: ChevronRightSquare },
    { name: "MongoDB", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Redis", icon: MoveDiagonal },
    { name: "Git", icon: GitBranch },
    { name: "TailwindCSS", icon: PaintBucket },
    { name: "SQL", icon: Database },
  ];

  return (
    <div className="min-h-screen py-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-600">
          Technologies I work with
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <skill.icon className="w-12 h-12 mb-3 " />
            <span className="text-sm font-medium text-gray-700">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
