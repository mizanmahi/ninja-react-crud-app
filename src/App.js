import "./App.css";
import Counter from "./components/counter";
import React, { createContext, useReducer } from "react";
import Fetch from "./components/fetch";

export const themeContext = createContext();
const initialState = {
   user: null,
   ispending: true,
   error: null
};

const reducer = (state, action) => {
   switch (action.type) {
      case "fetch_success":
         return {
            user: action.payload,
            ispending: false,
         };
      case "fetch_error":
         return {
            user: null,
            ispending: false,
            error: action.payload
         };
      default:
         return state;
   }
};

function App() {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <themeContext.Provider value={{state, dispatch}}>
         <div className="App">
            {/* <Counter /> */}
            <Fetch/>
         </div>
         ;
      </themeContext.Provider>
   );
}

export default App;
