import React, { useContext } from "react";

import { CounterContext } from '../context/CounterContext';

function Counter() {
  const context = useContext(CounterContext);
  return (
    <div>
      <h3>Counter is: {context.counter}</h3>
    </div>
  );
}

export default Counter;
