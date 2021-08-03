import React, { useContext } from "react";

import { CounterContext } from "../App";

function HoverCounter() {
  const context = useContext(CounterContext);
  return (
    <div>
      <h3>Counter is: {context.counter}</h3>
    </div>
  );
}

export default HoverCounter;
