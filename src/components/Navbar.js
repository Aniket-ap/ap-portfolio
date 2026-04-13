"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToSectionWithRetry = (sectionId) => {
    let attemptCount = 0
    const maxAttempts = 30

    const tryScroll = () => {
      attemptCount += 1
      const target = document.getElementById(sectionId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }

      if (attemptCount < maxAttempts) {
        window.setTimeout(tryScroll, 50)
      }
    }

    tryScroll()
  }

  const handleNavToSection = (e, sectionId) => {
    e.preventDefault()
    setMenuOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      scrollToSectionWithRetry(sectionId)
      return
    }

    scrollToSection(sectionId)
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="logo-bracket">&lt;</span>
          Aniket
          <span className="logo-slash">/</span>
          Pradhan
          <span className="logo-bracket">&gt;</span>
        </Link>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={(e) => handleNavToSection(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavToSection(e, "skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleNavToSection(e, "experience")}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavToSection(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavToSection(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>

        <div className="social-icons">
          <a href="https://github.com/Aniket-ap" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aniket-pro/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
