import { newContext } from "../context/context.jsx";
import { useContext } from "react";
import { Newtask } from "./task.jsx";

function TaskList() {
  const { tasks } = useContext(newContext);

  if (tasks.length === 0) {
    return <h2 className="text-white text-4xl font-bold text-center">No hay tareas aún</h2>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 ">
      {tasks.map((task, index) => (
        <Newtask key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
