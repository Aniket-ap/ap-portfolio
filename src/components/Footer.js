import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            Aniket
            <span className="logo-slash">/</span>
            Pradhan
            <span className="logo-bracket">&gt;</span>
          </div>

          <p className="footer-text">
            Senior Web Developer specializing in creating modern and responsive web applications.
          </p>

          <div className="footer-social">
            <a href="https://github.com/Aniket-ap" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aniket-pro/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:pro.aniket08@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            {/* <a href="#projects">Projects</a> */}
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="copyright">&copy; {new Date().getFullYear()} Aniket Pradhan. All rights reserved.</p>
        </div>
      </div>

      <div className="footer-pattern"></div>
    </footer>
  )
}

export default Footer
