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
      : projects.filter(project => 
        (project.tags || []).includes(filter)
      );

  return (
    <section id="portfolio" className="portfolio">
      <h1>My Works</h1>

      <div className="portfolio__filters">
        <button className={filter === "All" ? "active" : ""}  
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button className={filter === "React" ? "active" : ""}  
          onClick={() => setFilter("React")}
        >
          React
        </button>
        <button className={filter === "Design" ? "active" : ""}  
          onClick={() => setFilter("Design")}
        >
          Design
        </button>
        <button className={filter === "Photo" ? "active" : ""}  
          onClick={() => setFilter("Photo")}
        >
          Photo
        </button>
      </div>

      <motion.div
        key={filter}
        className="portfolio__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {filteredProjects.map((project) => (
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

            <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <button className="modal__button" onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
