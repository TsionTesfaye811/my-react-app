import React, { useState, useEffect } from 'react';

function DigitalClockApp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="text-center bg-gray-800 p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">🕒 Digital Clock</h1>
        <div className="text-6xl font-mono">
          {formatTime(time.getHours())}:
          {formatTime(time.getMinutes())}:
          {formatTime(time.getSeconds())}
        </div>
        <div className="text-xl mt-2">
          {time.toDateString()}
        </div>
      </div>
    </div>
  );
}

export default DigitalClockApp;
