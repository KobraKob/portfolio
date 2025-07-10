import React from "react"
import Hero from "../components/Hero"
import About from "../components/About"
import Branches from "../components/Branches"
import Transformations from "../components/Transformations"
import PlansTeaser from "../components/PlansTeaser"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Branches />
      <Transformations />
      <PlansTeaser />
      <Footer />
    </>
  )
}

export default HomePage
