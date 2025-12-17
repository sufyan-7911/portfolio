import React, { Component } from "react";

import {
  FiDownload,
  FiChevronRight,
  FiCode,
  FiCoffee,
  FiZap,
  FiMail,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import sufyanImage from "./suf port.png";
import "./Hero.css";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 1,
          icon: <FiCode />,
          title: "Web Development",
          description:
            "Building responsive websites with React, Next.js & modern frameworks.",
          features: [
            "Responsive Design",
            "SPA Development",
            "Performance",
            "Cross-browser",
          ],
          linkText: "View Projects",
        },
        {
          id: 2,
          icon: <FiZap />,
          title: "UI/UX Design",
          description:
            "Creating user-friendly interfaces focused on experience & accessibility.",
          features: [
            "UI Design",
            "UX Research",
            "Prototyping",
            "Design Systems",
          ],
          linkText: "See Designs",
        },
        {
          id: 3,
          icon: <FiCoffee />,
          title: "Consulting",
          description:
            "Expert advice on frontend development, best practices & code reviews.",
          features: [
            "Code Review",
            "Architecture",
            "Best Practices",
            "Team Training",
          ],
          linkText: "Book Now",
        },
      ],
      stats: [
        { number: "15+", label: "Projects", icon: <FiCode /> },
        { number: "2+", label: "Years Exp", icon: <FiCalendar /> },
        { number: "100%", label: "Satisfaction", icon: <FiZap /> },
        { number: "50+", label: "Clients", icon: <FiCoffee /> },
      ],
      techStack: [
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
      ],
      socialLinks: [
        {
          icon: <FaGithub />,
          url: "https://github.com/dashboard",
          label: "GitHub",
        },
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/sufyan-web-developer",
          label: "LinkedIn",
        },
      ],
    };
  }

  render() {
    return (
      <>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              {/* Badge */}
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span className="badge-text">Available for freelance work</span>
              </div>

              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Sufyan</span>
                <br />
                <span className="hero-subtitle">Front-End Developer</span>
              </h1>

              <div className="hero-buttons">
                <button className="btn btn-primary">
                  <FiDownload className="btn-icon" />
                  <a
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none",color: 'white' }}
                    href="https://drive.google.com/file/d/1L3cRwb5b_mG56scwQPb4-337ZZXg6sbY/view"
                    target="blank"
                  >
                    Portfolio
                  </a>
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <span>Contact me</span>
                  <FiChevronRight className="btn-icon" />
                </button>
              </div>
              {/* Social Links */}
              <div className="hero-social">
                <span className="social-label">Connect with me:</span>
                <div className="social-icons">
                  {this.state.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-img">
              <div className="img-container">
                <img
                  src={sufyanImage}
                  alt="Sufyan - Frontend Developer"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header">
              <h3 className="section-subtitle">- Services</h3>
              <h2 className="section-title">What I Offer</h2>
              <p className="section-description">
                Professional services tailored to your needs with focus on
                quality and modern practices
              </p>
            </div>

            <div className="services-grid">
              {this.state.services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="card-header">
                    <div className="card-icon">{service.icon}</div>
                    <h3 className="card-title">{service.title}</h3>
                  </div>
                  <p className="card-description">{service.description}</p>

                  <div className="card-features">
                    {service.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        <FiChevronRight className="feature-icon" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-container">
              <div className="about-image">
                <div className="about-img-wrapper">
                  <img
                    src={sufyanImage}
                    alt="Sufyan - About"
                    className="about-img"
                  />
                </div>
              </div>

              <div className="about-content">
                <h2 className="about-title">
                  About <span className="about-highlight">Me</span>
                </h2>

                <div className="about-text">
                  <p>
                    I'm <strong>Sufyan</strong>, a passionate Front-End
                    Developer with over 2 years of experience in building
                    responsive and user-friendly web applications. I specialize
                    in
                    <strong>
                      {" "}
                      React.js, Next.js, and modern JavaScript frameworks
                    </strong>
                    , focusing on clean code and scalable solutions.
                  </p>

                  <p>
                    My approach combines technical expertise with creative
                    problem-solving to deliver exceptional digital experiences.
                    I believe in writing maintainable code and following best
                    practices to ensure long-term project success.
                  </p>
                </div>

                <div className="about-skills">
                  <h4 className="skills-title">Core Skills</h4>
                  <div className="skills-list">
                    {this.state.techStack.slice(0, 6).map((skill, index) => (
                      <div key={index} className="skill-item">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="brand-logo">
                  <FiCode />
                  <span>
                    Sufyan<span className="brand-highlight">.dev</span>
                  </span>
                </div>
                <p className="footer-tagline">
                  Creating exceptional digital experiences through code and
                  design.
                </p>
              </div>

              <div className="footer-links">
                <h4>Quick Links</h4>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
              </div>

              <div className="footer-social">
                <h4>Connect</h4>
                <div className="social-links">
                  {this.state.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="copyright">
                &copy; {new Date().getFullYear()} Sufyan. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
