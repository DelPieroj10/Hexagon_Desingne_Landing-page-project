export default function ServiceCard({ title, description, image }) {
  return (
    <article className="service-card reveal">
      <div className="hexagon-card">
        <img 
          src={image} 
          alt={title} 
          className="service-card_image" 
        />

        <div className="service-card_content">
          <h3 className="service-card_title">{title}</h3>
          <p className="service-card_text">{description}</p>

          <div className="service-card_reveal">
            <a href="#" className="service-card_btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
