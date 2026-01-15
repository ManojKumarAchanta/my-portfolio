import PropTypes from "prop-types";
const Card = props => {
  const { title, description, img, github, url } = props;
  const openPage = (link) => {
    window.location.href = link;
  };
  return (
    <div className="w-full px-8 bg-gray-900 text-white p-6 rounded-xl shadow-2xl m-auto transition-transform transform hover:scale-105">
      <div>
        <img
          src={img}
          alt={title}
          className="rounded-lg w-full h-48 object-cover filter "
        />
      </div>
      <div className="my-6">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="text-md text-gray-300">{description}</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => openPage(url)}
          className="bg-white text-black px-6 py-3 rounded-xl text-lg shadow-md hover:bg-gray-200"
        >
          Go live
        </button>
        <button
          onClick={() => openPage(github)}
          className="text-white border border-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-white hover:text-black"
        >
          Github
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
