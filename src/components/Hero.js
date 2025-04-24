"use client"

import { useEffect, useRef } from "react"
import { FaDownload } from "react-icons/fa"
import "./Hero.css"

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    // Make sure hero content is visible immediately
    if (heroRef.current) {
      heroRef.current.classList.add("fade-in")
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content" ref={heroRef}>
          <h1 className="hero-title">
            Hi, I am <br />
            <span className="hero-name">Aniket Pradhan</span>
          </h1>
          <h2 className="hero-subtitle">
            I am a <span className="typed-text">Web Developer</span>
          </h2>
          <p className="hero-description">
            I am a Senior Web Developer with 2 years of experience in building scalable web applications. Skilled in
            both front-end and back-end development, I specialize in the MERN stack and other modern technologies to
            create seamless user experiences and efficient solutions.
          </p>
          <a href="/resume.pdf" className="btn btn-primary" download>
            <FaDownload className="btn-icon" /> DOWNLOAD CV
          </a>
        </div>
        <div className="hero-image">
          <div className="profile-img-container">
            <img src="/avatar.png?height=400&width=400" alt="Aniket Pradhan" className="profile-img" />
          </div>
        </div>
      </div>
      <div className="hero-pattern"></div>
    </section>
  )
}

export default Hero
