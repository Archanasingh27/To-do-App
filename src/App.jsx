import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task,
      ),
    );
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="container">
      <Header
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        progress={progress}
      />

      <div className="input-box">
        <input
          type="text"
          placeholder="What's kindling?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>+</button>
      </div>

      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
