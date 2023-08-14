// import React from "react";

// function NewTaskForm() {
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;



import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [task, setTask] = useState({ text: "", category: categories[0] });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onTaskFormSubmit(task);
    setTask({ text: "", category: categories[0] });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={task.text} onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={handleInputChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
