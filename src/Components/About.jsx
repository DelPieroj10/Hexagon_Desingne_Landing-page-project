import Jean_Piero_Parra_CV from "../assets/video/Jean_Piero_Parra_CV-2026.pdf";
import Image_AboutUs from "../assets/images/Image_AboutUs.png";
import "./Styles/AboutUs.css";
import { motion } from "framer-motion";
import { fadeUp } from "./Styles/animation";

export default function AboutUs() {
  return (
    <motion.section
      id="about"
      className="about reveal"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="about__container container">
        <div className="about__texts">
          <h2 className="about__title">
            Now, let me tell you a little bit about me.
          </h2>
          <p className="about__paragraph">
            I’m a Frontend Developer specialized in building intuitive and
            scalable web applications using React and others technologies.
            <br />
            <br />
            My background in psychology, coaching, marketing, advertising, and
            graphic design developed through courses and hands-on learning,
            allows me to understand how people think, interact and make
            decisions, which I now apply to create more intuitive and meaningful
            digital experiences.
            <br />
            <br />
            I’ve been developing real-world projects that strengthen my
            technical skills while improving my ability to solve problems and
            write clean, maintainable code.
            <br />
            <br />
            I’m currently seeking an opportunity to contribute to a team,
            continue growing and deliver impactful digital solutions.
          </p>
          <a href={Jean_Piero_Parra_CV} download className="about__cta">
            Download CV here
          </a>
        </div>

        <figure className="about__picture">
          <img
            src={Image_AboutUs}
            alt="About my work image"
            className="about__img"
          />
        </figure>
      </div>
    </motion.section>
  );
}
