import "./Column.css";

const Column = ({state}: {state: "PLANNED" | "ONGOING" | "DONE"}) => (
  <div className="column">{state}</div>
);

export default Column;