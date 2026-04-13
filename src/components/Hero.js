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
            I am a <span className="typed-text">Full Stack Developer</span>
          </h2>
          <p className="hero-description">
            Full Stack Developer with 3+ years of experience creating modern web applications using React, Next.js, and Node.js. Skilled in delivering production-ready CMS solutions with WordPress (custom themes and plugins) and Shopify (theme customization), along with implementing marketing and analytics tracking using GTM, GA4, and Google Ads.
          </p>
          <a href="https://raw.githubusercontent.com/Aniket-ap/ap-portfolio/main/Resume.pdf" className="btn btn-primary" download>
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
