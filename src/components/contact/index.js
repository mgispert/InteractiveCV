import React from "react";
import content from "@/content/index.json";

const Contact = () => (
  <section>
    <div>
      <h2>{content.contact.title}</h2>
      <p>{content.contact.description}</p>
      <ul>
        <li>Phone: 0034-650577215</li>
        <li>Email: mcg-511@hotmail.com</li>
        <li>Location: Barcelona, Spain</li>
      </ul>
    </div>
  </section>
);

export default Contact;
