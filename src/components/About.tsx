import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-6`}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } leading-relaxed text-center`}
            >
              I'm a full-stack developer with a background in Robotics and AI,
              passionate about building scalable web apps and backend systems.
            </p>

            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } leading-relaxed text-center`}
            >
              I enjoy designing clean architectures, working with microservices,
              and using tools like Docker, Kafka, and Prometheus. I'm always
              exploring new tech and love turning ideas into impactful products.{" "}
            </p>

            <div className="flex justify-center">
              <motion.a
                href="https://drive.google.com/file/d/12mzIolLo0PHE0WcE6f0R9CVlpMUuTkEW/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                <span>View Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
