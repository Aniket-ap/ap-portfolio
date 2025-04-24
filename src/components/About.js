"use client"

import { useEffect, useRef } from "react"
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa"
import "./About.css"

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="section about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about me and my journey as a web developer</p>

        <div className="about-content">
          <div className="about-text">
            <p>
              As a web developer with 2 years of experience, I've had the opportunity to work on various projects with
              different tools and languages. My journey in web development has been exciting and full of learning
              experiences.
            </p>
            <p>
              I specialize in building responsive and user-friendly web applications using modern technologies like
              React, Node.js, and MongoDB. I'm passionate about creating clean, efficient code and delivering
              high-quality solutions that meet client needs.
            </p>
            <p>
              Throughout my career, I've worked with diverse teams and clients, which has enhanced my communication and
              collaboration skills. I'm always eager to learn new technologies and stay updated with the latest trends
              in web development.
            </p>
          </div>

          <div className="about-services">
            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3>Web Development</h3>
              <p>Building responsive and dynamic websites with modern frameworks</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaServer />
              </div>
              <h3>Backend Development</h3>
              <p>Creating robust server-side applications and APIs</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaLaptopCode />
              </div>
              <h3>Frontend Development</h3>
              <p>Designing intuitive user interfaces with modern frameworks</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaMobileAlt />
              </div>
              <h3>Mobile Development</h3>
              <p>Building cross-platform mobile applications with React Native</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
