import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Calendar, Target, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Members Trained",
    count: 1000,
    icon: <Target className="w-8 h-8" />,
    color: "from-blue-500 to-purple-500",
    suffix: "+"
  },
  {
    label: "Transformations Completed",
    count: 900,
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-green-500 to-teal-500",
    suffix: "+"
  },
  {
    label: "Success Rate",
    count: 98,
    icon: <Star className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    suffix: "%"
  },
  {
    label: "Years Experience",
    count: 10,
    icon: <Calendar className="w-8 h-8" />,
    color: "from-red-500 to-pink-500",
    suffix: "+"
  },
];

const testimonials = [
  {
    name: "Rakesh M.",
    quote: "I lost 18kg in 4 months. MYKATTU changed my life completely. The trainers here don't just focus on physical transformation but mental strength too.",
    image: "/testimonial1.jpg",
    rating: 5,
    program: "Weight Loss Program",
    duration: "4 months",
    results: "Lost 18kg"
  },
  {
    name: "Sowmya R.",
    quote: "The discipline I gained here shaped me mentally & physically. I've never felt stronger or more confident in my life.",
    image: "/testimonial2.jpg",
    rating: 5,
    program: "Strength Training",
    duration: "6 months",
    results: "Gained 8kg muscle"
  },
  {
    name: "Arjun K.",
    quote: "From a couch potato to completing my first marathon. MYKATTU gave me the foundation I needed to achieve my dreams.",
    image: "/testimonial3.jpg",
    rating: 5,
    program: "Endurance Training",
    duration: "8 months",
    results: "Marathon finisher"
  },
  {
    name: "Priya S.",
    quote: "Post-pregnancy fitness journey became amazing here. The supportive community and expert guidance made all the difference.",
    image: "/testimonial4.jpg",
    rating: 5,
    program: "Postnatal Fitness",
    duration: "5 months",
    results: "Full recovery + strength"
  },
];

const transformationImages = [
  {
    before: "/before1.jpg",
    after: "/after1.jpg",
    name: "Aadhya",
    program: "3 Month Program",
    results: "Lost 15kg, Gained confidence"
  },
  {
    before: "/before2.jpg",
    after: "/after2.jpg",
    name: "Vikram",
    program: "6 Month Program",
    results: "Gained 12kg muscle mass"
  },
  {
    before: "/before3.jpg",
    after: "/after3.jpg",
    name: "Meera",
    program: "4 Month Program",
    results: "Complete body transformation"
  },
];

const Stats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group hover:scale-105 transition-transform duration-300"
          whileHover={{ y: -10 }}
        >
          <motion.div
            className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {stat.icon}
          </motion.div>
          <div className="mb-2">
            <CountUpComponent end={stat.count} suffix={stat.suffix || ""} />
          </div>
          <p className="text-gray-400 text-sm uppercase tracking-wide group-hover:text-gray-300 transition-colors">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const TransformationsGallery = ({ transformations }) => {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-heading uppercase text-center mb-12 text-accent">
        Before & After Gallery
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {transformations.map((transformation, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-80 overflow-hidden">
              <motion.img
                src={transformation.before}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src={transformation.after}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-heading text-xl mb-1">{transformation.name}</h4>
                <p className="text-sm text-gray-300">{transformation.program}</p>
                <p className="text-xs text-accent">{transformation.results}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsCarousel = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative">
      <h3 className="text-3xl font-heading uppercase text-center mb-12 text-accent">
        What Our Members Say
      </h3>
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-accent"
              />
            </div>
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div className="text-center">
              <h4 className="font-heading text-xl text-accent mb-2">
                {testimonials[currentTestimonial].name}
              </h4>
              <div className="flex justify-center gap-4 text-sm text-gray-400">
                <span>{testimonials[currentTestimonial].program}</span>
                <span>•</span>
                <span>{testimonials[currentTestimonial].duration}</span>
                <span>•</span>
                <span>{testimonials[currentTestimonial].results}</span>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-black transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? "bg-accent" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-black transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CountUpComponent = ({ end, duration = 3, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= end) {
            clearInterval(timer);
            return end;
          }
          return Math.min(prev + increment, end);
        });
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration, hasStarted]);

  return (
    <span className="text-5xl md:text-6xl font-heading text-accent" ref={ref}>
      {Math.floor(count)}{suffix}
    </span>
  );
};

const Transformations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-accent font-medium tracking-widest text-sm uppercase">
              Success Stories
            </span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-heading uppercase text-white mb-8 leading-tight"
          >
            <span className="text-accent">REAL</span> TRANSFORMATIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Witness the incredible journeys of our members who dared to transform their lives
          </motion.p>
        </div>
        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Stats stats={stats} />
        </motion.div>
        {/* Before/After Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <TransformationsGallery transformations={transformationImages} />
        </motion.div>
        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <TestimonialsCarousel testimonials={testimonials} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Transformations;
