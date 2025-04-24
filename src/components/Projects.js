"use client"

import { useEffect, useRef } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Projects.css"

const Projects = () => {
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/aniket-pradhan/ecommerce-platform",
      live: "https://ecommerce-platform-demo.vercel.app",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "https://github.com/aniket-pradhan/task-management",
      live: "https://task-management-demo.vercel.app",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
      github: "https://github.com/aniket-pradhan/weather-dashboard",
      live: "https://weather-dashboard-demo.vercel.app",
    },
  ]

  return (
    <section id="projects" className="section projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A showcase of my recent work and projects I've been involved with</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-pill" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
