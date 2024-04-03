import React from "react";

interface GenerateTaskProps {
  name: string;
  owner: string;
  date: string;
  car: string;
  description: string;
}

export const GenerateTask: React.FC<GenerateTaskProps> = ({ name }) => {
  return <h1>{name}</h1>;
};
