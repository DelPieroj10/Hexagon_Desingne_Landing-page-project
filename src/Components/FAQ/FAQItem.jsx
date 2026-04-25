import { useState } from 'react';
import Drop_down_arrow from "/images_icons/arrow_down.svg";

export default function FAQItem ({question, answer}) {
    const [open, setOpen] = useState(false);

  return (
    <article className={`questions__padding ${open ? "questions__padding--add" : ""}`}>
      <div className='questions__answer'>
        <h3 
          className="questions__title"
          onClick={()=> setOpen(!open)}  
        >
         {question}
         <span className={`questions__arrow ${open ? "questions__arrow--rotate" : ""}`}>
          <img src={Drop_down_arrow} alt="Drop down arrow" className="questions__img" />
         </span>
        </h3>

        <p 
          className="question__show"
          style={{height: open ? "auto" : "0px"}}
        >
          {answer}
        </p>
      </div>
    </article>
  );
}
