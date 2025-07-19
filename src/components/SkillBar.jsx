import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SkillBar = ({ skill, level, index }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;