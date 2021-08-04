import React from "react";
import Counter from "./comps/Counter";
import CounterClass from "./comps/CounterClass";

// context
import { CounterContext } from "./context/CounterContext";

import "./App.css";


function App() {
  return (
    <CounterContext.Provider value={{ counter: 5000 }}>
      <div className="App">
        <h2>Hello World</h2>
        <Counter />
        <CounterClass />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
