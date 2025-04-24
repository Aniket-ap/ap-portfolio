"use client"

import { useEffect, useRef } from "react"
import { FaCalendarAlt, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const AllBlogs = () => {
  const allBlogsRef = useRef(null)

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

    if (allBlogsRef.current) {
      observer.observe(allBlogsRef.current)
    }

    return () => {
      if (allBlogsRef.current) {
        observer.unobserve(allBlogsRef.current)
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
    {
      id: 3,
      title: "Building Accessible Web Applications: A Comprehensive Guide",
      excerpt:
        "Learn how to create web applications that are accessible to all users, including those with disabilities.",
      date: "August 10, 2023",
      url: "#",
    },
    {
      id: 4,
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt: "Discover techniques to improve the performance of your React applications.",
      date: "September 5, 2023",
      url: "#",
    },
    {
      id: 5,
      title: "Introduction to GraphQL: A REST Alternative",
      excerpt: "Explore GraphQL as an alternative to REST APIs for your web applications.",
      date: "October 18, 2023",
      url: "#",
    },
    {
      id: 6,
      title: "Securing Your Node.js Applications: Best Practices",
      excerpt: "Learn how to implement security best practices in your Node.js applications.",
      date: "December 3, 2023",
      url: "#",
    },
  ]

  return (
    <section className="section all-blogs" ref={allBlogsRef}>
      <div className="container">
        <div className="back-link">
          <Link to="/" className="btn btn-outline">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <h2 className="section-title">All Blogs</h2>
        <p className="section-subtitle">A comprehensive collection of articles and tutorials I've written</p>

        <div className="all-blogs-grid">
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
      </div>
    </section>
  )
}

export default AllBlogs
