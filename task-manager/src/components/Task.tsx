import classNames from "classnames";
import { Statuses } from "../constants/statuses";
import "./styles/Task.css";
import { TaskState, useTaskStore } from "../store";

const Task = ({ task }: { task: TaskState }) => {
  const removeTask = useTaskStore((store) => store.removeTask);

  const setDraggedTask = useTaskStore((store) => store.setDraggedTask);

  return (
    <div
      className="task-wrapper"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div className="task">
        <p>{task?.title}</p>
      </div>
      <div className="bottom-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png"
          alt="trash"
          onClick={() => removeTask(task.title)}
        />
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
