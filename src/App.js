import React, { createContext } from "react";
import HoverCounter from "./comps/HoverCounter";

import "./App.css";

export const CounterContext = createContext();


function App() {
  return (
    <CounterContext.Provider value={{counter: 900}}>
      <div className="App">
        <h2>Hello World</h2>
        <HoverCounter />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
