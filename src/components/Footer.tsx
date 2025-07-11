import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`${
      isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } border-t py-8 transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`${
            isDark ? 'text-gray-400' : 'text-gray-600'
          } flex items-center justify-center space-x-2`}>
            <span>© 2025 Dheeraj Sure</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;