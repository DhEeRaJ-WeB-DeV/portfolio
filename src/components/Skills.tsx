import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Layout, 
  Monitor, 
  Server, 
  Wrench,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills: React.FC = () => {
  const { isDark } = useTheme();
  
const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="text-blue-400" size={32} />,
    description: 'Languages I use for backend, scripting, and web development.',
    skills: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' }
    ]
  },
  {
    title: 'Front-End',
    icon: <Monitor className="text-blue-500" size={32} />,
    description: 'Tools and frameworks I use to build interactive UIs.',
    skills: [
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://logo.svgcdn.com/l/tailwindcss-icon.svg' },
      { name: 'DaisyUI', logo: 'https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg' },
      { name: 'Framer Motion', logo: 'https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png' }
    ]
  },
  {
    title: 'Back-End',
    icon: <Server className="text-blue-600" size={32} />,
    description: 'Technologies I use to build scalable backend services.',
    skills: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Python (Django)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Go (Golang)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'REST API', logo: 'https://img.icons8.com/fluency/48/api-settings.png' },
      { name: 'WebSockets', logo: 'https://cdn.iconscout.com/icon/free/png-256/websocket-3521041-2945239.png' }
    ]
  },
  {
    title: 'Databases',
    icon: <Database className="text-blue-700" size={32} />,
    description: 'Databases I use for storage and data management.',
    skills: [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Kafka', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: <Wrench className="text-blue-700" size={32} />,
    description: 'Tools I use for version control, containers, and observability.',
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
      { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
      { name: 'Loki', logo: 'https://raw.githubusercontent.com/grafana/loki/main/docs/sources/logo.png' }
    ]
  },
  {
    title: 'Architecture',
    icon: <Layout className="text-blue-800" size={32} />,
    description: 'Approaches and principles I follow in building software.',
    skills: [
      { name: 'Microservices', logo: 'https://cdn-icons-png.flaticon.com/512/4209/4209100.png' },
      { name: 'System Design', logo: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png' },
      { name: 'Design Patterns', logo: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' },
      { name: 'JWT Auth', logo: 'https://cdn.iconscout.com/icon/free/png-512/jwt-3-1175140.png' }
    ]
  }
];


  return (
    <section id="skills" className={`py-20 ${
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${
                isDark ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
              } p-6 rounded-xl transition-all duration-300 hover:shadow-xl`}
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className={`text-xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                {category.title}
              </h3>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } text-sm mb-6`}>
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className={`${
                      isDark 
                        ? 'bg-gray-800 text-gray-300 hover:bg-blue-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-600'
                    } hover:text-white px-3 py-1 rounded-full text-sm transition-colors cursor-default flex items-center space-x-1`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-4 h-4"
                    />
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;