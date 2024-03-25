import React from "react";
import { experience } from "../utils/CONTENT.json";

const Experience = () => (
  <section>
    <div>
      <h2>{experience.title}</h2>
      <p>{experience.description}</p>
      <ul>
        {experience.jobs.map((job, index) => (
          <li key={index}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
