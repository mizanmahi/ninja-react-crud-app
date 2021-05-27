import { useReducer } from "react";
import Theme from "./theme";

const initialState = 0;
const reducer = (state, action) => {
   switch (action.type) {
      case "increase":
         return state + 1;
      case "decrease":
         return state - 1;
         case "reset":
             return 0
      default:
         return state;
   }
};

const Counter = () => {
 

   const [count, dispatch] = useReducer(reducer, initialState);

   return (
      <div>
         <Theme/>
          <h2>Counter is {count}</h2>
         <button onClick={() => dispatch({type: "increase"})}>Increament</button>
         <button onClick={() => dispatch({type: "decrease"})}>Decreament</button>
         <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      </div>
   );
};

export default Counter;
