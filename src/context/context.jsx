import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "../tasks";

export const newContext = createContext();

export function CreateTaskContext(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(newTitle) {
    setTasks([
      ...tasks,
      {
        title: newTitle,
        id: tasks.length,
        description: "Nueva tarea",
      },
    ]);
  }

  function deleteTask(Id) {
    setTasks(tasks.filter((task) => task.id !== Id));
  }
  return (
    <newContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </newContext.Provider>
  );
}
