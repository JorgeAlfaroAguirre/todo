import TodoForm from "./TodoForm";
import AddPerson from "./AddPerson";
import TodoList from "./TodoTable";

const Layout = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <AddPerson />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TodoForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Layout;
