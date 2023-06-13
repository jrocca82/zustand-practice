import "./App.css";
import Column from "./components/Column";

const App = () => (
  <div className="App">
    <Column state="PLANNED" />
    <Column state="ONGOING" />
    <Column state="DONE" />
  </div>
);

export default App;
