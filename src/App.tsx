import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { GenerateTask } from "./components/GenerateTask/GenerateTask";
import data from "./data.json";

function App() {
  interface GenerateData {
    id: number;
    name: string;
    owner: string;
    date: string;
    car: string;
    description: string;
  }
  // interface GenerateTaskProps {
  //   id: number;
  //   name: string;
  //   owner: string;
  //   date: string;
  //   car: string;
  //   description: string;
  //   valueIndex: number;
  // }
  const [task, setTask] = useState<GenerateData[]>([]);
  useEffect(() => {
    setTask(data);
  }, []);

  const addTask = (data: GenerateData) => {
    if (task !== null) {
      const newTask = [...task, data];
      setTask(newTask);
    }
  };

  const updateTaskDate = (index: number, newDate: string) => {
    setTask((prevTask) => {
      const updatedTask = [...prevTask];
      updatedTask[index] = { ...updatedTask[index], date: newDate };
      return updatedTask;
    });
  };

  const TaskElement =
    task &&
    task.map((Task, index) => {
      return (
        <GenerateTask
          key={index}
          onChangeDate={updateTaskDate}
          id={Task.id}
          valueIndex={index}
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
