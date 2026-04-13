"use client"

import { useEffect, useRef } from "react"
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import "./AllProjects.css"
import "./Projects.css"

const AllProjects = () => {
  const allProjectsRef = useRef(null)
  const { slug } = useParams()

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
  }, [slug])

  const projects = [
    {
      id: 1,
      slug: "ecommerce-app",
      title: "Ecommerce App",
      description:
        "A modern e-commerce experience with product discovery, cart, checkout flow, and an admin-friendly structure.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=60",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      highlights: [
        "Product listing and search-ready structure",
        "Cart and checkout flow with order summary",
        "Clean component architecture for scaling features",
      ],
      details: {
        overview:
          "This project focuses on building a practical e-commerce foundation: reusable UI components, predictable state, and a checkout flow that’s easy to extend with payments, shipping rules, and promotions.",
        features: [
          "Product catalog UI with categories and product detail structure",
          "Cart management with quantity updates and totals",
          "Checkout-ready pages with validation-ready form layout",
          "Extensible admin patterns for products and orders",
        ],
      },
    },
    {
      id: 2,
      slug: "banking-backend-api",
      title: "Banking Backend API",
      description:
        "API-first backend that models accounts and transactions with a safe, auditable transaction workflow.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=60",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
      highlights: ["Idempotent transaction endpoints", "Ledger-style transaction records", "Auditable logs and validations"],
      details: {
        overview:
          "A backend service that demonstrates how money movement should be handled: validate requests, write immutable transaction records, and keep the system consistent even under retries and concurrency.",
        transactionFlow: [
          "Validate request (amount, sender, receiver, limits) and authenticate the user",
          "Generate an idempotency key to handle retries safely",
          "Create a transaction record with a pending status",
          "Apply balance updates atomically inside a database transaction",
          "Write ledger entries (debit/credit) and mark the transaction as completed",
          "Emit events / logs for audit and monitoring",
        ],
      },
    },
    {
      id: 3,
      slug: "chat-app",
      title: "Real-time Chat App",
      description: "Real-time chat with 1:1 and group messaging, online presence, and a scalable socket architecture.",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=60",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      highlights: ["Real-time messaging", "Typing indicators and presence", "Scalable pub/sub-ready structure"],
      details: {
        overview:
          "A chat application built around real-time communication patterns, focusing on predictable events, message delivery, and a UI that feels responsive and modern.",
        features: ["1:1 and group chat structure", "Typing indicators, online presence", "Message history and pagination-ready approach"],
      },
    },
  ]

  const selectedProject = slug ? projects.find((p) => p.slug === slug) : null

  return (
    <section className="section all-projects" ref={allProjectsRef}>
      <div className="container">
        <div className="back-link">
          <Link to={slug ? "/projects" : "/"} className="btn btn-outline">
            <FaArrowLeft /> {slug ? "Back to Projects" : "Back to Home"}
          </Link>
        </div>

        {slug && !selectedProject && (
          <>
            <h2 className="section-title">Project Not Found</h2>
            <p className="section-subtitle">The project you are looking for does not exist.</p>
          </>
        )}

        {selectedProject ? (
          <div className="project-details">
            <div className="project-details-hero">
              <div className="project-details-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="project-details-summary">
                <h2 className="project-details-title">{selectedProject.title}</h2>
                <p className="project-details-description">{selectedProject.description}</p>

                <div className="project-tech">
                  {selectedProject.technologies.map((tech, index) => (
                    <span className="tech-pill" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-details-sections">
              {selectedProject.details?.overview && (
                <div className="project-details-section">
                  <h3>Overview</h3>
                  <p>{selectedProject.details.overview}</p>
                </div>
              )}

              {selectedProject.highlights?.length > 0 && (
                <div className="project-details-section">
                  <h3>Highlights</h3>
                  <ul>
                    {selectedProject.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.details?.features?.length > 0 && (
                <div className="project-details-section">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.details.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.details?.transactionFlow?.length > 0 && (
                <div className="project-details-section">
                  <h3>Transaction Flow</h3>
                  <ol>
                    {selectedProject.details.transactionFlow.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Selected work showcasing full-stack development, backend design, and real-time systems</p>

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
          </>
        )}
      </div>
    </section>
  )
}

export default AllProjects
