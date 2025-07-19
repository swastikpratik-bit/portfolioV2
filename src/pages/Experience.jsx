import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { HiBriefcase, HiAcademicCap, HiOfficeBuilding } from "react-icons/hi";

const Experience = () => {
  const getIcon = (type) => {
    switch (type) {
      case "work":
        return HiBriefcase;
      case "education":
        return HiAcademicCap;
      case "internship":
        return HiOfficeBuilding;
      default:
        return HiBriefcase;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "bg-primary-500";
      case "education":
        return "bg-secondary-500";
      case "internship":
        return "bg-accent-500";
      default:
        return "bg-primary-500";
    }
  };

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
              Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My professional journey and educational background in software
              development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

            {experience.map((item, index) => {
              const Icon = getIcon(item.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full ${getTypeColor(
                        item.type
                      )} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 flex-1 ${
                      isEven ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {item.company}
                          </p>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.period}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                          {item.achievements.map(
                            (achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-sm">
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Career Highlights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Some numbers that reflect my journey and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              // {
              //   number: "Fresher",
              //   label: "Years Experience",
              //   color: "text-primary-500",
              // },
              {
                number: "10+",
                label: "Projects Completed",
                color: "text-secondary-500",
              },
              {
                number: "10+",
                label: "Technologies",
                color: "text-accent-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
