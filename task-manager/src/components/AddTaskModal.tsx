import { Dispatch, SetStateAction, useState } from "react";
import "./styles/Modal.css";
import { useTaskStore } from "../store";

type ModalProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const AddTaskModal = ({ setOpenModal }: ModalProps) => {
  const [text, setText] = useState<string>();
  const [error, setError] = useState<string>();

  const addTask = useTaskStore((store) => store.addTask);

  return (
    <div className="modal">
      <div className="exitButtonWrapper">
        <button className="modalExitButton" onClick={() => setOpenModal(false)}>
          X
        </button>
      </div>
      <div className="modalContent">
        <h2>Plan a new task:</h2>
        <p>Task name:</p>
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <button
          onClick={() => {
            // TODO: Add zod validation
            if (!text) {
              setError("*Please enter a task to plan!");
              return;
            }
            addTask(text);
            setOpenModal(false);

            // Clear states
            setError(undefined);
            setText(undefined);
          }}
        >
          Plan Task
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default AddTaskModal;
