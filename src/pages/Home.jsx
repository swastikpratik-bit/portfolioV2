import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowDown , FaWhatsapp} from "react-icons/fa";
import { HiCode, HiDesktopComputer, HiLightBulb } from "react-icons/hi";
import ResumeCard from "../components/ResumeCard";

const Home = () => {
  const features = [
    {
      icon: HiCode,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: HiDesktopComputer,
      title: "Responsive Design",
      description: "Creating beautiful interfaces that work on all devices",
    },
    {
      icon: HiLightBulb,
      title: "Innovation",
      description: "Bringing creative solutions to complex problems",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-400"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    Swastik Pratik
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                  Software Engineer
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                  I create exceptional digital experiences through modern web
                  technologies. Passionate about building scalable applications
                  and beautiful user interfaces.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start mb-8"
              >
                <Link
                  to="/projects"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  View My Work
                </Link>
                <ResumeCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center lg:justify-start space-x-6"
              >
                <a
                  href="https://github.com/swastikpratik-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/swastikpratiksingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/9335178511?text=Hi%20I%20saw%20your%20portfolio%20website!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-2 animate-float">
                  <img
                    src="/mee.jpeg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 opacity-20 animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaArrowDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I specialize in creating modern, scalable web applications with a
              focus on user experience and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              I'm always excited to work on new projects and collaborate with
              talented individuals.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
