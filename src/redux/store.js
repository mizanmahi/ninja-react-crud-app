import { configureStore } from "@reduxjs/toolkit";
import createSaga from "redux-saga";
import logger from "redux-logger";

import { countReducer } from "./counter-reducer";
import { increament } from "./counter-sagas";

const saga = createSaga();

/*
That one call to configureStore did all the work for us:

It combined todosReducer and filtersReducer into the root reducer function, which will handle a root state that looks like {todos, filters}
It created a Redux store using that root reducer
It automatically added the thunk middleware
It automatically added more middleware to check for common mistakes like accidentally mutating the state
It automatically set up the Redux DevTools Extension connection
*/
export const store = configureStore({
    reducer: {
        counter: countReducer,
    },
    middleware: [logger, saga]
})

saga.run(increament)


