import { TestimonyData } from "./TestimonyData";
import { useEffect, useState } from "react";
import TestimonyCard from "./TestimonyCard";
import "../Styles/Testimony.css";
import { motion } from "framer-motion";
import { fadeUp } from "../Styles/animation";

export default function Testimony() {
  const [idTestimonial, setIdTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, TestimonyData.length]);

  const next = () => {
    setIdTestimonial((prev) => (prev + 1) % TestimonyData.length);
  };

  const prev = () => {
    setIdTestimonial((prev) =>
      prev === 0 ? TestimonyData.length - 1 : prev - 1,
    );
  };

  let startX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) next(); // swipe left
    if (diff < -50) prev(); // swipe right
  };

  return (
    <motion.section
      className="testimony"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="testimony__container container">
        <button onClick={prev} className="testimony__arrow">
          ←
        </button>

        <TestimonyCard {...TestimonyData[idTestimonial]} />

        <button onClick={next} className="testimony__arrow">
          →
        </button>
      </div>

      <div className="testimony__dots">
        {TestimonyData.map((item) => (
          <span
            className={item.id === idTestimonial ? "dot active" : "dot"}
            key={item.id}
            onClick={() => setIdTestimonial(id)}
          />
        ))}
      </div>
    </motion.section>
  );
}
