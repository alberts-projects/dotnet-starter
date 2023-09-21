import { useState } from 'react';

function FunctionalComponent() {
  // Declare a state variable 'count' and a function to update it
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Functional React Component</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default FunctionalComponent;