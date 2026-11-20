import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  MapPin,
  Code2,
  Sparkles,
  GraduationCap,
  ExternalLink,
  Menu,
  X,
  Phone,
} from "lucide-react";
import "./App.css";

const contact = {
  phone: "+91 7483106110",
  phoneLink: "tel:+917483106110",
  email: "the.only.shashank.78@gmail.com",
  emailLink: "mailto:the.only.shashank.78@gmail.com",
  github: "https://github.com/Shashank74831",
  linkedin: "https://www.linkedin.com/in/shashank-r-034b8b43a/",
};

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Git & GitHub",
  "React.js (Learning)",
];

const projects = [
  {
    number: "01",
    name: "CODEGENESIS X",
    category: "AI Intelligence Engine",
    description:
      "An AI-powered code repair and troubleshooting project. My contribution focuses on the AI Intelligence Engine, built with Python and FastAPI.",
    tags: ["Python", "FastAPI", "AI/ML"],
    status: "In development",
  },
  {
    number: "02",
    name: "CineBook",
    category: "Web Application",
    description:
      "A movie booking platform developed using Node.js, Express.js and MongoDB.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    status: "Project",
  },
  {
    number: "03",
    name: "Cat Image API",
    category: "API Integration",
    description:
      "A web project that uses an API to fetch and display random cat images.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    status: "Project",
  },
];

const certifications = [
  "IBM AI Foundations",
  "Getting Started with Generative AI",
  "Project Management Fundamentals",
  "Artificial Intelligence Fundamentals",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Certifications", "#certifications"],
    ["Contact", "#contact"],
  ];

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="grain" />

      <header className="navbar glass">
        <a href="#home" className="brand">
          <span className="brand-mark">S.R</span>
          <span>Shashank .R</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Connect <ArrowRight size={16} />
        </a>
      </header>

      <section className="hero page-width" id="home">
        <motion.div
          className="hero-photo glass"
          initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="photo-glow" />
          <img src="/profile.png" alt="Portrait of Shashank" />
          <span className="photo-caption">
            <span className="status-dot" />
            Open to opportunities
          </span>
        </motion.div>

        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="eyebrow hero-eyebrow">
            <Sparkles size={14} />
            BCA · Artificial Intelligence & Machine Learning
          </span>

          <h1>
            Hi, I'm
            <br />
            <span className="gradient-text">Shashank .R</span>
          </h1>

          <h2>
            Aspiring Developer <span>·</span> AI & ML Enthusiast
          </h2>

          <p>
            I enjoy building useful digital experiences, exploring
            artificial intelligence, and continuously improving my
            software development skills.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore My Work <ArrowDown size={17} />
            </a>
            <a href="#contact" className="button button-secondary">
              Contact Me <Mail size={17} />
            </a>
          </div>

          <div className="social-links">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Code2 />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <ExternalLink />
            </a>
            <a
              href={contact.emailLink}
              aria-label="Email"
              title="Email"
            >
              <Mail />
            </a>
            <a
              href={contact.phoneLink}
              aria-label="Phone"
              title="Call me"
            >
              <Phone />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-side-card glass"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <span className="card-kicker">LET'S CONNECT</span>

          <p>
            <Mail size={16} />
            <a href={contact.emailLink}>{contact.email}</a>
          </p>

          <p>
            <Phone size={16} />
            <a href={contact.phoneLink}>{contact.phone}</a>
          </p>

          <p>
            <MapPin size={16} />
            Bengaluru, India
          </p>

          <p>
            <Code2 size={16} />
            Building & learning every day
          </p>
        </motion.div>
      </section>

      <div className="scroll-note">
        <span />
        SCROLL TO EXPLORE
        <span />
      </div>

      <section className="content-section page-width" id="about">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title="Curious mind. Builder's mindset."
          description="A little about my background and what drives me."
        />

        <motion.div
          className="about-card glass"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-icon">
            <GraduationCap size={36} />
          </div>

          <div>
            <h3>Learning, building and growing.</h3>
            <p>
              I'm a final-year BCA student specializing in Artificial
              Intelligence and Machine Learning at Aditya Institute
              of Management and Studies, Bengaluru. I'm interested in
              software development, web technologies and AI. I enjoy
              solving problems, experimenting with new tools and
              working with others to turn ideas into practical projects.
            </p>

            <div className="about-facts">
              <span><strong>BCA</strong> · AIML</span>
              <span><strong>2024–Present</strong> · Degree</span>
              <span><strong>4</strong> · Certifications</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="content-section page-width" id="skills">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Skills & technologies"
          description="Technologies I've worked with and skills I'm developing."
        />

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-chip glass"
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.035 }}
            >
              <span className="skill-orb" />
              {skill}
            </motion.div>
          ))}
        </div>

        <div className="soft-skills glass">
          <span>Problem-solving</span>
          <span>Communication</span>
          <span>Teamwork</span>
          <span>Adaptability</span>
          <span>Time management</span>
        </div>
      </section>

      <section className="content-section page-width" id="projects">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects I've worked on"
          description="A selection of projects from my learning and development journey."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card glass"
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -8, rotateX: 2 }}
            >
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View GitHub <ExternalLink size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="content-section page-width" id="education">
        <SectionHeading
          eyebrow="MY JOURNEY"
          title="Education"
          description="My academic background."
        />

        <div className="education-grid">
          <article className="education-card glass">
            <span className="education-date">2024 – Present</span>
            <h3>Bachelor of Computer Applications</h3>
            <p>Artificial Intelligence & Machine Learning</p>
            <span>
              Aditya Institute of Management and Studies · Bengaluru
            </span>
          </article>

          <article className="education-card glass">
            <span className="education-date">2022 – 2024</span>
            <h3>Pre-University Course</h3>
            <p>PCMC</p>
            <span>Jnana Jyothi PU College</span>
          </article>
        </div>
      </section>

      <section
        className="content-section page-width"
        id="certifications"
      >
        <SectionHeading
          eyebrow="CONTINUOUS LEARNING"
          title="Certifications"
          description="Courses and certifications completed along the way."
        />

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div
              className="cert-card glass"
              key={cert}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="cert-check">✓</span>
              <span>{cert}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact-section page-width" id="contact">
        <motion.div
          className="contact-card glass"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">HAVE AN IDEA?</span>

          <h2>
            Let's create something{" "}
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p>
            I'm open to connecting, learning and exploring opportunities.
            Feel free to reach out through any of these channels.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={contact.emailLink}
            >
              <Mail size={17} /> Email Me
            </a>

            <a
              className="button button-secondary"
              href={contact.phoneLink}
            >
              <Phone size={17} /> Call Me
            </a>

            <a
              className="button button-secondary"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ExternalLink size={16} />
            </a>

            <a
              className="button button-secondary"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Code2 size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="footer page-width">
        <a href="#home" className="brand">
          <span className="brand-mark">S.R</span>
          <span>Shashank .R</span>
        </a>

        <span>Designed & built with curiosity.</span>

        <span>© {new Date().getFullYear()} Shashank .R</span>
      </footer>
    </main>
  );
}

export default App;
