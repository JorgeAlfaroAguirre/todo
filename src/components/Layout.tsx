import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";
import { useState } from "react";
import { Task } from "../schemas/Task";
import AsigneeForm from "./AsigneeForm";
import { Asignee } from "../schemas/Asignee";

const Layout = () => {
  const [asigneeOptions, setAsigneeOptions] = useState<Asignee[]>([]);

  const addAsigneeOptions = (asignee: Asignee) => {
    setAsigneeOptions([
      { ...asignee, id: Math.random().toString() },
      ...asigneeOptions,
    ]);
  };
  console.log(asigneeOptions);

  const [tasks, setTask] = useState<Task[]>([]);
  const addTask = (task: Task) => {
    setTask([{ ...task, id: Math.random().toString() }, ...tasks]);
  };
  console.log(tasks);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <AsigneeForm onSubmit={addAsigneeOptions} />
        </div>
      </div>
      <ul>
        {asigneeOptions.map((options) => (
          <li key={options.id}>{options.name}</li>
        ))}
      </ul>
      <div className="row">
        <div className="col">
          <TodoForm onSubmit={addTask} asigneeOptions={asigneeOptions} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TodoTable tasks={tasks} />
        </div>
      </div>
    </div>
  );
};
export default Layout;
