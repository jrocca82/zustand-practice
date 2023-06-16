import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import { Statuses } from "../constants/statuses";
import { useTaskStore } from "../store";
import "./styles/Column.css";
import Task from "./Task";
import Modal from "./AddTaskModal";

const Column = ({
  state,
  openAddTaskModal,
  openRemoveTaskModal,
}: {
  state: Statuses;
  openAddTaskModal?: MouseEventHandler<HTMLButtonElement>;
  openRemoveTaskModal: MouseEventHandler<HTMLDivElement>;
}) => {
  const tasks = useTaskStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  return (
    <div className="column">
      <div className="header-wrapper">
        <h3>{state}</h3>
        {state === Statuses.PLANNED ? (
          <button onClick={openAddTaskModal}>+ Add New</button>
        ) : (
          <div className="hidden" />
        )}
      </div>
      {tasks.map((task, i) => (
        <Task openRemoveTaskModal={openRemoveTaskModal} key={i} task={task} />
      ))}
    </div>
  );
};

export default Column;
