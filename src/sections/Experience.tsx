import { motion } from 'framer-motion';
import { MapPin, Calendar, TrendingUp, Code, Database, Users, Award } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Graduate Trainee",
    company: "TCS",
    location: "Bengaluru",
    duration: "Present",
    type: "Full-time",
    description: "Currently working as a Graduate Trainee at Tata Consultancy Services, gaining hands-on experience in software development and enterprise solutions.",
    achievements: [
      "Working on enterprise-level software solutions",
      "Collaborating with cross-functional teams on client projects",
      "Participating in comprehensive training programs for skill development"
    ],
    skills: ["Software Development", "Enterprise Solutions", "Team Collaboration", "Problem Solving"],
    icon: <Code className="w-5 h-5" />,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 2,
    title: "Executive Technologies",
    company: "iMAYAS",
    location: "Bengaluru",
    duration: "4 months",
    type: "Full-time",
    description: "Worked as Executive Technologies at iMAYAS, focusing on technology implementation and digital solutions for business processes.",
    achievements: [
      "Implemented technology solutions for business process optimization",
      "Worked on digital transformation initiatives",
      "Collaborated with technical teams on various projects"
    ],
    skills: ["Technology Implementation", "Digital Solutions", "Business Process", "Project Management"],
    icon: <Database className="w-5 h-5" />,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "Machine Learning Intern",
    company: "Parvam",
    location: "Bengaluru",
    duration: "April - May 2024",
    type: "Internship",
    description: "Collaborated with a team to apply machine learning algorithms to real-world problems, focusing on data optimization and model accuracy improvements.",
    achievements: [
      "Collaborated with a team to apply machine learning algorithms to real-world problems",
      "Assisted in developing machine learning models to optimize data processes",
      "Conducted data analysis and contributed to model accuracy improvements"
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "Team Collaboration"],
    icon: <TrendingUp className="w-5 h-5" />,
    gradient: "from-blue-500/20 to-cyan-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const timelineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const TypeBadge = ({ type }) => {
  const typeStyles = {
    "Internship": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Full-time": "bg-green-500/20 text-green-400 border-green-500/30",
    "Contract": "bg-purple-500/20 text-purple-400 border-purple-500/30"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeStyles[type]}`}>
      {type}
    </span>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Experience
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline line */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform -translate-x-1/2 origin-top"
          />

          {/* Glowing effect on timeline */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-cyan-500/30 transform -translate-x-1/2 blur-sm"></div>
          {/* Timeline items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative pl-12 md:pl-0 md:flex md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Animated Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-8 md:top-1/2 z-20 shadow-lg"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-20"></div>
                  <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="text-blue-400">
                      {experience.icon}
                    </div>
                  </div>
                </motion.div>

                {/* Date section */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 mb-2"
                  >
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-400 font-medium">{experience.duration}</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{experience.location}</span>
                  </motion.div>
                </div>

                {/* Content section */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-4 md:mt-0`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group relative"
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1 font-poppins text-white">
                            {experience.title}
                          </h3>
                          <p className="text-blue-400 font-medium">{experience.company}</p>
                        </div>
                        <TypeBadge type={experience.type} />
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: (index * 0.1) + (i * 0.1) }}
                              className="text-sm text-gray-400 flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Skills Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: (index * 0.1) + (i * 0.05) }}
                              className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300 hover:bg-gray-600 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Career progression indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-full border border-gray-700">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Career journey continues...</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
