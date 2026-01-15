import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "DAZN",
      position: "Software Development Intern",
      location: "Hyderabad, India",
      duration: "Dec 2025 – Present",
      description:
      "As a Software Development Intern at DAZN, I worked on building and improving scalable web applications for a high-traffic sports streaming platform. I contributed to frontend features, backend services, and API integrations with a focus on performance, reliability, and clean architecture.",
      // No projects here — handled safely
    },
    {
      company: "Kaushika Krishna Consultancy",
      position: "Full Stack Development Intern",
      location: "Tadepalligudem, Andhra Pradesh",
      duration: "Feb 2025 – Present",
      description:
        "As a Full Stack Development Intern, I worked on end-to-end development of web applications. I contributed to scalable platform architecture, developed user-facing features, and integrated backend systems using the MERN stack (MongoDB, Express.js, React, Node.js).",
      projects: [
        {
          name: "BagDash Platform",
          description:
            "An all-in-one platform for order aggregation, custom websites & mobile apps, and surveillance solutions for liquor and convenience stores.",
          logo:
            "https://media.licdn.com/dms/image/v2/D560BAQENRrqferMSzg/company-logo_200_200/B56ZUh.th6GoAI-/0/1740031842706/bagndash_logo",
          technologies: ["React", "Node.js", "MongoDB", "Express.js"],
          features: [
            "Order Aggregation System",
            "Custom Website & Mobile App",
            "Surveillance Platform",
            "POS Integration",
          ],
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Work Experience
          </h2>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 md:p-8 bg-white shadow-lg border border-gray-200"
            >
              {/* Experience Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="p-3 rounded-full mr-4 bg-gray-100">
                    <Briefcase className="w-6 h-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end space-y-2">
                  {exp.duration && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-600">
                        {exp.duration}
                      </span>
                    </div>
                  )}
                  {exp.location && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-600">
                        {exp.location}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {exp.description && (
                <p className="text-base md:text-lg mb-6 text-gray-600">
                  {exp.description}
                </p>
              )}

              {/* Projects Section (Safe) */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="space-y-6">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                    Projects Worked On
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    {exp.projects.map((project) => (
                      <div
                        key={project.name}
                        className="rounded-xl p-6 bg-gray-50 border border-gray-200"
                      >
                        {/* Project Header */}
                        <div className="flex items-center mb-4">
                          {project.logo && (
                            <img
                              src={project.logo}
                              alt={project.name}
                              className="w-12 h-12 mr-4 rounded-lg object-contain"
                            />
                          )}
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900">
                              {project.name}
                            </h5>
                            {project.description && (
                              <p className="text-sm text-gray-600">
                                {project.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Technologies */}
                        {project.technologies?.length > 0 && (
                          <div className="mb-4">
                            <h6 className="text-sm font-medium mb-2 text-gray-900">
                              Technologies Used
                            </h6>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Features */}
                        {project.features?.length > 0 && (
                          <div>
                            <h6 className="text-sm font-medium mb-2 text-gray-900">
                              Key Features
                            </h6>
                            <ul className="space-y-1">
                              {project.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="text-xs flex items-center text-gray-600"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full mr-2 bg-gray-800" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
