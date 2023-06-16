import classNames from "classnames";
import { Statuses } from "../constants/statuses";
import "./styles/Task.css";
import { TaskState } from "../store";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

const Task = ({
  task,
  openRemoveTaskModal,
}: {
  task: TaskState;
  openRemoveTaskModal: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="task-wrapper">
      <div className="task">
        <div
          className={task.state === Statuses.ONGOING ? "checkbox" : "hidden"}
        />
        <p>{task?.title}</p>
      </div>
      <div className="bottom-wrapper">
        <div
          className={classNames("status", task.state)}
          onClick={openRemoveTaskModal}
        >
          {task?.state}
        </div>
      </div>
    </div>
  );
};

export default Task;
