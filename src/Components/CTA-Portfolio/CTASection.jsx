import '../Styles/CTASection.css';

export default function CTASection(){
  return (
    <section className="cta">
      <div className="cta__content">
        <h1>Let’s work together.</h1>
        <p className='cta__subtitle' >I’m ready to take on new challenges and contribute as a frontend developer.</p>

        <div className="cta__actions">
          <button className="btn-primary">
            <a href="#contact"> Let´s talk </a>  
          </button>
        </div>
      </div>
    </section>
  );
};
