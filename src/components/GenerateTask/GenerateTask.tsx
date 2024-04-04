import React from "react";
import "./GenerateTask.css";

interface GenerateTaskProps {
  name: string;
  owner: string;
  date: string;
  car: string;
  description: string;
}

export const GenerateTask: React.FC<GenerateTaskProps> = ({
  name,
  owner,
  date,
  car,
  description,
}) => {
  return (
    <section className="taskSection">
      <div className="taskName">
        <h1>{name}</h1>
        <h2>{owner}</h2>
      </div>
      <div className="taskInfo">
        <h3>{car}</h3>
        <p>{description}</p>
      </div>
      <div className="taskPanel">Date: {date}</div>
    </section>
  );
};
