import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Instagram, MessageCircleMore, Youtube, ArrowRight, Sparkles } from "lucide-react"
import { useInView } from "react-intersection-observer"

const Footer = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <footer 
      className="bg-black text-white py-16 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, (Math.random() * window.innerHeight) / 2],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              boxShadow: "0 0 5px 1px rgba(255, 215, 0, 0.5)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Final CTA with Enhanced Animation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-heading uppercase text-accent mb-4"
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Still thinking?
          </motion.h2>
          <motion.p
            className="text-gray-300 font-body mb-6 max-w-md mx-auto"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Take the first step. Begin your transformation today.
          </motion.p>
          <motion.button
            className="group relative bg-accent text-black font-semibold px-8 py-4 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            style={{
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10 flex items-center gap-2">
              GET STARTED
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links with Hover Effects */}
        <motion.div
          className="flex justify-center gap-6 text-accent mt-8"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Instagram, url: "https://instagram.com" },
            { icon: MessageCircleMore, url: "https://wa.me/91XXXXXXXXXX" },
            { icon: Youtube, url: "https://youtube.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="relative p-3 rounded-full bg-black/20 hover:bg-accent/10 transition-colors duration-300"
              whileHover={{ 
                scale: 1.1,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ 
                duration: 0.5,
                delay: 0.8 + index * 0.1,
              }}
            >
              <social.icon className="w-6 h-6 hover:text-yellow-400 transition-colors" />
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                animate={{ scale: isHovering ? [1, 1.5, 1] : 1 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-3 h-3 text-accent" />
              </motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Bottom with Fade-in */}
        <motion.div
          className="text-sm text-gray-500 mt-10"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          &copy; {new Date().getFullYear()} MYKATTU. All rights reserved.
          <br />
          Made with <span className="text-accent">💪</span> by{" "}
          <span className="text-white font-medium">Balavanth</span>
        </motion.div>
      </div>

      {/* Floating Accent Elements */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 2,
        }}
      />
    </footer>
  )
}

export default Footer