import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  return (
    <div className="app">
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
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="addedTasks">
            <input
              type="checkbox"
              value={false}
              onClick={(e) => {
                setTimeout(() => {
                  setTasks(tasks.filter((data, indx) => indx !== index));
                  e.preventDefault();
                }, 1000);
              }}
            />
            <p>{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
