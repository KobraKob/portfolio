import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { PhoneCall, MessageCircle, MapPin, Send, Sparkles, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactPage = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const onSubmit = (data: ContactFormData) => {
    console.log(data)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
    reset()
  }

  const contactMethods = [
    {
      icon: PhoneCall,
      text: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: MessageCircle,
      text: "Chat on WhatsApp",
      href: "https://wa.me/919876543210"
    },
    {
      icon: MapPin,
      text: "Bengaluru, India",
      href: "https://goo.gl/maps/xyz"
    }
  ]

  return (
    <section 
      className="bg-black text-white py-20 px-6 min-h-screen relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Column: Form */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl font-heading text-accent mb-6 uppercase"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-gray-400 mb-8"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Got questions or ready to join the grind? Drop us a message or call
            anytime.
          </motion.p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <input
                {...register("name")}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-darkGrey text-white border border-gray-700 rounded focus:outline-none focus:border-accent transition-colors"
              />
              {errors.name && (
                <motion.p 
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {errors.name.message}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <input
                {...register("email")}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-darkGrey text-white border border-gray-700 rounded focus:outline-none focus:border-accent transition-colors"
              />
              {errors.email && (
                <motion.p 
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {errors.email.message}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-darkGrey text-white border border-gray-700 rounded focus:outline-none focus:border-accent transition-colors"
              />
              {errors.message && (
                <motion.p 
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {errors.message.message}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button
                type="submit"
                className="group relative bg-accent text-black font-bold px-8 py-4 rounded-full overflow-hidden w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
                <span className="relative z-10 flex items-center justify-center gap-2">
                  SEND MESSAGE
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                className="mt-6 p-4 bg-green-900/30 border border-green-500 rounded text-green-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                Thanks for reaching out! We'll contact you soon.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact Links */}
          <motion.div
            className="mt-12 space-y-4"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors group"
                whileHover={{ x: 5 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -20 },
                }}
                transition={{ 
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                }}
              >
                <method.icon className="w-5 h-5 text-accent" />
                <span>{method.text}</span>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
                {isHovering && (
                  <motion.span
                    className="absolute -right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.5, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Sparkles className="w-3 h-3 text-accent" />
                  </motion.span>
                )}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800 hover:border-accent transition-colors duration-300"
            whileHover={{ y: -5 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0896070311014!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f048ef0f%3A0x9f3e5c1b!2sBengaluru!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Floating Location Card */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-accent text-black p-5 rounded-xl shadow-lg z-20"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -2, 2, 0],
            }}
            style={{
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.7)",
            }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <div>
                <div className="font-bold">Our Location</div>
                <div className="text-sm">Bengaluru, India</div>
              </div>
            </div>
          </motion.div>
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
    </section>
  )
}

export default ContactPage