'use client';
import { useState } from 'react';

export default function CounterFeature() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setShowMessage(newCount >= 5);
  };

  const reset = () => {
    setCount(0);
    setShowMessage(false);
  };

  return (
    <div className="feature-container">
      <h2>Counter Feature</h2>
      <p>Current count: {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
      {showMessage && (
        <p className="success-message">
          You've clicked the button {count} times!
        </p>
      )}
    </div>
  );
}