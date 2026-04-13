"use client"

import { useEffect, useRef } from "react"
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
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
      slug: "ecommerce-app",
      title: "Ecommerce App",
      description:
        "A modern e-commerce experience with product discovery, cart, checkout flow, and an admin-friendly structure.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      slug: "banking-backend-api",
      title: "Banking Backend API",
      description:
        "API-first backend that models accounts and transactions with a safe, auditable transaction workflow.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=60",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
    },
    {
      id: 3,
      slug: "chat-app",
      title: "Real-time Chat App",
      description: "Real-time chat with 1:1 and group messaging, online presence, and a scalable socket architecture.",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=60",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    },
  ]

  return (
    <section id="projects" className="section projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and projects I’ve been involved with</p>

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
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  <Link to={`/projects/${project.slug}`} className="project-link">
                    Details <FaArrowRight />
                  </Link>
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
