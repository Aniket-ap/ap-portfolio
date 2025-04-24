"use client"

import { useEffect, useRef, useState } from "react"
import { FaBriefcase, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa"

const Experience = () => {
  const experienceRef = useRef(null)
  const [expandedItems, setExpandedItems] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current)
      }
    }
  }, [])

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const experiences = [
    {
      id: 1,
      title: "Senior Web Developer",
      company: "ShortOrder",
      period: "May 2023 - Present",
      description: [
        "Lead the development of responsive web applications using React.js and Node.js",
        "Implemented CI/CD pipelines using Jenkins for automated testing and deployment",
        "Optimized database queries and implemented caching strategies to improve application performance",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Mentored junior developers and conducted code reviews to ensure code quality",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Jenkins"],
    },
    {
      id: 2,
      title: "Freelance Developer",
      company: "Upwork",
      period: "Jan 2022 - Apr 2023",
      description: [
        "Developed custom web applications for various clients",
        "Created responsive e-commerce solutions using React and Next.js",
        "Implemented payment gateways and third-party API integrations",
        "Maintained ongoing client relationships and delivered projects on time",
        "Achieved 5-star rating with 95% client satisfaction",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "Firebase"],
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "StoryXpress",
      period: "Jan 2023 - Apr 2023",
      description: [
        "Developed and maintained responsive user interfaces using React.js",
        "Collaborated with designers to implement UI/UX designs",
        "Participated in code reviews and implemented feedback",
        "Assisted in troubleshooting and fixing bugs",
        "Gained experience with version control systems and agile development methodologies",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ]

  return (
    <section id="experience" className="section experience" ref={experienceRef}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey and work experience in the field of web development</p>

        <div className="experience-cards">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className="experience-header" onClick={() => toggleExpand(exp.id)}>
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
                <div className="experience-period">
                  <FaCalendarAlt /> {exp.period}
                </div>
                <div className="experience-toggle">{expandedItems[exp.id] ? <FaChevronUp /> : <FaChevronDown />}</div>
              </div>

              {expandedItems[exp.id] && (
                <div className="experience-details">
                  <ul className="experience-description">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="experience-tech">
                    {exp.technologies.map((tech, index) => (
                      <span className="tech-pill" key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
