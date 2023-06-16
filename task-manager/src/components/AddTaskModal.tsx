import { Dispatch, SetStateAction, useState } from "react";
import "./styles/Modal.css";
import { useTaskStore } from "../store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormData, newTaskSchema } from "../schema/NewTaskSchema";

type ModalProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const AddTaskModal = ({ setOpenModal }: ModalProps) => {
  const [text, setText] = useState<string>();

  const addTask = useTaskStore((store) => store.addTask);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newTaskSchema),
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit((data: FormData) => {
    addTask(data.task);
    setOpenModal(false);
  });

  return (
    <div className="modal">
      <div className="exitButtonWrapper">
        <button className="modalExitButton" onClick={() => setOpenModal(false)}>
          X
        </button>
      </div>
      <div className="modalContent">
        <form onSubmit={onSubmit}>
          <h2>Plan a new task:</h2>
          <p>Task name:</p>
          <input
            {...register("task")}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button onClick={onSubmit}>Plan Task</button>
          {/* Only task error is available, so able to hardcode here */}
          {errors && <p>{errors.task?.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
