import "./App.css";
import Column from "./components/Column";
import { Statuses } from "./constants/statuses";

const App = () => (
  <div className="App">
    <Column state={Statuses.PLANNED} />
    <Column state={Statuses.ONGOING} />
    <Column state={Statuses.DONE} />
  </div>
);

export default App;
