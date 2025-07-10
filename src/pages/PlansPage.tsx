import React, { useState } from "react"
import { Check } from "lucide-react"

const allPlans = {
  monthly: [
    {
      name: "Basic",
      price: "₹1,999/mo",
      features: ["Gym Access", "1 PT session/mo", "Group Classes"],
    },
    {
      name: "Pro",
      price: "₹3,499/mo",
      features: ["All Basic +", "4 PT sessions/mo", "Diet Consultation"],
    },
    {
      name: "Elite",
      price: "₹5,999/mo",
      features: ["All Pro +", "Unlimited PT", "Priority Booking"],
    },
  ],
  quarterly: [
    {
      name: "Basic",
      price: "₹5,499/qtr",
      features: ["Gym Access", "1 PT session/mo", "Group Classes"],
    },
    {
      name: "Pro",
      price: "₹9,499/qtr",
      features: ["All Basic +", "4 PT sessions/mo", "Diet Consultation"],
    },
    {
      name: "Elite",
      price: "₹16,499/qtr",
      features: ["All Pro +", "Unlimited PT", "Priority Booking"],
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "₹19,999/yr",
      features: ["Gym Access", "1 PT session/mo", "Group Classes"],
    },
    {
      name: "Pro",
      price: "₹34,999/yr",
      features: ["All Basic +", "4 PT sessions/mo", "Diet Consultation"],
    },
    {
      name: "Elite",
      price: "₹59,999/yr",
      features: ["All Pro +", "Unlimited PT", "Priority Booking"],
    },
  ],
}

const PlansPage = () => {
  const [billing, setBilling] = useState<"monthly" | "quarterly" | "yearly">(
    "monthly"
  )

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-heading uppercase text-accent text-center mb-12">
          Choose Your Plan
        </h1>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          {["monthly", "quarterly", "yearly"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 border rounded-full transition ${
                billing === type
                  ? "bg-accent text-black font-bold"
                  : "bg-gray-800 text-white"
              }`}
              onClick={() => setBilling(type as any)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {allPlans[billing].map((plan, i) => (
            <div
              key={i}
              className="bg-darkGrey p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-heading uppercase mb-2 text-accent">
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {plan.features.map((f, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/join"
                className="mt-6 block bg-accent text-black text-center py-2 font-semibold rounded hover:scale-105 transition"
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlansPage
