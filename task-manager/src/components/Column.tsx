import { Statuses } from "../constants/statuses";
import { useTaskStore } from "../store";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }: { state: Statuses }) => {
  const tasks = useTaskStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  return (
    <div className="column">
      <div className="header-wrapper">
        <h3>{state}</h3>
        {state === Statuses.PLANNED ? (
          <button>+ Add</button>
        ) : (
          <div className="hidden" />
        )}
      </div>
      {tasks.map((task) => (
        <Task key={task.title} status={task.state} title={task.title} />
      ))}
    </div>
  );
};

export default Column;
