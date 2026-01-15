import { certifications } from '../constants/constants';

const CertificationCard = ({ certification, index }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-xl bg-white">
    <div className="relative h-48 overflow-hidden">
      <img
        src={certification.img}
        alt={certification.title}
        className="w-full h-full object-cover "
      />
    </div>

    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-mono text-gray-500">
          {certification.date}
        </span>
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
          {certification.issuer}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 text-gray-900">
        {certification.title}
      </h3>

      <p className="mb-4 text-gray-600">
        {certification.description}
      </p>

      <a
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition-all"
      >
        <span>View Certificate</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
);

const Certifications = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and courses that have enhanced my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              certification={cert}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-white shadow-xl text-center border border-gray-200">
          <h3 className="text-xl font-bold mb-4 font-mono text-gray-900">
            Continuous Learning
          </h3>
          <p className="text-gray-600">
            Always expanding my knowledge and staying up-to-date with the latest technologies.
            Currently pursuing advanced courses in cloud computing and system design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
