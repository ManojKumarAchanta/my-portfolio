import { projects } from "../constants/constants";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900"
      >
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white text-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative group aspect-[5/3] overflow-hidden bg-gray-100">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 "
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-black mb-3 line-clamp-1">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm line-clamp-3 h-[60px]">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-black text-white rounded-full border border-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
