import { useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import toast from "react-hot-toast";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
const ContactMe = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const form = useRef(); // Use useRef for the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      emailjs.sendForm(
        "service_hzso9dr", // Replace with your EmailJS Service ID
        "template_nabrfr8", // Replace with your EmailJS Template ID
        form.current,
        "K1QZF_ydxUt5aGavx" // Replace with your EmailJS Public Key
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (e) {
      toast.error("Something went wrong!" + e.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className={`py-16 md:py-20 ${isDarkMode ? "bg-[#0a192f]" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-violet-400" : "text-violet-600"
            }`}
          >
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    isDarkMode ? "bg-violet-500/20" : "bg-violet-100"
                  }`}
                >
                  <PhoneIcon
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-violet-400" : "text-violet-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Phone
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    +91 6304957172
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    isDarkMode ? "bg-violet-500/20" : "bg-violet-100"
                  }`}
                >
                  <EnvelopeIcon
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-violet-400" : "text-violet-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Email
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    } break-all`}
                  >
                    manojkumarachanta@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    isDarkMode ? "bg-violet-500/20" : "bg-violet-100"
                  }`}
                >
                  <MapPinIcon
                    className={`w-6 h-6 ${
                      isDarkMode ? "text-violet-400" : "text-violet-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Location
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={form}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-3 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-200 border-gray-700 focus:border-violet-500"
                      : "bg-white text-gray-800 border-gray-300 focus:border-violet-500"
                  } border focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-colors`}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full p-3 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-200 border-gray-700 focus:border-violet-500"
                      : "bg-white text-gray-800 border-gray-300 focus:border-violet-500"
                  } border focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-colors`}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full p-3 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-200 border-gray-700 focus:border-violet-500"
                      : "bg-white text-gray-800 border-gray-300 focus:border-violet-500"
                  } border focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-colors`}
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-3 px-6 rounded-lg ${
                  isDarkMode
                    ? "bg-violet-600 hover:bg-violet-700"
                    : "bg-violet-500 hover:bg-violet-600"
                } text-white font-semibold transition-colors`}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
