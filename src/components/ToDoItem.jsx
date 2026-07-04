import { useState } from "react";
import { MdEdit, MdDelete, MdSave } from "react-icons/md";

function ToDoItem({ task,
    deleteTask,
    toggleComplete,
    editTask 
})

{
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const save = () => {
    editTask(task.id, text);
    setEditing(false);
  };

  return (
    <div className="todo-card">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />

      {editing ? (
        <input
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
      )}

      {editing ? (
        <button className="icon-btn save-btn" onClick={save}>
          <MdSave />
        </button>
      ) : (
        <button className="icon-btn edit-btn" onClick={() => setEditing(true)}>
          <MdEdit />
        </button>
      )}

      <button
        className="icon-btn delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default ToDoItem;
