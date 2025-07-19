import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-9xl font-bold text-primary-500 dark:text-primary-400 mb-4">
            404
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center"
          >
            <HiHome className="mr-2" />
            Go Home
          </Link>
          <Link
            to="/projects"
            className="btn-secondary inline-flex items-center justify-center"
          >
            View Projects
          </Link>
        </motion.div>
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-20 w-20 h-20 bg-primary-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-20 left-20 w-16 h-16 bg-secondary-300 rounded-full opacity-20"
        />
      </div>
    </div>
  );
};

export default NotFound;