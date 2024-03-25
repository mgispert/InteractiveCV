import React from "react";
import { home } from "../utils/CONTENT.json";

const HomePage = () => (
  <section>
    <div>
      <h1>{home.title}</h1>
      <p>{home.description}</p>
    </div>
  </section>
);

export default HomePage;
