import "./Styles/Process.css";

export default function ProcessComponent() {
  const processSteps = [
    {
      number: "01",
      title: "Understanding the problem",
      text: "Before writing any code, I focus on understanding the goal, the user needs and the context of the product. This allows me to make better decisions from the start.",
    },
    {
      number: "02",
      title: "Planning the solution",
      text: "I break down problems into smaller tasks and define a clear structure before building. This helps me write cleaner code and avoid unnecessary complexity.",
    },
    {
      number: "03",
      title: "Building with purpose",
      text: "I develop using React and modern JavaScript, focusing on reusable components, readability and performance.",
    },
    {
      number: "04",
      title: "Improving and iterating",
      text: "I continuously test, refine and improve my work based on feedback and new ideas. I see development as an evolving process, not a final result.",
    },
  ];

  return (
    <section id="process-component" className="process reveal">
      <div className="process__container container">
        <h2 className="process__title">How I Think</h2>

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
