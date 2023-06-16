import { SetStateAction, useState } from "react";
import "./App.css";
import Column from "./components/Column";
import { Statuses } from "./constants/statuses";
import AddTaskModal from "./components/AddTaskModal";
import UpdateTaskModal from "./components/UpdateTaskModal";

const App = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);
  const [openRemoveTaskModal, setOpenRemoveTaskModal] =
    useState<boolean>(false);

  return (
    <div className="App">
      <div className="AppHeader">
        <h1>Jo's To-Do List</h1>
        <p>
          A simple to-do list coded in React, using Zustand state management and
          Zod validation.
        </p>
      </div>
      {openAddTaskModal && <AddTaskModal setOpenModal={setOpenAddTaskModal} />}
      {openRemoveTaskModal && (
        <UpdateTaskModal setOpenModal={setOpenRemoveTaskModal} />
      )}
      <Column
        state={Statuses.PLANNED}
        openAddTaskModal={() => setOpenAddTaskModal(true)}
        openRemoveTaskModal={() => setOpenRemoveTaskModal(true)}
      />
      <Column
        state={Statuses.ONGOING}
        openRemoveTaskModal={() => setOpenRemoveTaskModal(true)}
      />
      <Column
        state={Statuses.DONE}
        openRemoveTaskModal={() => setOpenRemoveTaskModal(true)}
      />
    </div>
  );
};

export default App;
