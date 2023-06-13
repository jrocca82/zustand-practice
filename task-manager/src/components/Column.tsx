import { STATUSES, Statuses } from "../constants/statuses";
import { useTaskStore } from "../store";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }: { state: Statuses }) => {
  const tasks = useTaskStore((store) => store.tasks);

  return (
    <div className="column">
      <h3>{state}</h3>
      {tasks.map((task) => (
        <>
          {state === task.state ? (
            <Task status={task.state} title={task.title} />
          ) : (
            <div className="hidden" />
          )}
        </>
      ))}
    </div>
  );
};

export default Column;
