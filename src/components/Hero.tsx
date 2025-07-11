import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`min-h-screen flex items-center justify-center ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    } relative overflow-hidden transition-colors duration-300`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 ${
          isDark ? 'bg-blue-500/30' : 'bg-blue-300/40'
        } rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${
          isDark ? 'bg-blue-700/30' : 'bg-blue-400/40'
        } rounded-full blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className={`text-5xl md:text-7xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-6`}
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Dheeraj Sure
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-xl md:text-2xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } mb-8 max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Robotics and AI Student from India passionate about technology and innovation
          </motion.p>

          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/12ogFYqdCjuIkTryfGu8BQ8hPTPEaW9LT/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 border ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:text-white hover:border-gray-400' 
                  : 'border-gray-400 text-gray-700 hover:text-gray-900 hover:border-gray-600'
              } px-8 py-3 rounded-full font-semibold transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              <span>View Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;