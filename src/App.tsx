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

  const changeTaskPlace = (index: number, change: number) => {
    setTask((prevTask) => {
      const updatedTask = [...prevTask];
      console.log(index, change);
      if (change) {
        updatedTask[index] = {
          ...updatedTask[index],
          id: updatedTask[index].id - 1,
        };
        updatedTask[index - 1] = {
          ...updatedTask[index - 1],
          id: updatedTask[index - 1].id + 1,
        };
      } else {
        updatedTask[index] = {
          ...updatedTask[index],
          id: updatedTask[index].id + 1,
        };
        updatedTask[index + 1] = {
          ...updatedTask[index + 1],
          id: updatedTask[index + 1].id - 1,
        };
      }
      console.log(updatedTask, "test");
      return updatedTask;
    });
  };

  const updateTaskDate = (index: number, newDate: string) => {
    setTask((prevTask) => {
      const updatedTask = [...prevTask];
      updatedTask[index] = { ...updatedTask[index], date: newDate };
      return updatedTask;
    });
  };

  task.sort(function (a, b) {
    return a.id - b.id;
  });

  const TaskElement =
    task &&
    task.map((Task, index) => {
      return (
        <GenerateTask
          key={index}
          onChangeDate={updateTaskDate}
          onChangeTaskPlace={changeTaskPlace}
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

  console.log(task);
  return (
    <>
      <Form onAddTask={addTask} />

      <section className="TaskList">{TaskElement}</section>
    </>
  );
}

export default App;
