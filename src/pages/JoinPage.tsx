import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const joinSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  branch: z.string().min(1, "Select a branch"),
  plan: z.string().min(1, "Choose a plan"),
})

type JoinFormData = z.infer<typeof joinSchema>

const branches = ["MYKATTU Central", "MYKATTU East", "MYKATTU North"]
const plans = ["Basic", "Pro", "Elite"]

const JoinPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JoinFormData>({ resolver: zodResolver(joinSchema) })

  const onSubmit = (data: JoinFormData) => {
    console.log("Joining data:", data)
    alert("Welcome to MYKATTU! Our team will reach out shortly.")
    reset()
  }

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-heading uppercase text-accent mb-8 text-center">
          Start Your Journey
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-darkGrey text-white border border-gray-700 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("email")}
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-darkGrey text-white border border-gray-700 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-darkGrey text-white border border-gray-700 rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <select
              {...register("branch")}
              className="w-full px-4 py-3 bg-darkGrey text-white border border-gray-700 rounded"
            >
              <option value="">Select Branch</option>
              {branches.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            {errors.branch && (
              <p className="text-red-500 text-sm mt-1">
                {errors.branch.message}
              </p>
            )}
          </div>
          <div>
            <select
              {...register("plan")}
              className="w-full px-4 py-3 bg-darkGrey text-white border border-gray-700 rounded"
            >
              <option value="">Select Plan</option>
              {plans.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            {errors.plan && (
              <p className="text-red-500 text-sm mt-1">
                {errors.plan.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-black font-bold py-3 rounded hover:scale-105 transition"
          >
            Start My Journey
          </button>
        </form>
      </div>
    </section>
  )
}

export default JoinPage
