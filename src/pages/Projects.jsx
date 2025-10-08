import { motion } from "framer-motion";
import { useState } from "react";
import ProjectV2 from "../components/ProjectV2";
import { projects } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("featured");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of projects I've worked on, showcasing my skills in
              web development and design
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex space-x-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
              <button
                onClick={() => setFilter("featured")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  filter === "featured"
                    ? "bg-primary-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                Featured
              </button>
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  filter === "all"
                    ? "bg-primary-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                All Projects
              </button>
              
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectV2 key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* <ProjectV2 />
          <ProjectV2 />
          <ProjectV2 /> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/swastikpratik-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
