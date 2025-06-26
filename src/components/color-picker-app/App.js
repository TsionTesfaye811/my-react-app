// src/components/color-picker-app/App.js
import React, { useState } from 'react';

const ColorPickerApp = () => {
  const [color, setColor] = useState('#3490dc'); // Default Tailwind blue-500

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Color Picker App</h1>

      <input
        type="color"
        value={color}
        onChange={handleChange}
        className="w-32 h-16 rounded-md border-2 border-gray-300 cursor-pointer"
      />

      <div
        className="mt-8 w-48 h-48 rounded-lg shadow-lg"
        style={{ backgroundColor: color }}
      />

      <p className="mt-4 text-xl font-semibold text-gray-700">Selected Color: {color}</p>
    </div>
  );
};

export default ColorPickerApp;
