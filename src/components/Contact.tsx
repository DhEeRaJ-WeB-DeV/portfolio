import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: 'Email',
      value: 'dheerajsure595@gmail.com',
      link: 'mailto:dheerajsure595@gmail.com'
    },
    {
      icon: <Phone className="text-blue-500" size={24} />,
      title: 'Phone',
      value: '+91 7204552865',  
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/DhEeRaJ-WeB-DeV',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dheeraj-sure/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    } transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          } mb-6`}>
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
          <p className={`${
            isDark ? 'text-gray-400' : 'text-gray-600'
          } text-lg max-w-2xl mx-auto`}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className={`text-2xl font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-6`}>
              Contact Information
            </h3>
            
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className={`${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                } p-3 rounded-full`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className={`${
                    isDark ? 'text-white' : 'text-gray-900'
                  } font-medium`}>{item.title}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className={`${
                        isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      } transition-colors`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={`${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h4 className={`${
                isDark ? 'text-white' : 'text-gray-900'
              } font-medium mb-4`}>Connect with me:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;