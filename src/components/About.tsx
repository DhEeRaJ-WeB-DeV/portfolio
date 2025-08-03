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
              I'm a software developer with a background in Robotics and AI,
              passionate about building scalable web apps and backend systems.
            </p>

            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } leading-relaxed text-center`}
            >
              I enjoy writing clean, maintainable code and working with tools
              like Docker and Prometheus for development and monitoring.
              I'm always eager to explore new technologies and turn ideas into
              real, impactful products.{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
