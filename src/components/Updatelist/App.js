import React, { useState } from 'react';

function Updatelist() {
  const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta"]);

  function handleAddFood() {
    const input = document.getElementById("foodInput");
    const newFood = input.value.trim();
    if (newFood) {
      setFoods(f => [...f, newFood]);
    }
    input.value = "";
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">🍔 Food List</h2>
      <ul className="mb-4 space-y-2">
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={() => handleRemoveFood(index)}
            className="cursor-pointer bg-blue-100 hover:bg-red-100 text-blue-800 px-4 py-2 rounded"
          >
            {food}
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          id="foodInput"
          placeholder="Enter food name"
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={handleAddFood}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Updatelist;
