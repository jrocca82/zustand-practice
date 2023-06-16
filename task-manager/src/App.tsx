import { useState } from "react";
import "./App.css";
import Column from "./components/Column";
import { Statuses } from "./constants/statuses";
import AddTaskModal from "./components/AddTaskModal";

const App = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="AppHeader">
        <h1>Jo's To-Do List</h1>
        <p>
          A simple to-do list coded in React, using Zustand state management,
          React Hook Forms, and Zod validation.
        </p>
      </div>
      {openAddTaskModal && <AddTaskModal setOpenModal={setOpenAddTaskModal} />}

      <Column
        state={Statuses.PLANNED}
        openAddTaskModal={() => setOpenAddTaskModal(true)}
      />
      <Column
        state={Statuses.ONGOING}
      />
      <Column
        state={Statuses.DONE}
      />
    </div>
  );
};

export default App;
