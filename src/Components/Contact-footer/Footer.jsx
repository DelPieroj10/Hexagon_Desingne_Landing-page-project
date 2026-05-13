import LinkedInIcon from "../../assets/images/icons8-linkedin.png";
import GitHubIcon from "../../assets/images/icons8-github.png";
import "../Styles/footer.css";

export default function Footer() {
  return (
    <footer id="footer" className='footer'>
      <section className="footer__container container">
        <div>
          <h2 className="footer__title">Jean Piero Parra Bustamante</h2>
          <p>Frontend Developer</p><br />
          <p>Built with React, Framer Motion and obsession for detail.</p>
        </div>

        <nav className="nav nav--footer">
          <ul className="nav__link nav__link--footer">
            <li className="nav__item nav__item--footer"> 
              <a href="#portfolio" className="nav__anchor nav__anchor--footer">Portfolio</a>
            </li>
            <li className="nav__item nav__item--footer"> 
              <a href="#faq" className="nav__anchor nav__anchor--footer">FAQ</a>
            </li>
            <li className="nav__item nav__item--footer"> 
              <a href="#contact" className="nav__anchor nav__anchor--footer">Contact</a>
            </li>
            <li className="nav__item nav__item--footer"> 
              <a href="#home" className="nav__anchor nav__anchor--footer">Home</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="footer__copy container">
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/jean-piero-parra-bustamante/" 
            className="footer__icon"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <img src={LinkedInIcon} alt="LinkedIn Icon" className="footer__img" />
          </a>
          <a href="https://github.com/DelPieroj10 " 
            className="footer__icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub Icon" className="footer__img" />
          </a>
        </div>

        <h3 className="footer__copyright">
          © {new Date().getFullYear()} Piero Bustamante. All rights reserved.
        </h3>
      </section>

    </footer>
  )
}
