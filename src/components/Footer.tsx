import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            <a href="https://github.com/KobraKob" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="www.linkedin.com/in/balavanth" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:balavanthko@gmail.com" className="hover:text-blue-400 transition-colors">
              <FiMail size={24} />
            </a>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 mb-8 px-4 py-2 bg-gray-800 rounded-lg"
          >
            <span>Back to Top</span>
            <FiArrowUp />
          </motion.button>
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Built by Balavanth K O
          </p>
        </div>
      </div>
    </footer>
  );
};