"use client"

import { useState, useEffect, useRef } from "react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)
  const contactRef = useRef(null)
  const form = useRef(null)

  useEffect(() => {
    // Initialize EmailJS once when component mounts
    emailjs.init("4O23ZscDGF3TUOKUB") // Your public key
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus("sending")

    // Get current date and time for the template
    const now = new Date()
    const formattedTime = now.toLocaleString()

    // Send the email with the template
    emailjs.send(
      'service_tta7pn2',  // Your service ID
      'template_u4aicqh',  // Create this template in EmailJS dashboard with the HTML above
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: formattedTime,
        to_email: 'pro.aniket08@gmail.com'
      },
      '4O23ZscDGF3TUOKUB'  // Your public key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text)
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setTimeout(() => {
        setFormStatus(null)
      }, 3000)
    })
    .catch((error) => {
      console.error('Email sending failed:', error.text)
      setFormStatus("error")
      
      setTimeout(() => {
        setFormStatus(null)
      }, 3000)
    })
  }

  return (
    <section id="contact" className="section contact" ref={contactRef}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Feel free to reach out to me for any inquiries or collaboration opportunities
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>pro.aniket08@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 7330872430</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Hyderabad, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject of your message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Sending..." : "Send Message"}
                <FaPaperPlane style={{ marginLeft: "8px" }} />
              </button>

              {formStatus === "success" && <div className="form-success">Message sent successfully!</div>}
              {formStatus === "error" && <div className="form-error">Failed to send message. Please try again.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact