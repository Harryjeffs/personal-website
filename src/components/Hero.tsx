import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaAppStore, FaGithub, FaFilePdf } from 'react-icons/fa';
import React from 'react';

const socialLinks = [
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/harry-j-094399193/details/experience/?profileId=ACoAAC1w6jAB_u_P28HUm1N-6rNNmlsktWRX1kk',
    label: 'LinkedIn Profile'
  },
  {
    icon: FaTwitter,
    url: 'https://x.com/stupefystr',
    label: 'Twitter Profile'
  },
  {
    icon: FaGithub,
    url: 'https://github.com/Harryjeffs',
    label: 'Github Profile'
  },
  {
    icon: FaAppStore,
    url: 'https://apps.apple.com/me/developer/harry-jeffs/id1456114868',
    label: 'App Store Portfolio'
  }, 
  {
    icon: FaFilePdf,
    url: 'https://apps.apple.com/me/developer/harry-jeffs/id1456114868',
    label: 'Resume'
  }
];

export function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-hero-red to-hero-purple animate-gradient" />
        <div className="absolute inset-0 backdrop-blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex gap-4 mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Crafting Native iOS Experiences
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Senior iOS Developer specializing in Swift and SwiftUI, 
              with a passion for creating intuitive, performant & privacy focused applications. No trackers here!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <img 
              src="images/memoji-header.PNG" 
              alt="Developer Memoji"
              className="w-64 h-64 md:w-96 md:h-96 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}