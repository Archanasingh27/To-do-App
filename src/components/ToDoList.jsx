// import ToDoItem from "./ToDoItem";

// function ToDoList({ tasks, deleteTask, toggleComplete, editTask }) {
//   return (
//     <div>
//       {tasks.map((task) => (
//         <ToDoItem
//           key={task.id}
//           task={task}
//           deleteTask={deleteTask}
//           toggleComplete={toggleComplete}
//           editTask={editTask}
//         />
//       ))}
//     </div>
//   );
// }

// export default ToDoList;


import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, deleteTask, toggleComplete, editTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-card">
        <h2>A quiet page, waiting.</h2>
        <p>Add your first task above.</p>
      </div>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </>
  );
}

export default ToDoList;
