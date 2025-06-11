import { motion } from "framer-motion";

interface Role {
  role: string;
  period: string;
  year: number;
  description: string;
}

interface Experience {
  company: string;
  logo: string;
  roles: Role[];
}

const experiences: Experience[] = [
  {
    company: "Harry Jeffs",
    logo: "images/memoji-header.PNG",
    roles: [{
      role: "Fullstack developer",
      period: "Jan 2017 - Present",
      year: 2025,
      description:
        "Having created my first website when Limewire was still around to track my scouts achievements, to building an online portal that helped grow a dying games community; I have always been passionate about creating simple & performant applications that users enjoy and use.",
    }]
  },
  {
    company: "Concentrix Catalyst",
    logo: "images/cnx-logo.png",
    roles: [
      {
        role: "Senior iOS Engineer",
        period: "May 2025 - Present",
        year: 2025,
        description: "Continuing to work on impactful projects such as ABS and QPS, while mentoring team members and leading technical initiatives. Leading the introduction of structured concurrency and SwiftUI to the team.",
      },
      {
        role: "iOS Engineer",
        period: "Aug 2023 - May 2025",
        year: 2024,
        description: "At Concentrix Catalyst, I worked on impactful projects such as ABS and QPS, where I applied my expertise to deliver life-saving applications. My dedication and contributions were recognized by my peers, highlighting my commitment to excellence and collaboration.",
      },
    ]
  },
  {
    company: "nib Health Funds",
    logo: "images/nib-logo.png",
    roles: [{
      role: "iOS Engineer",
      period: "March 2022 - Aug 2023",
      year: 2018,
      description:
        "At nib Health, I worked on a range of health insurance apps, contributing to key projects that enhanced user experience and streamlined functionalities, such as claims processing and benefit exploration. My work focused on improving usability and ensuring seamless interactions for users.",
    }]
  },
  {
    company: "Sports Entertainment Network",
    logo: "images/sen-logo.png",
    roles: [{
      role: "Junior iOS Engineer",
      period: "Jan 2021 - March 2022",
      year: 2016,
      description:
        "At Sports Entertainment Network, I worked on a variety of apps like Quaddie, SEN, Melbourne United, and Vision Christian Media. I focused on creating practical solutions that met the unique needs of different audiences, helping to deliver great experiences for users. I worked a lot with different technologies to bring these apps to life.",
    }]
  },
  {
    company: "Overdose Digital",
    logo: "images/overdose.png",
    roles: [{
      role: "Junior Frontend Developer",
      period: "Oct 2019 - May 2020",
      year: 2019,
      description:
        "I worked with an international team working on high profile client Shopify stores. Utalising Liquid, JQuery, and SCSS to create custom themes and features. I also worked on internal tools to help streamline SEO improvements for all client sites.",
    }]
  }
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
        Companies
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
              <div className="space-y-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4">
                  <motion.img
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    src={exp.logo}
                    alt={exp.company}
                    className="w-16 h-16 object-contain rounded-xl"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                  </div>
                </div>
                
                {/* Roles */}
                <div className="space-y-4">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative flex gap-4">
                      {/* Timeline indicator */}
                      {exp.roles.length > 1 && (
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-blue-400 rounded-full border-2 border-white/20"></div>
                          {roleIndex < exp.roles.length - 1 && (
                            <div className="w-px h-20 bg-gradient-to-b from-blue-400/80 to-transparent mt-2"></div>
                          )}
                        </div>
                      )}
                      
                      {/* Role content */}
                      <div className={`flex-1 pb-4 ${exp.roles.length === 1 ? 'ml-0' : ''}`}>
                        <h4 className="text-white font-semibold">{role.role}</h4>
                        <p className="text-blue-300 text-sm font-medium">{role.period}</p>
                        <p className="text-gray-300 mt-2 leading-relaxed">{role.description}</p>
                      </div>
                    </div>
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

