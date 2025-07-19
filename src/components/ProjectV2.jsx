import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectV2 = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="max-w-[1000px] mx-auto pt-[100px] min-h-[50vh] mb-[100px]"
    >
      <article className="flex flex-col md:flex-row items-start gap-8 relative">
        <div className="z-10 max-w-[500px] w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group p-6">
          <h3 className="text-gray-900 dark:text-white text-[28px] font-semibold hover:text-indigo-500 transition-colors duration-200 mb-5">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h3>

          <div className="text-gray-600 dark:text-gray-400 text-sm font-sans mb-6 md:pr-10">
            <p>{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:bg-white/30 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:bg-white/30 transition-all duration-200"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="z-11 absolute left-1/2 w-2 h-full bg-gray-300 dark:bg-gray-400 md:hidden"></div>

        <div className="relative z-10 md:-ml-[75px] mt-[65px] md:mt-[65px] w-full max-w-[700px]">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-300"
              width={700}
              height={438}
            />
          </a>
        </div>
      </article>
    </motion.div>
  );
};

export default ProjectV2;
