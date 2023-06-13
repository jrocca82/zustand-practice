import classNames from "classnames";
import { Statuses } from "../constants/statuses";
import { useTaskStore } from "../store";
import "./Task.css";

const Task = ({ title, status }: { title: string; status: Statuses }) => {
  const task = useTaskStore((store) =>
    store.tasks.find((task) => task.state === status)
  );

  return (
    <div className="task-wrapper">
      <div className="task">
        <div className={status === Statuses.ONGOING ? "checkbox" : "hidden"} />
        <p>{task?.title}</p>
      </div>
      <div className="bottom-wrapper">
        <div className={classNames("status", status)}>{task?.state}</div>
      </div>
    </div>
  );
};

export default Task;
