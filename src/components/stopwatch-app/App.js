import React, { useState, useRef } from 'react';

function StopwatchApp() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="text-center mt-20 text-white">
      <h1 className="text-4xl font-bold mb-4">⏱ Stopwatch</h1>
      <div className="text-6xl font-mono mb-6">{formatTime(time)}</div>
      <div className="space-x-4">
        <button onClick={start} className="bg-green-600 px-4 py-2 rounded">Start</button>
        <button onClick={stop} className="bg-red-600 px-4 py-2 rounded">Stop</button>
        <button onClick={reset} className="bg-yellow-500 px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}

export default StopwatchApp;
