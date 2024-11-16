import { motion } from 'framer-motion';
import { FaAppStore } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  delay?: number;
}

const projects: Project[] = [
  {
    title: 'FitTracker Pro',
    description: 'A comprehensive fitness tracking application with HealthKit integration, helping users achieve their fitness goals.'
  },
  {
    title: 'CryptoWatch',
    description: 'Real-time cryptocurrency monitoring with custom widgets and price alerts.',
    delay: 0.2
  }
];

export function Projects() {
  return (
    <section className="py-20">
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 dark:text-white"
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: project.delay }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <a href="#" className="inline-flex items-center text-red-500 hover:text-red-600">
              <FaAppStore className="mr-2" />
              View on App Store
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}