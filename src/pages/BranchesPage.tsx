import React from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, ArrowRight } from "lucide-react"

const branches = [
  {
    name: "MYKATTU Central",
    address: "12 Muscle Street, Bengaluru, KA",
    hours: "5:00 AM – 10:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0896070311014!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f048ef0f%3A0x9f3e5c1b!2sBengaluru!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  {
    name: "MYKATTU East",
    address: "22 Flex Avenue, Whitefield, Bengaluru",
    hours: "6:00 AM – 11:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0896070311014!2d77.7500!3d12.9616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f048ef0f%3A0x9f3e5c1b!2sWhitefield!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  {
    name: "MYKATTU North",
    address: "45 Iron Road, Yelahanka, Bengaluru",
    hours: "5:00 AM – 9:00 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0896070311014!2d77.5800!3d13.0756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f048ef0f%3A0x9f3e5c1b!2sYelahanka!5e0!3m2!1sen!2sin!4v1700000000000",
  },
]

const BranchesPage = () => {
  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen relative overflow-hidden">
      {/* Background particles */}
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-heading uppercase text-accent text-center mb-16"
        >
          Our Branches
        </motion.h1>

        <div className="grid gap-12 md:grid-cols-2">
          {branches.map((branch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-accent/50 transition-all duration-500"
            >
              <h2 className="text-2xl font-heading uppercase text-accent mb-4">
                {branch.name}
              </h2>
              <p className="flex items-center text-gray-300 mb-2">
                <MapPin className="mr-2 w-5 h-5 text-yellow-500" />
                {branch.address}
              </p>
              <p className="flex items-center text-sm text-gray-400 mb-4">
                <Clock className="mr-2 w-4 h-4 text-yellow-500" />
                {branch.hours}
              </p>

              <div className="mt-4 mb-6">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="200"
                  allowFullScreen
                  loading="lazy"
                  className="rounded"
                ></iframe>
              </div>

              <motion.a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  branch.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block group relative bg-accent text-black font-semibold px-6 py-3 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Get Directions
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BranchesPage
