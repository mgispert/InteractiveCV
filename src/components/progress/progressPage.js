import React from "react";
import progressData from "./progressData.json";
import { progress } from "../utils/CONTENT.json";

const Progress = () => (
  <section>
    <div>
      <h2>{progress.title}</h2>
      <p>{progress.description}</p>

      <table>
        <thead>
          <tr>
            {progressData.columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {progressData.applications.map((application, index) => (
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
