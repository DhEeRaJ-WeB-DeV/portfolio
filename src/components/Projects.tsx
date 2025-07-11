import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Image } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  
  const projects = [
    {
      title: 'REAL-TIME CHAT APP',
      description: 'Developed a real-time messaging app with WebSocket communication and secure JWT-based authentication. Allows users to sign in, exchange messages instantly, and receive in-app notifications.',
      tech: ['React.js', 'Zustand', 'Tailwind CSS', 'Node.js', 'Express.js','MongoDB',' Socket.IO',' JWT'],
      sourceCode: 'https://github.com/DhEeRaJ-WeB-DeV/MERN-ChatApp',
      liveWebsite: 'https://mern-chatapp-gshr.onrender.com',
      image: `${import.meta.env.BASE_URL}/Screenshot 2025-07-11 213447.png`
    },
    {
      title: 'A SIMPLE NOTES APPLICATION',
      description: ' Developed a basic CRUD notes app to create, update, and delete notes with a clean UI and REST API integration.',
      tech: ['React.js', 'Django', 'Django REST Framework', 'CSS', 'Axios'],
      sourceCode: 'https://github.com/DhEeRaJ-WeB-DeV/Django_React',
      liveWebsite: null,
      image: `${import.meta.env.BASE_URL}Screenshot 2025-07-11 215416.png`
    },
    {
      title: 'E-COMMERCE ONLINE STORE',
      description: 'Built a visually appealing e-commerce frontend with product listing, filtering, shopping cart functionality, and dynamic UI updates.',
      tech: [' React.js', 'css'],
      sourceCode: 'https://github.com/DhEeRaJ-WeB-DeV/React-Tutorial-Projects/tree/main/OnlineStore',
      liveWebsite: null,
      image: `${import.meta.env.BASE_URL}Screenshot 2025-07-11 213020.png`
    },
    {
      title: 'Todo List',
      description: 'A simple and responsive Todo List app built with React, TypeScript, and Tailwind CSS. Uses Zustand for efficient and scalable state management.',
      tech: ['React.js', 'Tailwind CSS', 'TypeScript', 'Zustand'],
      sourceCode: 'https://github.com/DhEeRaJ-WeB-DeV/React-Tutorial-Projects/tree/main/zustand/Todolist',
      liveWebsite: null,
      image: `${import.meta.env.BASE_URL}Screenshot-2025-07-11-212729.png`
    },
    {
      title: 'Recipie App',
      description: 'A clean and user-friendly Recipe App built with React, TypeScript, and Tailwind CSS. Manages state using Zustand and displays dynamic recipe details with smooth UI interactions.',
      tech: ['React.js', 'Tailwind CSS', 'TypeScript', 'Zustand'],
      sourceCode: 'https://github.com/DhEeRaJ-WeB-DeV/React-Tutorial-Projects/tree/main/zustand/Recipie%20App',
      liveWebsite: null,
      image: `${import.meta.env.BASE_URL}Screenshot 2025-07-11 212826.png`
    },
    
  ];

  return (
    <section id="projects" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-white'
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4">
                    <Image className="text-white" size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-3`}>
                  {project.title}
                </h3>
                <p className={`${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } text-sm mb-4 leading-relaxed`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.filter(Boolean).map((tech) => (
                    <span
                      key={tech}
                      className={`${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      } px-2 py-1 rounded text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.sourceCode}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span className="text-sm">Source Code</span>
                  </motion.a>
                  
                  {project.liveWebsite && (
                    <motion.a
                      href={project.liveWebsite}
                      className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Website</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;