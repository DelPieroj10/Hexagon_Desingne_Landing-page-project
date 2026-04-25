import FAQItem from "./FAQItem";
import { faqData } from "./faqData";
import "../Styles/FAQ.css";

export default function FAQ() {
  return (
    <section id="faq" className="questions container">
      <h2 className="questions__subtitle">Frequently Asked Questions</h2>
      <p className="questions__paragraph">
        Here are some common questions about me. If you have any other questions you'd like answered, please feel free to contact me.
      </p>

      <section className="questions__container">
        {faqData.map((faq) => (
          <FAQItem 
            key={faq.id} 
            question={faq.question} 
            answer={faq.answer}
          />
        ))}
      </section>
    </section>
  );
}
