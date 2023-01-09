import { useState, useContext } from "react";
import { newContext } from "../context/context";

export function Form() {
  const [title, setTitle] = useState("");

  let { createTask } = useContext(newContext);

  const enviar = (e) => {
    e.preventDefault();

    createTask(title);
    setTitle("");
  };

  return (
    <did className='max-w-md mx-auto'>
      <form onSubmit={enviar} className="bg-green-500 p-10 mb-4">
        <input
        className="bg-slate-300 p-3 w-full"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <button className="bg-gray-50 text-slate-800 px-3 py-1 my-2 rounded-md">Enviar</button>
      </form>
    </did>
  );
}
