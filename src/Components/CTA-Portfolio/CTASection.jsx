import "../Styles/CTASection.css";

export default function CTASection() {
  return (
    <section className="cta cta-container">
      <div className="cta__content">
        <h1>Let’s work together.</h1>
        <p className="cta__subtitle">
          I’m ready to take on new challenges and contribute as a frontend
          developer.
        </p>

        <div className="cta__actions">
          <a href="#contact" className="btn-primary">
            Let’s talk
          </a>
        </div>
      </div>
    </section>
  );
}
