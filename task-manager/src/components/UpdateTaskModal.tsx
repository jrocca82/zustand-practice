import { Dispatch, SetStateAction } from "react";
import "./styles/Modal.css";

type ModalProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const UpdateTaskModal = ({ setOpenModal }: ModalProps) => (
  <div className="modal">
    <div className="exitButtonWrapper">
      <button className="modalExitButton" onClick={() => setOpenModal(false)}>
        X
      </button>
    </div>
    <div className="modalContent">
      <h2>Would you like to remove this task?</h2>
      <button onClick={() => setOpenModal(false)}>Yes</button>
      <button onClick={() => setOpenModal(false)}>No</button>
    </div>
  </div>
);

export default UpdateTaskModal;
