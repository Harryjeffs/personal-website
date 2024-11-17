import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    company: "Concentrix Catalyst",
    logo: "images/cnx-logo.png",
    role: "iOS Engineer",
    period: "Aug 2023 - Present",
    year: 2024,
    description:
      "At Concentrix Catalyst, I have worked on impactful projects such as ABS and QPS, where I applied my expertise to deliver high-quality solutions. My dedication and contributions have been recognized with peer awards, highlighting my commitment to excellence and collaboration.",
    technologies: ["Combine", "Atomic UI", "CoreML", "Jenkins", "DocC", "MDM"],
  },
  {
    company: "nib Health Funds",
    logo: "images/nib-logo.png",
    role: "iOS Engineer",
    period: "March 2022 - Aug 2023",
    year: 2018,
    description:
      "At nib Health, I worked on a range of health insurance apps, contributing to key projects that enhanced user experience and streamlined functionalities, such as claims processing and benefit exploration. My work focused on improving usability and ensuring seamless interactions for users.",
    technologies: ["SwiftUI", "Core Animation", "PassKit"],
  },
  {
    company: "Sports Entertainment Network",
    logo: "images/sen-logo.png",
    role: "Junior iOS Engineer",
    period: "Jan 2021 - March 2022",
    year: 2016,
    description:
      "At Sports Entertainment Network, I worked on a variety of apps like Quaddie, SEN, Melbourne United, and Vision Christian Media. I focused on creating practical solutions that met the unique needs of different audiences, helping to deliver great experiences for users. I worked a lot with different technologies to bring these aopps to life.",
    technologies: [
      "Objective-C",
      "Firebase",
      "Carplay",
      "Apple Watch",
      "AVKit",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-10">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-16 text-white text-center"
      >
        Professional Journey
      </motion.h2>

      <div className="relative">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Mobile layout */}
              <div className="space-y-2 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4">
                  <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    src={exp.logo}
                    alt={exp.company}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-gray-300">{exp.role}</p>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                  </div>
                </div>
                <p className="text-gray-400">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
