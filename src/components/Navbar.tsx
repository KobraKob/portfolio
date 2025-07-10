import React, { useState, useEffect, useCallback } from "react"
import { Menu, X, Dumbbell, Zap, Target, Trophy } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

const navLinks = [
  { label: "Home", href: "/", icon: Dumbbell },
  { label: "About", href: "#about", icon: Target },
  { label: "Branches", href: "/branches", icon: Zap },
  { label: "Transform", href: "/transformations", icon: Trophy },
  { label: "Plans", href: "/plans", icon: Target },
  { label: "Contact", href: "/contact", icon: Dumbbell },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100)
    window.addEventListener("scroll", debouncedHandleScroll)
    return () => window.removeEventListener("scroll", debouncedHandleScroll)
  }, [handleScroll])

  const particleVariants = {
    animate: {
      y: [-10, 10, -10],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: Math.random() * 2,
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-accent/30"
            : "bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80 backdrop-blur-sm"
        }`}
      >
        {/* Animated Border */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%" }}
        />

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Enhanced Logo with Animation */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 font-heading text-2xl text-accent uppercase relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Dumbbell className="w-7 h-7" />
              <motion.div
                className="absolute inset-0 bg-accent rounded-full blur-lg opacity-20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.span
              className="relative group-hover:text-white transition-colors"
              animate={{
                textShadow: ["0 0 2px #FFD700", "0 0 8px #FFD700", "0 0 2px #FFD700"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              MYKATTU
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"
              />
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                className="relative px-3 py-2 mx-1 rounded-lg hover:bg-accent/10 transition-all duration-300 flex items-center group"
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium"
                    onClick={(e) => {
                      e.preventDefault()
                      const target = document.querySelector(link.href)
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' })
                      }
                      setIsOpen(false)
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <link.icon className="h-4 w-4" />
                    </motion.div>
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <link.icon className="h-4 w-4" />
                    </motion.div>
                    {link.label}
                  </Link>
                )}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200
              }}
              className="md:hidden fixed inset-x-0 top-16 bg-gray-900/95 backdrop-blur-xl border-t border-accent/30 shadow-xl z-40"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
              <nav className="px-6 py-4 space-y-3">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={link.href}
                      className="block py-3 px-4 rounded-lg hover:bg-accent/10 transition-colors duration-200 flex items-center gap-3 text-lg font-medium"
                      onClick={() => {
                        setIsOpen(false)
                        if (link.href === "#home" && location.pathname === "/") {
                          const homeSection = document.getElementById("home")
                          if (homeSection) {
                            homeSection.scrollIntoView({ behavior: 'smooth' })
                          }
                        }
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <link.icon className="h-5 w-5" />
                      </motion.div>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Navbar
