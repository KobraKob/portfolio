import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SiPython, SiJavascript, SiReact, SiTailwindcss, SiMysql, SiTableau, SiGithub } from 'react-icons/si';

const skills = [
  { icon: <SiPython size={32} />, name: 'Python', color: '#3776AB' },
  { icon: <SiJavascript size={32} />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiReact size={32} />, name: 'React', color: '#61DAFB' },
  { icon: <SiTailwindcss size={32} />, name: 'Tailwind', color: '#06B6D4' },
  { icon: <SiMysql size={32} />, name: 'MySQL', color: '#4479A1' },
  { icon: <SiTableau size={32} />, name: 'Tableau', color: '#E97627' },
  { icon: <SiGithub size={32} />, name: 'GitHub', color: '#181717' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins relative"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            About Me
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="md:w-1/2"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p 
                variants={itemVariants}
                className="text-lg font-inter leading-relaxed relative pl-6"
              >
                <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                Hello! I'm <span className="font-semibold text-blue-400">Balavanth</span>, a passionate developer with expertise in full-stack development and data visualization. 
                I specialize in creating intuitive interfaces and data-driven solutions.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg font-inter leading-relaxed relative pl-6"
              >
                <span className="absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full"></span>
                With experience in machine learning and web technologies, I bridge the gap between data and user experience.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg font-inter leading-relaxed relative pl-6"
              >
                <span className="absolute left-0 top-2 w-2 h-2 bg-green-500 rounded-full"></span>
                Quick learner with a passion for staying updated with the latest technologies in software development and data analysis.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
                <p className="text-lg font-inter relative z-10">
                  <span className="font-semibold text-yellow-400">Fun Fact:</span> I mostly use AI to do basically all of the coding, but <strong className="text-white">I know how things work.</strong>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold mb-6 font-poppins flex items-center">
              <span className="mr-3 text-2xl">🚀</span>
              Tech Stack
            </h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center cursor-default 
                           border border-gray-700 hover:border-gray-600 transition-all duration-300 
                           hover:shadow-lg hover:shadow-gray-700/50 relative overflow-hidden"
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Skill icon with color on hover */}
                  <div className="relative z-10 transition-all duration-300 group-hover:scale-110">
                    <div style={{ color: skill.color }} className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                      {skill.icon}
                    </div>
                  </div>
                  
                  {/* Skill name */}
                  <span className="mt-2 text-sm font-medium relative z-10 transition-colors duration-300 
                                 group-hover:text-white">{skill.name}</span>
                  
                  {/* Animated progress bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.1 * index, duration: 0.8 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Additional floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-sm text-gray-400">Always learning, always growing</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};