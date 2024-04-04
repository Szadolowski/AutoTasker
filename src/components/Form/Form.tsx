import { useState } from "react";
import "./Form.css";

interface GenerateTaskProps {
  onAddTask: (data: {
    name: string;
    owner: string;
    date: string;
    car: string;
    description: string;
  }) => void;
}

export const Form: React.FC<GenerateTaskProps> = ({ onAddTask }) => {
  const [name, setName]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");
  const [owner, setOwner] = useState("");
  const [date, setDate] = useState("");
  const [car, setCar] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      className="AddTopBar"
      onSubmit={(e) => {
        e.preventDefault();
        onAddTask({ name, owner, date, car, description });
      }}
    >
      <label htmlFor="name">
        Name:{" "}
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Task name"
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="owner">
        Owner:{" "}
        <input
          id="owner"
          type="text"
          name="Owner"
          placeholder="Owner"
          defaultValue={owner}
          onChange={(e) => {
            setOwner(e.target.value);
          }}
        />
      </label>
      <label htmlFor="date">
        Date:{" "}
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <label htmlFor="car">
        Car:{" "}
        <select
          id="car"
          name="car"
          defaultValue={car}
          onChange={(e) => {
            setCar(e.target.value);
          }}
        >
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="WolksVagen">WolksVagen</option>
        </select>
      </label>
      <label htmlFor="description" className="description">
        description{" "}
        <textarea
          name="description"
          placeholder="description"
          defaultValue={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>
      <button disabled={name.length === 0 || owner.length === 0}>Send</button>
    </form>
  );
};
