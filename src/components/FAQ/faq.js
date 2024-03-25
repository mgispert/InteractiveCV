// components/faq/Faq.js
import React from "react";
import { faq } from "../utils/CONTENT.json";

const Faq = () => {
  return (
    <section>
      <div>
        <h2>{faq.title}</h2>
        <div>
          {faq.questions.map((item, index) => (
            <div key={index}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
