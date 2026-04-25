import '../Styles/CTASection.css';

export default function CTASection(){
  return (
    <section className="cta">
      <div className="cta__content">
        <h2>Let’s build something amazing together</h2>
        <p>I help brands create modern and high-performing digital experiences.</p>

        <div className="cta__actions">
          <button className="btn-primary">
            <a href="#contact"> Start a project </a>  
          </button>
          <button className="btn-secondary">
            <a href="#portfolio"> View a portfolio </a>
          </button>
        </div>
      </div>
    </section>
  );
};
