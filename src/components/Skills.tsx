import { motion } from 'framer-motion';

interface Skill {
  skill: string;
  years: string;
}

const skills: Skill[] = [
  { skill: 'Swift', years: '5 years' },
  { skill: 'SwiftUI', years: '3 years' },
  { skill: 'UIKit', years: '4 years' },
];

export function Skills() {
  return (
    <section className="py-20">
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 dark:text-white"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((item, index) => (
          <motion.div
            key={item.skill}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-red-500 mb-2">{item.skill}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.years}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}