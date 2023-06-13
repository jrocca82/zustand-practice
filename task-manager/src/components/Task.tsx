import classNames from "classnames";
import { Statuses } from "../constants/statuses";
import "./Task.css";

const Task = ({ title, status }: { title: string; status: Statuses }) => (
  <div className="task-wrapper">
    <div className="task">
      <div className="checkbox" />
      <p>{title}</p>
    </div>
    <div className="bottom-wrapper">
      <div className={classNames("status", status)}>{status}</div>
    </div>
  </div>
);

export default Task;
