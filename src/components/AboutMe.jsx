

const AboutMe = () => {
  // const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    "MongoDB", "Express.js", "React", "Node.js",
    "Java", "Python", "C++", "DSA"
  ];

  return (
    <section id="about" className="min-h-screen py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left placeholder column to keep layout */}
          {/* <div className="relative flex justify-center items-center order-2 md:order-1">
            <div className="w-full max-w-md mx-auto h-64 md:h-80 border border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50">
              <span className="text-sm uppercase tracking-widest text-gray-500">
                Profile
              </span>
            </div>
          </div> */}

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <div className="space-y-4 text-base md:text-lg text-gray-700">
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
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm md:text-base bg-gray-100 text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
