import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Zap, Crown, Sparkles, ArrowRight } from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Basic",
      price: "₹800",
      originalPrice: "₹1999",
      period: "mo",
      features: [
        "Gym Access (6 AM - 10 PM)",
        "1 Personal Training Session",
        "Group Classes Access", 
        "Basic Nutrition Guide",
        "Mobile App Access",
        "Locker Facility"
      ],
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
      popular: false,
      savings: "20%"
    },
    {
      name: "Pro",
      price: "₹3,499",
      originalPrice: "₹4,499",
      period: "mo",
      features: [
        "24/7 Gym Access",
        "4 Personal Training Sessions",
        "All Group Classes",
        "Personalized Diet Plan",
        "Body Composition Analysis",
        "Priority Equipment Access",
        "Nutrition Counseling",
        "Progress Tracking"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      popular: true,
      savings: "22%"
    },
    {
      name: "Elite",
      price: "₹5,999",
      originalPrice: "₹7,999",
      period: "mo",
      features: [
        "Everything in Pro +",
        "Unlimited Personal Training",
        "VIP Locker Room Access",
        "Massage Therapy (2 sessions)",
        "Supplement Consultation",
        "Priority Class Booking",
        "Guest Passes (2 per month)",
        "Recovery Zone Access",
        "Meal Planning Service"
      ],
      icon: <Crown className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      popular: false,
      savings: "25%"
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "₹19,999",
      originalPrice: "₹29,988",
      period: "yr",
      features: [
        "Gym Access (6 AM - 10 PM)",
        "12 Personal Training Sessions",
        "Group Classes Access",
        "Basic Nutrition Guide",
        "Mobile App Access",
        "Locker Facility",
        "2 Months FREE"
      ],
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
      popular: false,
      savings: "33%"
    },
    {
      name: "Pro",
      price: "₹34,999",
      originalPrice: "₹53,988",
      period: "yr",
      features: [
        "24/7 Gym Access",
        "48 Personal Training Sessions",
        "All Group Classes",
        "Personalized Diet Plan",
        "Body Composition Analysis",
        "Priority Equipment Access",
        "Nutrition Counseling",
        "Progress Tracking",
        "3 Months FREE"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      popular: true,
      savings: "35%"
    },
    {
      name: "Elite",
      price: "₹59,999",
      originalPrice: "₹95,988",
      period: "yr",
      features: [
        "Everything in Pro +",
        "Unlimited Personal Training",
        "VIP Locker Room Access",
        "Massage Therapy (24 sessions)",
        "Supplement Consultation",
        "Priority Class Booking",
        "Guest Passes (24 per year)",
        "Recovery Zone Access",
        "Meal Planning Service",
        "4 Months FREE"
      ],
      icon: <Crown className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      popular: false,
      savings: "37%"
    },
  ],
};

const PlansTeaser = () => {
  const [billing, setBilling] = useState("yearly");
  const [hoveredPlan, setHoveredPlan] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-accent font-medium tracking-widest text-sm uppercase">
              Choose Your Plan
            </span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-heading uppercase text-white mb-8 leading-tight"
          >
            Membership <span className="text-accent">Plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Choose the perfect plan for your fitness journey. Every plan includes our commitment to your success.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20"
          >
            <button
              className={`relative px-8 py-3 rounded-full transition-all duration-500 font-medium ${
                billing === "monthly"
                  ? "text-black"
                  : "text-white hover:text-accent"
              }`}
              onClick={() => setBilling("monthly")}
            >
              {billing === "monthly" && (
                <motion.div
                  className="absolute inset-0 bg-accent rounded-full"
                  layoutId="billing-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              className={`relative px-8 py-3 rounded-full transition-all duration-500 font-medium ${
                billing === "yearly"
                  ? "text-black"
                  : "text-white hover:text-accent"
              }`}
              onClick={() => setBilling("yearly")}
            >
              {billing === "yearly" && (
                <motion.div
                  className="absolute inset-0 bg-accent rounded-full"
                  layoutId="billing-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                Yearly
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 35%
                </span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plan Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans[billing].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={`relative group ${
                plan.popular
                  ? "lg:scale-110 lg:-translate-y-4"
                  : ""
              }`}
              onMouseEnter={() => setHoveredPlan(i)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-accent text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </motion.div>
              )}
              <div className={`
                relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500
                ${plan.popular
                  ? "border-accent shadow-2xl shadow-accent/20"
                  : "border-white/10 group-hover:border-accent/50"
                }
                ${hoveredPlan === i ? "scale-105 shadow-2xl" : ""}
              `}>
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                />
                {/* Plan Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.color}`}>
                      {plan.icon}
                    </div>
                    {plan.savings && (
                      <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                        Save {plan.savings}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-heading uppercase mb-2 group-hover:text-accent transition-colors">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-accent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-gray-500 line-through text-lg">
                        {plan.originalPrice}
                      </span>
                      <span className="text-green-400 text-sm font-medium">
                        You save ₹{parseInt(plan.originalPrice.replace(/[^0-9]/g, '')) - parseInt(plan.price.replace(/[^0-9]/g, ''))}
                      </span>
                    </div>
                  )}
                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + index * 0.05 }}
                        className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-accent text-black hover:bg-white hover:scale-105"
                        : "bg-white/10 text-white hover:bg-accent hover:text-black hover:scale-105"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Not sure which plan is right for you? Get a free consultation with our fitness experts.
          </p>
          <motion.button
            className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-white hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansTeaser;
