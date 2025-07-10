import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Target, Zap, Trophy, Users, Clock, Star, ArrowRight, Play, Flame, Dumbbell, HeartPulse } from "lucide-react"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const cardHover = {
  scale: 1.03,
  y: -5,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 15
  }
}

const pulse = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  // Stats count-up states
  const [yearsCount, setYearsCount] = useState(0)
  const [clientsCount, setClientsCount] = useState(0)
  const [successRate, setSuccessRate] = useState(0)
  const [hoursCount, setHoursCount] = useState(0)

  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    if (statsInView) {
      // Years count-up
      const yearsInterval = setInterval(() => {
        setYearsCount(prev => {
          if (prev >= 5) {
            clearInterval(yearsInterval)
            return 5
          }
          return prev + 1
        })
      }, 200)

      // Clients count-up
      const clientsInterval = setInterval(() => {
        setClientsCount(prev => {
          if (prev >= 1200) {
            clearInterval(clientsInterval)
            return 1200
          }
          return prev + 50
        })
      }, 30)

      // Success rate count-up
      const successInterval = setInterval(() => {
        setSuccessRate(prev => {
          if (prev >= 98) {
            clearInterval(successInterval)
            return 98
          }
          return prev + 2
        })
      }, 50)

      // Hours count-up (just for the "24/7" text)
      setHoursCount(24)
    }
  }, [statsInView])

  const features = [
    {
      icon: Flame,
      title: "Ignite Your Potential",
      description: "Our cutting-edge programs are designed to unleash the champion within. Every workout is a step toward your transformation."
    },
    {
      icon: Zap,
      title: "High-Octane Training",
      description: "Experience workouts that push boundaries and redefine limits. Scientifically proven methods for maximum results."
    },
    {
      icon: Trophy,
      title: "Championship Mindset",
      description: "We don't just train bodies - we forge minds. Develop the mental toughness of a champion."
    },
    {
      icon: HeartPulse,
      title: "Elite Community",
      description: "Surround yourself with like-minded warriors. Together, we rise to new heights."
    }
  ]

  const stats = [
    { number: `${yearsCount}+`, label: "Years of Excellence", icon: Clock },
    { number: `${clientsCount}+`, label: "Transformed Lives", icon: Users },
    { number: `${successRate}%`, label: "Success Rate", icon: Star },
    { number: `${hoursCount}/7`, label: "Access", icon: Zap }
  ]

  const testimonials = [
    {
      quote: "Joining MYKATTU changed my life. I went from struggling to keep up to dominating my fitness goals.",
      name: "Alex K.",
      role: "Member since 2020"
    },
    {
      quote: "The community here is unlike anything else. We push each other to be our best every single day.",
      name: "Sarah L.",
      role: "Member since 2019"
    }
  ]

  return (
    <section ref={ref} id="about" className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle animated grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFD700%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20zm0%200c0%2011.046%208.954%2020%2020%2020s20-8.954%2020-20-8.954-20-20-20-20%208.954-20%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>

        {/* Animated floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}

        {/* Diagonal accent lines */}
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 blur-sm" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-transparent via-accent to-transparent opacity-30 blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-24"
        >
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              <span className="text-accent font-medium tracking-widest text-sm uppercase">
                The MYKATTU Story
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-heading uppercase text-white leading-tight"
            >
              Where <motion.span
                className="text-accent inline-block relative"
                animate={pulse}
              >LEGENDS</motion.span> ARE FORGED
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              This isn't just another gym. This is where ordinary people discover their extraordinary potential.
              We're not just building bodies - we're crafting champions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <motion.button
                className="group relative bg-accent text-black px-6 py-3 md:px-8 md:py-4 font-bold rounded-full overflow-hidden shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                  y: -3
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  BEGIN YOUR TRANSFORMATION
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                className="group flex items-center gap-3 text-white border border-white/20 px-6 py-3 md:px-8 md:py-4 rounded-full hover:border-accent transition-all"
                whileHover={{
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                  scale: 1.03
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="w-5 h-5 group-hover:text-accent transition-colors" />
                </motion.div>
                <span className="font-medium">Watch Our Story</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            variants={fadeUp}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 md:p-8 rounded-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center"
              >
                <Dumbbell className="w-16 h-16 text-accent" />
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-heading uppercase text-accent mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  At MYKATTU, we believe in the power of transformation. Our mission is to help you unlock
                  your true potential through elite training, unmatched community support, and a relentless
                  pursuit of excellence. We don't just want you to get in shape - we want you to become the
                  best version of yourself.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div>
            <motion.h3
              variants={fadeUp}
              className="text-3xl font-heading uppercase text-center text-accent mb-12"
            >
              Why MYKATTU?
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={cardHover}
                  className="group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-5"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <motion.div
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Testimonials Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3
              variants={fadeUp}
              className="text-3xl font-heading uppercase text-center text-accent mb-12"
            >
              Real Transformations
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 md:p-8 rounded-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-accent/10 rounded-tl-full flex items-center justify-center">
                    <Dumbbell className="w-5 h-5 text-accent" />
                  </div>

                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>

                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            ref={statsRef}
            variants={containerVariants}
            className="relative"
          >
            <div className="text-center mb-12">
              <motion.h3
                variants={fadeUp}
                className="text-3xl font-heading uppercase text-accent mb-4"
              >
                By the Numbers
              </motion.h3>
              <motion.p
                variants={fadeUp}
                className="text-gray-300 max-w-xl mx-auto"
              >
                Our track record speaks volumes about our commitment to your transformation.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 group hover:border-accent/50 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>

                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-accent mb-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>

                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeUp}
            className="text-center bg-gradient-to-br from-gray-900/70 to-black/70 rounded-2xl p-8 md:p-12 border border-gray-800 relative overflow-hidden"
            whileHover={{
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.2)"
            }}
          >
            {/* Animated floating elements in CTA */}
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-accent/10 opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-accent/10 opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            <h3 className="text-2xl md:text-4xl font-heading uppercase text-white mb-6">
              Your Transformation <br /> Starts <span className="text-accent">Today</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
              Take the first step toward becoming the best version of yourself. Our team is ready to guide you through an unparalleled fitness journey.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                className="group relative bg-accent text-black font-bold px-8 py-3 md:px-10 md:py-4 rounded-full overflow-hidden shadow-lg text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(255, 215, 0, 0.6)",
                  y: -3
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>CLAIM YOUR SPOT</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                className="group flex items-center gap-3 text-white border border-white/20 px-8 py-3 md:px-10 md:py-4 rounded-full hover:border-accent transition-all text-lg"
                whileHover={{
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                  scale: 1.03
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="w-5 h-5 group-hover:text-accent transition-colors" />
                </motion.div>
                <span className="font-medium">Watch Our Story</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
