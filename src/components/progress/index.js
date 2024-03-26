import React from "react";
import progress from "@/content/progress.json";
import content from "@/content/index.json";

const Progress = () => (
  <section>
    <div>
      <h2>{content.progress.title}</h2>
      <p>{content.progress.description}</p>
      <table>
        <thead>
          <tr>
            {progress.columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {progress.applications.map((application, index) => (
            <tr key={index}>
              <td>{application.company}</td>
              <td>{application.dateApplied}</td>
              <td>{application.status}</td>
              <td>{application.position}</td>
              <td>{application.stackNeeded}</td>
              <td>{application.salary}</td>
              <td>{application.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default Progress;
