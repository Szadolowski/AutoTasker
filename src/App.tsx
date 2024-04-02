import "./App.css";
import { Form } from "./components/Form";

let randomObjects = [
  {
    name: "RandomObject1",
    owner: "Owner1",
    date: new Date("2023-02-15T13:45:30"),
    car: "Toyota",
    description: "Random description for object 1",
  },
  {
    name: "RandomObject2",
    owner: "Owner2",
    date: new Date("2022-10-10T09:30:00"),
    car: "Ford",
    description: "Random description for object 2",
  },
  {
    name: "RandomObject3",
    owner: "Owner3",
    date: new Date("2024-04-01T16:20:00"),
    car: "Honda",
    description: "Random description for object 3",
  },
  {
    name: "RandomObject4",
    owner: "Owner4",
    date: new Date("2021-07-20T11:10:45"),
    car: "Chevrolet",
    description: "Random description for object 4",
  },
  {
    name: "RandomObject5",
    owner: "Owner5",
    date: new Date("2020-11-30T14:55:00"),
    car: "BMW",
    description: "Random description for object 5",
  },
];

function App() {
  return (
    <>
      <section className="AddTopBar">
        <Form />
      </section>
      <section className="TaskList">
        <Task />
      </section>
    </>
  );
}

export default App;
