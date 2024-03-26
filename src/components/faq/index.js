import React from "react";
import content from "@/content/index.json";

const Faq = () => {
  return (
    <section>
      <div>
        <h2>{content.faq.title}</h2>
        <div>
          {content.faq.questions.map((item, index) => (
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
