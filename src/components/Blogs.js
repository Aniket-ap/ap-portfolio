"use client"

import { useEffect, useRef } from "react"
import { FaCalendarAlt, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Blogs = () => {
  const blogsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (blogsRef.current) {
      observer.observe(blogsRef.current)
    }

    return () => {
      if (blogsRef.current) {
        observer.unobserve(blogsRef.current)
      }
    }
  }, [])

  const blogs = [
    {
      id: 1,
      title: "From Local Development to Live Server: A Complete Guide to Deploying Your React.js Project on Ubuntu",
      excerpt: "Learn how to deploy your React.js application on an Ubuntu server with step-by-step instructions.",
      date: "March 15, 2023",
      url: "https://dev.to/aniket_ap/from-local-development-to-live-server-a-complete-guide-to-deploying-your-react-js-project-on-ubuntu-1idd",
    },
    {
      id: 2,
      title: "Supercharging Your MERN Stack App with Redis Caching: A Deep Dive",
      excerpt:
        "Explore how to implement Redis caching in your MERN stack application to improve performance and scalability.",
      date: "June 22, 2023",
      url: "https://dev.to/aniket_ap/supercharging-your-mern-stack-app-with-redis-caching-a-deep-dive-1587",
    },
  ]

  return (
    <section id="blogs" className="section blogs" ref={blogsRef}>
      <div className="container">
        <h2 className="section-title">Blogs</h2>
        <p className="section-subtitle">Articles and tutorials I've written to share my knowledge and experiences</p>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-content">
                <div className="blog-date">
                  <FaCalendarAlt /> {blog.date}
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="blog-link">
                  Read More <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="view-all-container">
          <Link to="/blogs" className="btn btn-outline">
            View All Blogs <FaArrowRight style={{ marginLeft: "8px" }} />
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default Blogs
