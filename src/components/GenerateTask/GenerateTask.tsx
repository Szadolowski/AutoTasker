import React from "react";
import "./GenerateTask.css";

interface GenerateTaskProps {
  index: number;
  onChangeDate: (index: number, newDate: string) => void;
  name: string;
  owner: string;
  date: string;
  car: string;
  description: string;
}

export const GenerateTask: React.FC<GenerateTaskProps> = ({
  index,
  onChangeDate,
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
      <div className="taskPanel">
        Date:{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => {
            onChangeDate(index, e.target.value);
          }}
        />
      </div>
    </section>
  );
};
