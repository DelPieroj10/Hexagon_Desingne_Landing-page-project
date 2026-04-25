import Image_AboutUs from "../assets/images/Image_AboutUs.png";
import './Styles/AboutUs.css'

export default function AboutUs() {
  return (
    <section id="about" className="about reveal">
        <div className="about__container container">
          <div className="about__texts">
            <h2 className="about__title">
              Let us know what you need and we'll quote you right now! But before, let us tell you a little bit about us first.
            </h2>
            <p className="about__paragraph">
              We are a team of passionate designers and developers dedicated to creating beautiful and functional websites and applications. We would like to continue talking about ourselves and, although we would love to, we prefer to speak with facts. Therefore, we invite you to visit our portfolio.
            </p>
            <a href="#portfolio" className="about__cta">
              View Portfolio here
            </a>
          </div>

          <figure className="about__picture">
            <img 
            src= {Image_AboutUs} 
            alt="About my work image" 
            className="about__img" 
          />
          </figure>
        </div>

    </section>
  )
}

