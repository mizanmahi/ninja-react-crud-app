import { COUNTER_TYPE } from "./counter-type";

export const increaseCounter = () => ({ type: COUNTER_TYPE.INCREAMENT_COUNT });

export const decreaseCount = () => ({ type: COUNTER_TYPE.DECREAMENT_COUNT });
