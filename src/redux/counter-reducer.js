import { COUNTER_TYPE } from "./counter-type";

const initialState = {
   count: 100,
};

export const countReducer = (state = initialState, { type }) => {
   switch (type) {
      case COUNTER_TYPE.INCREAMENT_COUNT:
         return {
            count: state.count + 2,
         };
      case COUNTER_TYPE.DECREAMENT_COUNT:
         return {
            count: state.count - 1,
         };
      default:
         return state;
   }
};
