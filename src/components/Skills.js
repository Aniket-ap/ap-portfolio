"use client"

import { useEffect, useRef } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaWordpress,
} from "react-icons/fa"
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiShopify,
  SiJenkins,
} from "react-icons/si"
import "./Skills.css"

const Skills = () => {
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
    { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
    { name: "React.js", icon: <FaReact className="skill-icon react" /> },
    { name: "Next.js", icon: <SiNextdotjs className="skill-icon next" /> },
    { name: "TypeScript", icon: <SiTypescript className="skill-icon ts" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
  ]

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
    { name: "Express.js", icon: <SiExpress className="skill-icon express" /> },
    { name: "MongoDB", icon: <SiMongodb className="skill-icon mongo" /> },
    { name: "MySQL", icon: <SiMysql className="skill-icon mysql" /> },
    { name: "Python", icon: <FaPython className="skill-icon python" /> },
    { name: "PHP", icon: <FaPhp className="skill-icon php" /> },
  ]

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt className="skill-icon git" /> },
    { name: "Docker", icon: <FaDocker className="skill-icon docker" /> },
    { name: "AWS", icon: <FaAws className="skill-icon aws" /> },
    { name: "Jenkins", icon: <SiJenkins className="skill-icon jenkins" /> },
    { name: "WordPress", icon: <FaWordpress className="skill-icon wordpress" /> },
    { name: "Shopify", icon: <SiShopify className="skill-icon shopify" /> },
  ]

  const analyticsSkills = [
    { name: "Google Tag Manager", icon: <SiGoogletagmanager className="skill-icon gtm" /> },
    { name: "Google Analytics (GA4)", icon: <SiGoogleanalytics className="skill-icon ga4" /> },
    { name: "Google Ads", icon: <SiGoogleads className="skill-icon gads" /> },
    { name: "Data Layer", icon: <FaJs className="skill-icon js" /> },
    { name: "Offline Conversions", icon: <FaNodeJs className="skill-icon node" /> },
  ]

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        <p className="section-subtitle">
          Technologies I use to build products end-to-end, from UI and APIs to CMS, tracking, and analytics
        </p>

        <div className="skills-container">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <div className="skill-pill" key={index}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <div className="skill-pill" key={index}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools & Platforms</h3>
            <div className="skills-grid">
              {toolsSkills.map((skill, index) => (
                <div className="skill-pill" key={index}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Analytics & Tracking</h3>
            <div className="skills-grid">
              {analyticsSkills.map((skill, index) => (
                <div className="skill-pill" key={index}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
