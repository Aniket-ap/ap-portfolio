"use client"

import { useEffect, useRef } from "react"
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./AllProjects.css"

const AllProjects = () => {
  const allProjectsRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (allProjectsRef.current) {
      observer.observe(allProjectsRef.current)
    }

    return () => {
      if (allProjectsRef.current) {
        observer.unobserve(allProjectsRef.current)
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
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with user authentication.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth.js"],
      github: "https://github.com/aniket-pradhan/blog-platform",
      live: "https://blog-platform-demo.vercel.app",
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "A real-time chat application with private messaging and group chat functionality.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com/aniket-pradhan/chat-app",
      live: "https://chat-app-demo.vercel.app",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website to showcase projects and skills with a modern design.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/aniket-pradhan/portfolio",
      live: "https://portfolio-demo.vercel.app",
    },
  ]

  return (
    <section className="section all-projects" ref={allProjectsRef}>
      <div className="container">
        <div className="back-link">
          <Link to="/" className="btn btn-outline">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <h2 className="section-title">All Projects</h2>
        <p className="section-subtitle">A comprehensive showcase of my work and projects</p>

        <div className="all-projects-grid">
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
      </div>
    </section>
  )
}

export default AllProjects
