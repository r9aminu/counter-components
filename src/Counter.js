import React, { useState } from 'react';

function Counter() {
  // State to keep track of the result.
  const [result, setResult] = useState(0);

  // Increase result by 1.
  const increment = () => setResult(result + 1);

  // Increase result by 1 after 2 seconds.
  const incrementAfterDelay = () => setTimeout(() => setResult(result + 1), 2000);

  // Try to increase result by 2 immediately.
  const incrementTwice = () => {
    setResult(result + 1);
    setResult(result + 1);
  };

  // Correctly increase result by 2.
  const correctIncrementTwice = () => {
    setResult(prevResult => prevResult + 1);
    setResult(prevResult => prevResult + 1);
  };

  // Show result and buttons.
  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
}

export default Counter;
