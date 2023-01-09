import { useContext } from "react";
import { newContext } from "../context/context";

export function Newtask({ task }) {
  const { deleteTask } = useContext(newContext);
  return (
    <div className="bg-green-500 text-slate-100 p-4 text-center rounded-md">
      <h3 className="text-xl font-bold capitalize">{task.title}</h3>
      <p className="text-gray-600 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Borrar Tarea
      </button>
    </div>
  );
}
