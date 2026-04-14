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
      title: "Bellaveste eCommerce",
      description:
        "Fashion e-commerce storefront with authentication, product browsing, cart, checkout, orders, and profile features.",
      image: "/project-1.png",
      live: "https://bellaveste-frontend.vercel.app/",
      github: "https://github.com/Aniket-ap/bellaveste-frontend",
      githubBackend: "https://github.com/Aniket-ap/bellaveste-backend",
      technologies: ["React", "Vite", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
      highlights: [
        "Auth with access + refresh token flow",
        "Cart, checkout, and order history",
        "Profile tabs (addresses, purchased items, wishlist)",
      ],
      details: {
        overview:
          "Bellaveste is a full-stack e-commerce app with a modern storefront UX and a production-style API. It focuses on clean state management, guarded routes, resilient checkout flows, and scalable feature patterns (cart, orders, wishlist, profile).",
        features: [
          "Lazy-loaded routes with auth-guarded pages (checkout, orders)",
          "Cart sync (local state + server persistence when logged in)",
          "Checkout flow with order creation and payment status update",
          "Wishlist and profile sections with saved addresses",
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
          <div
            className={`project-details ${selectedProject.slug === "ecommerce-app" ? "project-details--featured" : ""}`}
          >
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
                  {selectedProject.slug === "ecommerce-app" ? (
                    <>
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary project-details-btn"
                        >
                          <FaExternalLinkAlt /> Live Website
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline project-details-btn"
                        >
                          <FaGithub /> Frontend Repo
                        </a>
                      )}
                      {selectedProject.githubBackend && (
                        <a
                          href={selectedProject.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline project-details-btn"
                        >
                          <FaGithub /> Backend Repo
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub /> Code
                        </a>
                      )}
                      {selectedProject.live && (
                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </>
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
              {projects.map((project) => {
                const isBellaveste = project.slug === "ecommerce-app"

                if (isBellaveste) {
                  return (
                    <div className="project-card project-card--featured" key={project.id}>
                      <div className="project-image project-image--featured">
                        <img src={project.image || "/placeholder.svg"} alt={project.title} />
                        <div className="project-image-overlay">
                          <div className="project-badge">Featured</div>
                          <div className="project-quick-links">
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-quick-link"
                              >
                                <FaExternalLinkAlt /> Live
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-quick-link"
                              >
                                <FaGithub /> Frontend
                              </a>
                            )}
                            {project.githubBackend && (
                              <a
                                href={project.githubBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-quick-link"
                              >
                                <FaGithub /> Backend
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="project-content">
                        <div className="project-title-row">
                          <h3 className="project-title">{project.title}</h3>
                          <span className="project-chip">Full Stack</span>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                          {project.technologies.map((tech, index) => (
                            <span className="tech-pill" key={index}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="project-links">
                          <Link to={`/projects/${project.slug}`} className="project-link">
                            Details <FaArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
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
                )
              })}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default AllProjects
