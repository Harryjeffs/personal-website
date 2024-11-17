import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

export function Contact() {
  // Set/Get server response
  const [serverResponse, setServerResponse] = useState<string | null>(null);

  // Set/Get form data
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    type: "harryjeffs.com",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Post to bff endpoint
    fetch("https://bff.bricksee.app/contact/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setServerResponse(data.message);
        setFormData({
          email: "",
          message: "",
          type: "harryjeffs.com",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(formData);
  };

  return (
    <section className="py-10">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Let's Connect
        </h2>

        {serverResponse && (
          <div
            role="alert"
            className="mb-4 relative flex w-full p-3 text-sm text-white bg-blue-600 rounded-md"
          >
            {serverResponse}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
