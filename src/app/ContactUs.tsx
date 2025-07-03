import Image from "next/image";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import { Divider } from "antd";

type Props = {};

const ContactUs = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@inoor.com",
      href: "mailto:hello@inoor.com",
      delay: 0.2,
    },
    {
      icon: "📱",
      label: "WhatsApp",
      value: "+66 XXX XXX XXX",
      href: "https://wa.me/66XXXXXXXXX",
      delay: 0.3,
    },
    {
      icon: "🌐",
      label: "Website",
      value: "www.inoor.com",
      href: "https://www.inoor.com",
      delay: 0.4,
    },
    {
      icon: "📍",
      label: "Locations",
      value: "Bangkok, Thailand – Dubai, UAE",
      href: null,
      delay: 0.5,
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@inoor_beauty",
      href: "https://instagram.com/inoor_beauty",
      delay: 0.6,
    },
  ];

  return (
    <>
      <div className="flex flex-col pb-8 md:pb-16 justify-between px-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-charcoal-500 flex flex-row justify-center"
        >
          <div className="sm:w-[35%] border-b-2 border-charcoal-500" />
          <p className="sm:w-[30%] text-center">Contact Us</p>
          <div className="sm:w-[35%] border-b-2 border-charcoal-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -180 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-2"
        >
          Get in Touch
        </motion.div>
      </div>

      {/* Contact Methods Grid */}
      <div className="flex flex-col pb-8 md:pb-16 justify-between items-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl justify-items-center">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.5,
                  delay: method.delay,
                },
              }}
              viewport={{ once: true }}
              className="duration-200 hover:scale-105 hover:-translate-y-2 bg-white rounded-xl shadow-lg p-6 w-full max-w-sm"
            >
              {method.href ? (
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center group"
                >
                  <div className="text-4xl sm:text-5xl mb-4 group-hover:animate-bounce">
                    {method.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-charcoal-500">
                    {method.label}
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-600 group-hover:text-blue-600 transition-colors">
                    {method.value}
                  </p>
                </a>
              ) : (
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-charcoal-500">
                    {method.label}
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-600">
                    {method.value}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <Divider style={{ border: "1px solid" }} />

      {/* Contact Form */}
      <div className="flex flex-col pb-12 md:pb-24 justify-between items-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 text-charcoal-500"
        >
          Send us a Message
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="name"
                className="block text-lg sm:text-xl font-semibold text-charcoal-500 mb-2"
              >
                📝 Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-lg"
                placeholder="Your full name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="email"
                className="block text-lg sm:text-xl font-semibold text-charcoal-500 mb-2"
              >
                📧 Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-lg"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="message"
                className="block text-lg sm:text-xl font-semibold text-charcoal-500 mb-2"
              >
                💬 Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-lg resize-vertical"
                placeholder="Tell us how we can help you..."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                type="submit"
                className="bg-gradient-to-tr from-gold-700 to-gold-500 text-white font-bold py-4 px-8 rounded-lg text-lg sm:text-xl hover:to-gold-700 hover:from-gold-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message ✨
              </button>
            </motion.div>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-600"
        >
          <p className="text-lg">We'll get back to you within 24 hours! 🚀</p>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
