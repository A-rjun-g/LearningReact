import { useState } from "react";

export default function Counter() {
  /*State Varaible */
  const [counter, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  const [decrementBy, setdecrementBy] = useState(1);
  function increment() {
    setCount(counter + incrementBy);
  }
  function decrement() {
    setCount(counter - incrementBy);
  }
  function reset() {
    setCount(counter - counter);
  }

  function IncrementByVariableCount() {
    setIncrementBy(incrementBy + 1);
  }
  function ResetIncrementBy() {
    setIncrementBy(incrementBy - incrementBy + 1);
  }

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <h1>Increase by {incrementBy}</h1>
      <button onClick={IncrementByVariableCount}>Increase Rapid</button>
      <button onClick={ResetIncrementBy}> Reset </button>
    </div>
  );
}
