import React, {useState} from "react";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (event) => {
    if(newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }

};

const deleteTask = (index) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  setTasks(newTasks);
};

const editTask = (index) => {
  const newTasks = [...tasks];
  newTasks[index] = prompt("Edit task", newTasks[index]);
  setTasks(newTasks);
};

return (
  <div class ="main">
    <h1>To do App</h1>
    <input type="text" placeholder="Task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
    <button onClick={addTask}>Add Task</button>
    {tasks.map((task, index) => (
      <div key={index}>
      {task}
      <button onClick={() => deleteTask(index)}>Delete</button>
      <button onClick={() => editTask(index)}>Edit</button>
    </div>
      
    ))}
  </div>
);
}


export default App;