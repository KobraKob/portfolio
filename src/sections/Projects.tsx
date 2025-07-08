import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SiReact, SiPython, SiPhp } from 'react-icons/si';
import { ExternalLink, ChevronDown, ChevronUp, Zap, Code } from 'lucide-react';

const projects: Array<{
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactElement;
  content: string;
  features: string[];
  status: StatusType;
  gradient: string;
  href?: string;
}> = [
  {
    title: "ELLIE",
    description: "AI-powered e-commerce listing generator",
    tags: ["React", "AI API"],
    icon: <SiReact className="text-blue-500" />,
    content: "Developed an AI-powered tool that generates optimized e-commerce product listings based on minimal input. This innovative solution streamlines the product listing process, helping businesses create compelling descriptions and optimize their online presence with minimal effort.",
    features: ["AI Content Generation", "Real-time Preview", "SEO Optimization"],
    status: "Completed",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "MarketCrew",
    description: "AI social content generator for brands",
    tags: ["Python", "AI"],
    icon: <SiPython className="text-yellow-500" />,
    content: "Created a platform that automates social media content creation for brands using AI algorithms. The system analyzes brand voice, target audience, and trending topics to generate engaging content across multiple social media platforms.",
    href: "https://market-new-deploy-git-main-catchrepards-projects.vercel.app/",
    features: ["Multi-platform Support", "Brand Voice Analysis", "Content Scheduling"],
    status: "Live",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Blood Donation System",
    description: "Education project",
    tags: ["PHP", "MySQL"],
    icon: <SiPhp className="text-purple-500" />,
    content: "Web-based application to manage blood donation and donor registrations with PHP backend and MySQL database. Features include donor management, blood inventory tracking, and appointment scheduling system.",
    features: ["Donor Management", "Inventory Tracking", "Appointment System"],
    status: "Educational",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

type StatusType = "Completed" | "Live" | "Educational";

const StatusBadge = ({ status }: { status: StatusType }) => {
  const statusStyles = {
    "Completed": "bg-green-500/20 text-green-400 border-green-500/30",
    "Live": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Educational": "bg-purple-500/20 text-purple-400 border-purple-500/30"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            Projects
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600 group-hover:border-gray-500 transition-all duration-300">
                {/* Header with gradient overlay */}
                <div className={`relative p-6 bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div 
                        className="mr-4 p-2 bg-gray-800 rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold font-poppins flex items-center gap-2">
                          {project.title}
                          {project.href && (
                            <motion.a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              <ExternalLink size={18} />
                            </motion.a>
                          )}
                        </h3>
                        <p className="text-gray-300 text-sm">{project.description}</p>
                      </div>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 bg-gray-600 rounded-full text-sm font-medium hover:bg-gray-500 transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={expandedProject === index ? 'expanded' : 'collapsed'}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {expandedProject === index ? project.content : `${project.content.substring(0, 80)}...`}
                      </p>
                      
                      {expandedProject === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="space-y-3"
                        >
                          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Zap size={16} className="text-yellow-400" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-sm text-gray-400 flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  <motion.button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    {expandedProject === index ? (
                      <>
                        Show Less <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        View More <ChevronDown size={16} />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-full border border-gray-600">
            <Code size={20} className="text-blue-400" />
            <span className="text-gray-300">More projects coming soon...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}