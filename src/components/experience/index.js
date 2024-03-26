import React from "react";
import content from "@/content/index.json";

const Experience = () => (
  <section>
    <div>
      <h2>{content.experience.title}</h2>
      <p>{content.experience.description}</p>
      <ul>
        {content.experience.jobs.map((job, index) => (
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
