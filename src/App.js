"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import AllProjects from "./components/AllProjects"
import Blogs from "./components/Blogs"
import AllBlogs from "./components/AllBlogs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading amazing stuff...</p>
      </div>
    )
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                {/* <Projects /> */}
                <Blogs />
                <Contact />
              </>
            }
          />
          {/* <Route path="/projects" element={<AllProjects />} />
          <Route path="/blogs" element={<AllBlogs />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
