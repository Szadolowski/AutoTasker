import React from "react";
import "./GenerateTask.css";

interface GenerateTaskProps {
  id: number;
  onChangeDate: (index: number, newDate: string) => void;
  onChangeTaskPlace: (index: number, change: number) => void;
  name: string;
  owner: string;
  date: string;
  car: string;
  description: string;
  valueIndex: number;
}

export const GenerateTask: React.FC<GenerateTaskProps> = ({
  id,
  onChangeDate,
  name,
  owner,
  date,
  car,
  description,
  valueIndex,
  onChangeTaskPlace,
}) => {
  return (
    <section className="taskSection">
      {id}
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
            onChangeDate(valueIndex, e.target.value);
          }}
        />
        <nav className="orderEdit">
          {valueIndex != 0 ? (
            <button
              onClick={() => {
                onChangeTaskPlace(valueIndex, 1);
              }}
            >
              {"<--"}
            </button>
          ) : null}
          <button
            onClick={() => {
              onChangeTaskPlace(valueIndex, 0);
            }}
          >
            {"-->"}
          </button>
        </nav>
      </div>
    </section>
  );
};
