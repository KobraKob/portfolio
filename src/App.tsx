import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import BranchesPage from "./pages/BranchesPage"
import PlansPage from "./pages/PlansPage"
import ContactPage from "./pages/ContactPage"
import JoinPage from "./pages/JoinPage"
import Transformations from "./components/Transformations"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/transformations" element={<Transformations />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
