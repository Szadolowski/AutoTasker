import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { GenerateTask } from "./components/GenerateTask/GenerateTask";

const taskObject = [
  {
    name: "RandomObject1",
    owner: "Owner1",
    date: "2023-02-15",
    car: "Toyota",
    description: "Random description for object 1",
  },
  {
    name: "RandomObject2",
    owner: "Owner2",
    date: "2023-02-15",
    car: "Ford",
    description: "Random description for object 2",
  },
  {
    name: "RandomObject3",
    owner: "Owner3",
    date: "2023-02-15",
    car: "Honda",
    description: "Random description for object 3",
  },
  {
    name: "RandomObject4",
    owner: "Owner4",
    date: "2023-02-15",
    car: "Chevrolet",
    description: "Random description for object 4",
  },
  {
    name: "RandomObject5",
    owner: "Owner5",
    date: "2023-02-15",
    car: "BMW",
    description: "Random description for object 5",
  },
];

function App() {
  const [task, setTask] = useState(taskObject);
  interface GenerateTaskProps {
    name: string;
    owner: string;
    date: string;
    car: string;
    description: string;
  }

  const addTask = (data: GenerateTaskProps) => {
    const newTask = [...task, data];
    setTask(newTask);
  };

  const TaskElement = task.map((Task) => {
    let key = 0;
    return (
      <GenerateTask
        key={key++}
        name={Task.name}
        owner={Task.owner}
        date={Task.date}
        car={Task.car}
        description={Task.description}
      />
    );
  });

  return (
    <>
      <Form onAddTask={addTask} />

      <section className="TaskList">{TaskElement}</section>
    </>
  );
}

export default App;
