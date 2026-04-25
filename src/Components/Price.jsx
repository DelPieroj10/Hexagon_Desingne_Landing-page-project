import "./Styles/Price-style.css";

export default function Price() {
  const pricingPlans = [
    {
      id:"01",
      name: "Brand Identity",
      price: "Take my money at once.",
      features: [
        "Logo design", 
        "Brand guideline", 
        "Social media assets",
        "Landing page"
      ],
      cta: "Tell us about your project",
      highlight: false,
    },
    {
      id:"02",
      name: "Photo Enhancement",
      price: "30% Discount",
      features: [
        "High Pass technique",
        "Dodge & Burn",
        "Hyperrealistic or Subrealistic retouch",
      ],
      cta: "I want this",
      highlight: true,
    },
    {
      id:"03",
      name: "Interior Design",
      price: "To hell! I love it. How much does it cost?",
      features: [
        "Space analysis",
        "Professional consulting",
        "Interior styling",
      ],
      cta: "This is what I need",
      highlight: false,
    },
  ];

  return (
    <section className="price container reveal">
      <h1 className="subtitle">Choose the service that best fits your needs</h1>

      <div className="price__table">
        {pricingPlans.map((plan, id) => (
          <div
            key={id}
            className={`price__element ${plan.highlight ? "price__element--best" : ""}`}
          >
            <p className="price__name">{plan.name}</p>

            <h3 className="price__price">{plan.price}</h3>

            <div className="price__items">
              {plan.features.map((feature, id) => (
                <p key={id} className="price__features">
                  {feature}
                </p>
              ))}
            </div>

            <a href="#" className="price__cta">
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
