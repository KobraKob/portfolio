import React, { useEffect, useState, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, Zap, Target, Trophy, ArrowRight, Sparkles } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import { useInView } from "react-intersection-observer";

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Hero = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const debouncedMouseMove = debounce(handleMouseMove, 16);
    window.addEventListener("mousemove", debouncedMouseMove);
    return () => window.removeEventListener("mousemove", debouncedMouseMove);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const floatingIcons = [
    { icon: Zap, delay: 0, x: 100, y: 100, size: 40 },
    { icon: Target, delay: 0.5, x: 200, y: 300, size: 50 },
    { icon: Trophy, delay: 1, x: 300, y: 150, size: 45 },
    { icon: Sparkles, delay: 1.5, x: 400, y: 200, size: 35 },
  ];

  const stats = [
    { number: "1200+", label: "Members", icon: <Sparkles className="w-4 h-4" /> },
    { number: "870+", label: "Transformations", icon: <Trophy className="w-4 h-4" /> },
    { number: "3", label: "Locations", icon: <Target className="w-4 h-4" /> },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Gradient Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #000000, #1a1a1a, #000000)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "50% 50%", "100% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        {/* Animated Stars/Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-accent rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              boxShadow: "0 0 8px 2px rgba(255, 215, 0, 0.7)",
            }}
          />
        ))}

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjAiLz48cGF0aCBkPSJNMCAwSDkwMDAwdjEwMDMwSDB6IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz48L3N2Zz4=')",
        }} />
      </div>

      {/* Enhanced Mouse Follower */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-accent/10 to-yellow-300/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.15 : 0.08,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Floating Icons with Enhanced Animation */}
      <AnimatePresence>
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-accent/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1.2, 0],
              x: [item.x, item.x + 100, item.x],
              y: [item.y, item.y - 100, item.y],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            style={{
              filter: "drop-shadow(0 0 12px rgba(255, 215, 0, 0.7))",
            }}
          >
            <item.icon className={`w-${item.size/10} h-${item.size/10}`} />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content with Enhanced Animation */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Enhanced Pre-title with Animation */}
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-accent to-yellow-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.span
                className="text-accent font-medium tracking-widest text-sm uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <b>MYKATTU</b>
              </motion.span>
            </motion.div>

            {/* Enhanced Main Title Animation */}
            <motion.h1
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading uppercase text-white leading-tight"
            >
              THIS IS WHERE{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-accent block"
              >
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  BODIES
                </motion.span>{" "}
                ARE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-accent block"
              >
                REFORGED.
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle with Typing Effect */}
            <motion.p
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              {["Real transformation.", "No shortcuts.", "Push your limits.", "Discover your strength."].map((phrase, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.2 }}
                  className="inline-block mr-1"
                >
                  {phrase}
                </motion.span>
              ))}
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap gap-4 items-center justify-center lg:justify-start"
            >
              <motion.button
                className="group relative bg-gradient-to-r from-accent to-yellow-400 text-black px-6 py-3 md:px-8 md:py-4 font-bold rounded-full overflow-hidden shadow-lg transform transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                style={{ willChange: "transform, box-shadow" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  GET STARTED
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "radial-gradient(circle at center, rgba(255, 215, 0, 0.5) 0%, transparent 70%)",
                  }}
                />
              </motion.button>

              <motion.button
                className="group flex items-center gap-3 text-white border-2 border-white/20 px-6 py-3 md:px-8 md:py-4 rounded-full hover:border-accent transition-colors duration-300 relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 215, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <div className="relative">
                  <Play className="w-5 h-5 group-hover:text-accent transition-colors" />
                  {/* Animated circle behind play button */}
                  <motion.div
                    className="absolute -inset-3 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="font-medium">Watch Video</span>
              </motion.button>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-accent/50 transition-colors duration-300"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 1.7 + index * 0.2,
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  }}
                  style={{ willChange: "transform, box-shadow" }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent relative flex justify-center items-center mb-1">
                    {stat.number}
                    <motion.div
                      className="absolute -top-2 -right-1"
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image with Enhanced Parallax Effect */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{
                  y: -15,
                  boxShadow: "0 20px 30px rgba(0,0,0,0.3)",
                  transformStyle: "preserve-3d",
                  transformPerspective: "1000px",
                  rotateX: 2,
                  rotateY: 2,
                }}
                style={{ willChange: "transform, box-shadow" }}
              >
                <img
                  src={heroImg}
                  alt="Gym"
                  className="w-full h-auto max-h-[70vh] object-cover"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                  animate={{
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-accent/30 rounded-2xl pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Enhanced Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-accent to-yellow-300 text-black p-5 rounded-xl shadow-lg z-20"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 0 25px rgba(255, 215, 0, 0.7)",
                }}
                style={{ willChange: "transform, box-shadow" }}
              >
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm font-medium">Access</div>
                <div className="text-xs mt-2 opacity-80">Train anytime that fits your schedule</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-6 -left-6 bg-white text-black p-5 rounded-xl shadow-lg z-20"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 0 25px rgba(255, 215, 0, 0.7)",
                }}
                style={{ willChange: "transform, box-shadow" }}
              >
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm font-medium">Results</div>
                <div className="text-xs mt-2 opacity-80">Guaranteed if you put in the work</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          className="text-sm text-gray-400 mb-2"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to discover
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="w-6 h-6 text-accent mb-1" />
          <motion.div
            className="w-1 h-8 bg-accent rounded-full"
            animate={{ height: [8, 16, 8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
