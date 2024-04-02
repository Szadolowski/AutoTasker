import { useState } from "react";

export const Form = () => {
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
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Task name"
        defaultValue={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        name="Owner"
        placeholder="Owner"
        defaultValue={owner}
        onChange={(e) => {
          setOwner(e.target.value);
        }}
      />
      <input
        type="date"
        name="date"
        defaultValue={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      <select
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

      <input
        type="text"
        name="description"
        placeholder="description"
        defaultValue={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <button disabled={name.length === 0 || owner.length === 0}>Send</button>
    </form>
  );
};
