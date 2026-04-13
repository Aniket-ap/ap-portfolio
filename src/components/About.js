"use client"

import { useEffect, useRef } from "react"
import { FaChartLine, FaCode, FaLaptopCode, FaServer } from "react-icons/fa"
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
              I’m a Full Stack Developer with 3+ years of experience building fast, reliable web products—from
              marketing websites to full-featured applications. I enjoy taking ownership end-to-end: UI, APIs, data,
              deployments, and the tracking that proves what’s working.
            </p>
            <p>
              My core stack is React, Node.js, and Next.js. Alongside that, I build CMS-based solutions using WordPress
              (custom themes and plugins) and Shopify (theme customization and storefront improvements). I focus on
              clean architecture, performance, and a great user experience across devices.
            </p>
            <p>
              I also work closely with marketing and growth needs—implementing GTM, data layers, GA4 reporting, and
              Google Ads conversion tracking (including offline conversions via APIs). I use analytics insights to
              iterate on landing pages, funnels, and product flows.
            </p>
          </div>

          <div className="about-services">
            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3>Full-Stack Apps</h3>
              <p>Building scalable web apps with React, Next.js, Node.js, and modern APIs</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaServer />
              </div>
              <h3>Backend & APIs</h3>
              <p>Designing secure APIs, auth flows, and integrations with third-party services</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaLaptopCode />
              </div>
              <h3>CMS Development</h3>
              <p>WordPress custom themes/plugins and Shopify theme customization for growth-focused stores</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaChartLine />
              </div>
              <h3>Analytics & Tracking</h3>
              <p>GTM + GA4 + Google Ads tracking with data layers and conversion optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
