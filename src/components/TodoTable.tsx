import { Task } from "../schemas/Task";

type Props = {
  tasks: Task[];
};

const TodoTable = ({ tasks }: Props) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Detalle</th>
          <th>Asignada a</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => {
          let asigneeJSON;
          asigneeJSON = JSON.parse(task.asignee);
          return (
            <tr style={{ cursor: "pointer" }} key={task.id}>
              <td>{task.taskName}</td>
              <td>{task.taskDetail}</td>
              <td>{asigneeJSON.name}</td> <td>{task.date.toDateString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
