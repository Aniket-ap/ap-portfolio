"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
          </li>
          {/* <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li> */}
          <li>
            <a href="#blogs" onClick={() => setMenuOpen(false)}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
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
