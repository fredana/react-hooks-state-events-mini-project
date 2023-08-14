import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList"; // Assuming you already have this component
import { CATEGORIES, TASKS } from "../data"; // Make sure to provide the correct path

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = index => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = task => {
    setTasks([...tasks, task]);
  };

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="app">
      <CategoryFilter
        categories={[...CATEGORIES]}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm categories={[...CATEGORIES.slice(1)]} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
