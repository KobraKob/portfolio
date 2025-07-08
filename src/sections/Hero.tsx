import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import type { Variants } from 'framer-motion';

export const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/balavanth_resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Balavanth_Resume.pdf';
    link.click();
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-center items-center text-white p-8 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2359a6ff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url("/balavanth.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced glowing border effect */}
      <motion.div 
        className="absolute inset-0 border-4 border-transparent rounded-2xl"
        style={{
          boxShadow: '0 0 30px 8px rgba(59, 130, 246, 0.3), inset 0 0 30px 5px rgba(59, 130, 246, 0.1)'
        }}
        animate={{
          boxShadow: [
            '0 0 30px 8px rgba(59, 130, 246, 0.3), inset 0 0 30px 5px rgba(59, 130, 246, 0.1)',
            '0 0 40px 12px rgba(59, 130, 246, 0.5), inset 0 0 40px 8px rgba(59, 130, 246, 0.2)',
            '0 0 30px 8px rgba(59, 130, 246, 0.3), inset 0 0 30px 5px rgba(59, 130, 246, 0.1)',
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center"
      >
        {/* Enhanced profile image container */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl">
            <img 
              src="/balavanth.webp" 
              alt="Balavanth K O" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          
          {/* Floating ring animation */}
          <motion.div
            className="absolute inset-0 border-2 border-blue-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Enhanced animated text */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-center mb-4 font-poppins"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Balavanth K O
          </span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-center mb-8 font-inter"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Crafting Smart Interfaces with Code and Creativity
          </span>
        </motion.p>

        {/* Action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.button
            onClick={handleScrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full font-medium transition-all duration-200 flex items-center gap-2 shadow-lg"
          >
            <Eye className="w-4 h-4" />
            View Projects
          </motion.button>
          
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-blue-500 hover:bg-blue-500 rounded-full font-medium transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/KobraKob", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/balavanth", label: "LinkedIn" },
            { icon: Mail, href: "mailto:balavanthko@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 flex flex-col items-center cursor-pointer group"
        onClick={handleScrollToProjects}
      >
        <span className="mb-2 text-sm text-gray-300 group-hover:text-white transition-colors">
          Explore Portfolio
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="p-2 border border-gray-600 rounded-full group-hover:border-blue-400 transition-colors"
        >
          <ArrowDown className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
        </motion.div>
      </motion.div>

      {/* Custom CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};