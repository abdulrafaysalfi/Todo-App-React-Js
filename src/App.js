import { useState } from "react";
import "./App.css";
import ClearIcon from "@material-ui/icons/Clear";
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  return (
    <div className="app">
      <h1 className="title">React Todo App</h1>
      <div className="taskbox">
        <input
          placeholder="Enter Task"
          type="text"
          name="task"
          id="task"
          pattern="[A-Za-z]{3}"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          className="addBtn"
          type="submit"
          onClick={(e) => {
            if (task !== "") {
              setTasks([...tasks, task]);
              setTask("");
            } else {
              alert("Task Field Can't be Empty..");
            }
          }}
        >
          Add
        </button>
      </div>

      {tasks.map((task, index) => (
        <div key={index} className="addedTasks">
          <p>{task}</p>

          <ClearIcon
            className="icon"
            onClick={(e) => {
              setTimeout(() => {
                setTasks(tasks.filter((data, indx) => indx !== index));
                e.preventDefault();
              }, 1000);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
