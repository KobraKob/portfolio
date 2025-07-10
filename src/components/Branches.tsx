import React from "react"
import { motion } from "framer-motion"
import { MapPin, Dumbbell } from "lucide-react"

const Branches = () => {
  // Expanded branch data
  const branches = [
    {
      name: "MYKATTU Central",
      address: "12 Muscle Street, Bengaluru",
      hours: "5AM – 10PM",
      phone: "+91 80 1234 5678",
      email: "central@mykattu.com",
      features: ["24/7 Access", "Olympic Weightlifting", "Recovery Zone"],
      image: "/images/branches/central.jpg",
      mapUrl: "https://maps.google.com/...",
      color: "bg-amber-900/30" // Unique color for each branch
    },
    {
      name: "MYKATTU East",
      address: "22 Flex Ave, Whitefield",
      hours: "6AM – 11PM",
      phone: "+91 80 2345 6789",
      email: "east@mykattu.com",
      features: ["CrossFit Rig", "Functional Training", "Cryotherapy"],
      image: "/images/branches/east.jpg",
      mapUrl: "https://maps.google.com/...",
      color: "bg-blue-900/30"
    },
    {
      name: "MYKATTU North",
      address: "45 Iron Road, Yelahanka",
      hours: "5AM – 9PM",
      phone: "+91 80 3456 7890",
      email: "north@mykattu.com",
      features: ["Strongman Equipment", "HIIT Studio", "Physio Center"],
      image: "/images/branches/north.jpg",
      mapUrl: "https://maps.google.com/...",
      color: "bg-green-900/30"
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="bg-black text-white py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFD700%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20zm0%200c0%2011.046%208.954%2020%2020%2020s20-8.954%2020-20-8.954-20-20-20-20%208.954-20%2020z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
        <div className="absolute top-1/3 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-32 h-0.5 bg-gradient-to-l from-transparent via-accent/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-accent" />
            <span className="text-sm uppercase tracking-widest text-accent">Our Locations</span>
            <div className="w-16 h-px bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading uppercase">
            Train Where <span className="text-accent">Legends</span> Are Made
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Find your nearest MYKATTU location and start your fitness journey with us.
            Each of our branches offers world-class facilities and expert coaches.
          </p>
        </motion.div>

        {/* Map View Toggle */}
        <div className="flex justify-center mb-8">
          <button className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700 hover:border-accent transition-colors">
            <MapPin className="w-4 h-4 text-accent" />
            <span>View Map</span>
          </button>
        </div>

        {/* Branches Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`${branch.color} rounded-xl overflow-hidden shadow-lg relative group`}
            >
              {/* Card Header with Branch Name */}
              <div className="p-6 bg-gray-900/80 relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      <h3 className="text-xl font-bold">{branch.name}</h3>
                    </div>
                    <p className="text-gray-300">{branch.address}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-400 mb-1">Hours</span>
                    <span className="text-accent font-medium">{branch.hours}</span>
                  </div>
                </div>
              </div>

              {/* Branch Image Placeholder */}
              <div className="h-40 bg-gray-800 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Dumbbell className="w-12 h-12 text-gray-700/50 opacity-30" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {branch.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                    </svg>
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{branch.email}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Actions */}
              <div className="p-6 bg-gray-900/80 flex flex-col sm:flex-row gap-4">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-accent text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition flex items-center justify-center gap-2"
                >
                  <span>View Location</span>
                  <MapPin className="w-4 h-4" />
                </a>
                <button className="flex-1 border border-gray-700 hover:border-accent text-white font-semibold px-4 py-2 rounded transition flex items-center justify-center gap-2">
                  <span>Contact</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-accent/50" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Branches
