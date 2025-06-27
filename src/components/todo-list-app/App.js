import React, { useState } from 'react';

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.length === 0 && (
          <li className="text-gray-500 text-center">No tasks yet.</li>
        )}
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded"
          >
            <span>{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:text-red-700 font-bold"
              aria-label={`Remove task ${task}`}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListApp;
