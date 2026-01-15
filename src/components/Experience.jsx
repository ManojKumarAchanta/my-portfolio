import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {

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
        features: ["Order Aggregations", "Custom Website & Mobile App", "Surveillance Platform", "POS System"]
      },
    ]
  };

  return (
    <section className="min-h-screen py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Work Experience
          </h2>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Experience Card */}
          <div
            className="rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-lg border border-gray-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="p-3 rounded-full mr-4 bg-gray-100">
                  <Briefcase className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {experience.position}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700">
                    {experience.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end space-y-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                  <span className="text-sm text-gray-600">
                    {experience.duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                  <span className="text-sm text-gray-600">
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg mb-6 text-gray-600">
              {experience.description}
            </p>

            {/* Projects Section */}
            <div className="space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                Projects Worked On
              </h4>

              <div className="grid md:grid-cols-2 justify-center gap-6">
                {experience.projects.map((project) => (
                  <div
                    key={project.name}
                    className="rounded-xl p-6 bg-gray-50 border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                        className="w-12 h-12 mr-4 rounded-lg"
                      />
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900">
                          {project.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h6 className="text-sm font-medium mb-2 text-gray-900">
                        Technologies Used
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h6 className="text-sm font-medium mb-2 text-gray-900">
                        Key Features
                      </h6>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-xs flex items-center text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full mr-2 bg-gray-800"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
