import React, { useState, useEffect, useRef } from 'react';

function StopwatchApp() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Manage the interval based on running state
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Format seconds into HH:MM:SS string
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="text-center mt-20 text-black">
      <h1 className="text-5xl font-mono mb-6">{formatTime(time)}</h1>
      <div className="space-x-4">
        <button onClick={start} className="bg-green-500 px-6 py-2 rounded text-white">Start</button>
        <button onClick={stop} className="bg-red-500 px-6 py-2 rounded text-white">Stop</button>
        <button onClick={reset} className="bg-gray-500 px-6 py-2 rounded text-white">Reset</button>
      </div>
    </div>
  );
}

export default StopwatchApp;
