import "./Styles/Price-style.css";

export default function Price() {
  const pricingPlans = [
    {
      id:"01",
      name: "Design Side",
      price: "I don’t just make things work… I make them feel right.",
      features: [
        "UI fundamentals",
        "Visual hierarchy",
        "Layout & composition",
        "Branding basics",
        "Design thinking"
      ],
      cta: "See how I think",
      href: "#process-component",
      highlight: false,
    },
    {
      id:"02",
      name: "Frontend Development",
      price: "This is where things get real.",
      features: [
        "React.js",
        "JavaScript (ES6+)",
        "Typescript",
        "HTML & CSS",
        "API integration",
        "Component-based architecture",
        "→ Currently building real-world projects with React",
      ],
      cta: "Check my work",
      href: "#portfolio",
      highlight: true,
    },
    {
      id:"03",
      name: "Human Factor",
      price: "I understand users… not just interfaces.",
      features: [
        "Psychology background",
        "Coaching mindset",
        "Problem solving",
        "Communication",
        "Adaptability"
      ],
      cta: "Why this matters",
      href: "#faq",
      highlight: false,
    },
  ];

  return (
    <section className="price container reveal">
      <h1 className="subtitle">Yes, I’m a junior… but not that kind</h1>

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

            <a href={plan.href} className="price__cta">
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
