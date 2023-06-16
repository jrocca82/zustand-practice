import { DragEventHandler, MouseEventHandler } from "react";
import { Statuses } from "../constants/statuses";
import { useTaskStore } from "../store";
import "./styles/Column.css";
import Task from "./Task";

const Column = ({
  state,
  openAddTaskModal,
}: {
  state: Statuses;
  openAddTaskModal?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const tasks = useTaskStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  const setDraggedTask = useTaskStore((store) => store.setDraggedTask);
  const draggedTask = useTaskStore((store) => store.draggedTask);
  const moveTask = useTaskStore((store) => store.moveTask);

  const onDragOver: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  const onDrop: DragEventHandler<HTMLDivElement> = (e) => {
    if (!draggedTask) {
      return;
    }
    moveTask(draggedTask, state);
    setDraggedTask(undefined);
  };

  return (
    <div className="column" onDragOver={onDragOver} onDrop={onDrop}>
      <div className="header-wrapper">
        <h3>{state}</h3>
        {state === Statuses.PLANNED ? (
          <button onClick={openAddTaskModal}>+ Add New</button>
        ) : (
          <div className="hidden" />
        )}
      </div>
      {tasks.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </div>
  );
};

export default Column;
