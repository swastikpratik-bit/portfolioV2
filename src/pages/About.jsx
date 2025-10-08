import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SkillBar from "../components/SkillBar";

const About = () => {
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
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Self-taught full-stack developer building end-to-end digital
              products with a strong focus on clean code and real-world problem
              solving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                  <img
                    src="mee2.jpeg"
                    alt="Profile"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400 rounded-full animate-float animation-delay-400"></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Swastik Pratik Singh
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm a full-stack developer who loves turning ideas into real
                products. From smart contracts to frontend animations, I enjoy
                building complete applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                My journey started with curiosity and grew through hands-on
                projects like integrating APIs and building full-stack
                applications. I love exploring backend logic, crafting clean
                frontend interfaces, and learning how to deploy reliable web
                solutions.
              </p>
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Experience
                  </h3>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    Fresher
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Projects
                  </h3>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    10+
                  </p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are the technologies and tools I work with regularly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Beyond Code
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Outside of programming, these are the things that drive my
              curiosity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Open Source",
                description:
                  "Building tools, reporting issues, and contributing code to community-driven projects.",
                icon: "🌍",
              },
              {
                title: "Experimentation",
                description:
                  "Trying new tech stacks, testing APIs, and building micro-projects to learn faster.",
                icon: "🧪",
              },
              {
                title: "Reading & Podcasts",
                description:
                  "Diving into dev books and tech podcasts to stay current and inspired.",
                icon: "🎧",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
