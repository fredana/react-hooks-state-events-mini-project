// import React from "react";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;


import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
