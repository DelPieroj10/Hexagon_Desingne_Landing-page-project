import { projects } from "./PortfolioData";
import { motion } from "framer-motion";
import { useState } from "react";
import "../Styles/Portfolio.css";


export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => (project.tags || []).includes(filter));

  const featuredProject = projects.find((project) => project.featured);

  const regularProjects = filteredProjects.filter(
    (project) => !project.featured,
  );

  return (
    <section id="portfolio" className="portfolio">
      <h1>Not just projects… real problem solving</h1>

      <div className="portfolio__filters">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "React" ? "active" : ""}
          onClick={() => setFilter("React")}
        >
          React
        </button>
        <button
          className={filter === "Design" ? "active" : ""}
          onClick={() => setFilter("Design")}
        >
          Design
        </button>
        <button
          className={filter === "Photo" ? "active" : ""}
          onClick={() => setFilter("Photo")}
        >
          Photo
        </button>
      </div>

      {featuredProject && (
        <div className="featured">
          <div className="featured__image">
            <img src={featuredProject.image} alt={featuredProject.title} />
          </div>

          <div className="featured__content">
            <span className="featured__label">Featured Project</span>
            <h3 className="featured__title">{featuredProject.title}</h3>
            <p className="featured__description">{featuredProject.description}</p>

            <p className="featured__highlight">
              Built to explore async rendering and infinite scrolling with React.
            </p>

            {featuredProject.process && (
              <ul className="featured__process">
                {featuredProject.process.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            )}

            <div className="featured__tags">
              {featuredProject.tags.map((tag, id) => (
                <span key={id}>{tag}</span>
              ))}
            </div>

            <div className="featured__actions">
              <a href={featuredProject.demo}>Live Demo</a>

              <a href={featuredProject.github}>View Code</a>
            </div>
          </div>

        </div>
      )}

      <motion.div
        key={filter}
        className="portfolio__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {regularProjects.map((project) => (
          <motion.div
            className="card"
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="card__imageWrapper">
              <img
                className="card__image"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="card__actions card__overlay">
                <a href={project.demo}>Live Demo</a>
                <a href={project.github}>/ GitHub</a>
              </div>
            </div>
            <div className="card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <p className="card__hint">Click to see how it was built</p>

            <div className="tags">
              {project.tags.map((tag, id) => (
                <span key={id}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <div className="modal">
          <div className="modal__content">
            <img src={selectedProject.image} />

            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>

            <h4 className="title__process">What I did:</h4>
            {selectedProject.process && (
              <ul className="modal__process">
                {selectedProject.process.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            )}

            <div className="modal__links">
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>

            <button
              className="modal__button"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
