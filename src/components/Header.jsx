import React from 'react'

function Header({
  totalTasks,
  completedTasks,
  progress,
}) {
  return (
    <header className="header">
        <h1>ToDO App</h1>
        <p>One Thing At A Time.</p>

      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <span className="task-count">
          {completedTasks} / {totalTasks}
        </span>
      </div>
    </header>
  );
}


export default Header;