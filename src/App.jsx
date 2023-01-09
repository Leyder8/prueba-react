import { Form } from "./componentes/taskForm";
import TaskList from "./componentes/tasksList";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <Form />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
