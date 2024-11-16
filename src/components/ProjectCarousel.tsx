import { motion } from 'framer-motion';
import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  logo: string;
  tintColor: string;
  appStoreLink: string;
}

const professionalProjects: Project[] = [
  {
    id: 0,
    title: 'Australian Bureau of Statistics',
    description: 'Worked with a collobrative team that developed an internal app for ABS that helps support fieldworkers collect data for the Australian Census.',
    logo: 'images/abs-logo.png',
    tintColor: '#0d4e78',
    appStoreLink: '#'
  },
  {
    id: 1,
    title: 'Queensland Police Service',
    description: 'Worked on a large team to develop an app for QPS frontline officers to help them access critical information and resources when on duty. I optimised improvements to the CI which helped reduce build times by ~200%.',
    logo: 'images/qps-logo.png',
    tintColor: '#002148',
    appStoreLink: '#'
  },
  {
    id: 2,
    title: 'nib Health',
    description: 'I contributed to the development of the nib health insurance app in Australia by rewriting the Home Screen in SwiftUI, simplifying navigation and making it easier for users to explore their benefits and health credits. Additionally, I worked closely with the UX team to enhance the overall user experience, improving usability and ensuring the app met the needs of its users.',
    logo: 'images/nib-logo.png',
    tintColor: '#124b38',
    appStoreLink: '#'
  },
  {
    id: 3,
    title: 'GU Health',
    description: 'I contributed to improving the claims flow in both the nib and GU Health apps, focusing on enhancing usability and streamlining the process to make submitting claims more intuitive and efficient for users.',
    logo: 'images/gu-logo.png',
    tintColor: '#4194ac',
    appStoreLink: '#'
  },
  {
    id: 4,
    title: 'SEN',
    description: "As a key developer for the SEN app, I contributed to the creation of the leading sports media platform in Australia and New Zealand. My role involved developing robust code, implementing live content features, and ensuring a personalized and localized user experience. I played a vital role in integrating CarPlay enhancing the apps usability while driving. This involved seamless integration with the respective frameworks to provide a seamless sports media experience on the road",
    logo: 'images/sen-logo.png',
    tintColor: '#032133',
    appStoreLink: '#'
  },
  {
    id: 5,
    title: 'Quaddie',
    description: 'Implemented robust backend architecture to curate tips from industry experts and punters, while enabling users to contribute their own insights. Developed efficient search functionality for quick access to specific tracks and events. Seamlessly integrated with SEN Track through API integration, providing users with live audio feeds and engaging written content. Empowering users with valuable insights and comprehensive racing coverage through technical excellence.',
    logo: 'images/quaddie-logo.png',
    tintColor: '#d20909',
    appStoreLink: '#'
  },
  {
    id: 6,
    title: 'Melbourne United',
    description: 'The app features secure authentication and seamless access to personalized features like season tickets. Users can enjoy real-time updates, live scores, and immersive game day experiences. With advanced audio/video players and a robust backend-driven UI, the app ensures high-quality streaming and seamless content management.',
    logo: 'images/melb-united-logo.png',
    tintColor: '#0053ff',
    appStoreLink: '#'
  },
  {
    id: 7,
    title: 'Vision Christian Media',
    description: 'Experienced iOS Engineer adept at developing advanced applications. Created Vision Christian Media app with backend-driven UI, AVPlayer, and Apple CarPlay support. Seamlessly access live radio, devotions, podcasts, news, articles, videos, and Bible. Committed to user-friendly experiences.',
    logo: 'images/vcm-logo.png',
    tintColor: '#00a9df',
    appStoreLink: '#'
  }
];

const personalProjects: Project[] = [
  {
    id: 7,
    title: 'Bricksee',
    description: 'Beautiful weather forecasting app with custom animations',
    logo: 'images/bricksee-logo.png',
    tintColor: '#e0211a',
    appStoreLink: '#'
  },
  {
    id: 8,
    title: 'Metalingual',
    description: 'Personal task management with custom widgets',
    logo: 'images/metalingual-logo.png',
    tintColor: '#13182e',
    appStoreLink: '#'
  },
  {
    id: 9,
    title: 'Syncula',
    description: 'Personal task management with custom widgets',
    logo: 'images/syncula-logo.png',
    tintColor: '#02b147',
    appStoreLink: '#'
  }
];

function ProjectSection({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <div className="mb-20">
      <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-8 text-white"
      >
        {title}
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1
            }}
          >
            <div 
              className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-6 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <div 
                      className="absolute inset-0 rounded-xl blur-xl"
                      style={{ backgroundColor: project.tintColor }}
                    />
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <img 
                        src={project.logo}
                        alt={project.title}
                        className="w-full h-full object-fit"
                      />
                    </div>
                  </div>
                  
                  <h3 
                    className="text-xl font-bold text-white"
                  >
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <a 
                  href={project.appStoreLink}
                  className="inline-block px-4 py-2 rounded-lg text-white text-sm transition-transform hover:scale-105 self-start"
                  style={{ 
                    backgroundColor: project.tintColor,
                    color: 'white' // Ensuring text is always white for contrast
                  }}
                >
                  View on App Store
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProjectCarousel() {
  return (
    <section className="py-10">
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center text-white"
      >
        Projects
      </motion.h2>
      
      <ProjectSection title="Professional Work" projects={professionalProjects} />
      <ProjectSection title="Personal Projects" projects={personalProjects} />
    </section>
  );
}