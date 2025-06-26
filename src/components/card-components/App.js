import React from "react";

export default function CardComponents() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6">
          Card Component
        </h1>
        <p className="text-gray-700 text-lg">
          This is a simple card styled with Tailwind CSS. Customize me!
        </p>
      </div>
    </div>
  );
}
