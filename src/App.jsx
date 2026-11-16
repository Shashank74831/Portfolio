import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Brain,
  Globe,
  GraduationCap,
  Award,
  MapPin,
  Terminal,
  Database,
  Layers,
} from "lucide-react";
import "./App.css";

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "HTML",
  "CSS",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Git",
  "GitHub",
];

const projects = [
  {
    number: "01",
    title: "CineBook",
    category: "Full Stack Web Application",
    description:
      "A movie booking web application built to manage movie listings and booking-related functionality.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    icon: Globe,
    status: "Project",
  },
  {
    number: "02",
    title: "Cat Image API",
    category: "API Integration",
    description:
      "An application that integrates an external API to fetch and display cat images dynamically.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    icon: Code2,
    status: "Project",
  },
  {
    number: "03",
    title: "CODEGENESIS X",
    category: "AI Intelligence Engine",
    description:
      "An AI-powered project focused on intelligent bug classification and software development assistance. Currently under development.",
    technologies: ["Python", "AI/ML", "FastAPI"],
    icon: Brain,
    status: "In Development",
  },
];

const certifications = [
  "Getting Started with Generative AI",
  "Artificial Intelligence Fundamentals",
  "Project Management Fundamentals",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, highlight }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title} <span>{highlight}</span>
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          SR<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <ArrowUpRight size={16} />
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Shashank<span>.R</span>
          </h1>

          <p className="hero-subtitle">
            BCA AIML Student &amp; Full Stack Developer
          </p>

          <p className="hero-description">
            Passionate about technology, artificial intelligence and
            building meaningful digital experiences through code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me <Mail size={17} />
            </a>
          </div>

          <div className="hero-location">
            <MapPin size={16} />
            Bengaluru, Karnataka, India
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-glow">
            <img
              src="/profile.png"
              alt="Shashank R. profile"
              className="profile-image"
            />
          </div>

          <div className="floating-card">
            <Code2 size={20} />
            <div>
              <strong>Building the Future</strong>
              <p>One line of code at a time</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <SectionHeading
          eyebrow="GET TO KNOW ME"
          title="About"
          highlight="Me"
        />

        <motion.div
          className="about-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-text">
            <h3>
              Exploring Technology.
              <br />
              Building What's Next.
            </h3>

            <p>
              I'm Shashank R., a BCA student specializing in Artificial
              Intelligence and Machine Learning at Aditya Institute of
              Management and Studies, Bengaluru.
            </p>

            <p>
              I'm interested in software development, AI/ML and full-stack
              web development. I enjoy learning new technologies,
              developing practical projects and improving my problem-solving
              skills.
            </p>

            <p>
              I'm currently learning React.js and expanding my knowledge
              of full-stack development while exploring the possibilities
              of artificial intelligence.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <Brain size={25} />
              <h4>AI & Machine Learning</h4>
              <p>Exploring intelligent technologies</p>
            </div>

            <div className="about-card">
              <Code2 size={25} />
              <h4>Web Development</h4>
              <p>Building practical web applications</p>
            </div>

            <div className="about-card">
              <Terminal size={25} />
              <h4>Problem Solving</h4>
              <p>Learning through hands-on projects</p>
            </div>

            <div className="about-card">
              <Layers size={25} />
              <h4>Continuous Learning</h4>
              <p>Growing my technical skill set</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <SectionHeading
          eyebrow="MY EXPERTISE"
          title="Technical"
          highlight="Skills"
        />

        <motion.div
          className="skills-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill}
              whileHover={{ y: -7, scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Code2 size={21} />
              <h3>{skill}</h3>
            </motion.div>
          ))}
        </motion.div>

        <p className="skills-note">
          Currently learning React.js and strengthening my full-stack
          development skills.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <SectionHeading
          eyebrow="WHAT I'VE BUILT"
          title="My"
          highlight="Projects"
        />

        <div className="projects-grid">
          {projects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>
                  <ProjectIcon size={27} />
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-status">
                  {project.status}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section" id="education">
        <SectionHeading
          eyebrow="MY ACADEMIC BACKGROUND"
          title="Education &"
          highlight="Certifications"
        />

        <div className="education-grid">
          <motion.div
            className="education-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap size={30} />

            <span className="card-label">2024 – 2027</span>

            <h3>Bachelor of Computer Applications</h3>

            <h4>Artificial Intelligence & Machine Learning</h4>

            <p>Aditya Institute of Management and Studies</p>

            <span className="education-location">
              Bengaluru, Karnataka
            </span>
          </motion.div>

          <motion.div
            className="certifications-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="certification-heading">
              <Award size={27} />
              <h3>Certifications</h3>
            </div>

            {certifications.map((certification, index) => (
              <div className="certification-item" key={certification}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{certification}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Build"
          highlight="Something Great"
        />

        <motion.div
          className="contact-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Have an idea or opportunity?</h3>

          <p>
            I'm interested in connecting with people, exploring
            opportunities and collaborating on meaningful projects.
          </p>

          <a href="#home" className="primary-button">
            Back to Home <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          SR<span>.</span>
        </a>

        <p>
          Designed &amp; Built by Shashank.R
        </p>

        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
