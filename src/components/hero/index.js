import React from "react";
import content from "@/content/index.json";

const Hero = () => (
  <section>
    <div>
      <h1>{content.home.title}</h1>
      <p>{content.home.description}</p>
    </div>
  </section>
);

export default Hero;
