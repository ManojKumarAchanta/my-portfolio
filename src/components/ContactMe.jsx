import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
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
      className="py-16 md:py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Contact Me
          </h2>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-gray-100">
                  <PhoneIcon
                    className="w-6 h-6 text-gray-800"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Phone
                  </h3>
                  <p className="text-gray-700">
                    +91 6304957172
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-gray-100">
                  <EnvelopeIcon
                    className="w-6 h-6 text-gray-800"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Email
                  </h3>
                  <p
                    className="text-gray-700 break-all"
                  >
                    manojkumarachanta@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-gray-100">
                  <MapPinIcon
                    className="w-6 h-6 text-gray-800"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Location
                  </h3>
                  <p className="text-gray-700">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
              </div>

            {/* Contact Form */}
            <form
              ref={form}
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
                  className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
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
                  className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
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
                  className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-black hover:bg-gray-900 text-white font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
