import "./Styles/Process.css";

export default function ProcessComponent() {
  const processSteps = [
    {
      number: "01",
      title: "Strategy",
      text: "I analyze business goals and define the best digital strategy.",
    },
    {
      number: "02",
      title: "Design",
      text: "I create modern and user-focused interfaces.",
    },
    {
      number: "03",
      title: "Development",
      text: "I build scalable and performant solutions.",
    },
    {
      number: "04",
      title: "Launch",
      text: "Your product goes live with full optimization.",
    },
  ];

  return (
    <section id="process-component" className="process reveal">
      <div className="process__container container">
        <h2 className="process__title">How I Work</h2>

        <div className="process__steps">
          {processSteps.map((step) => (
            <div 
              key={step.number} 
              className="process__step"
            >
              <div className="process__number process_icon"> {step.number} </div>
              <h3 className="process__subtitle"> {step.title} </h3>
              <p className="process__text">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
