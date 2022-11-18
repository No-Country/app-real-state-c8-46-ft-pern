import { popularReducer } from "./reducers/popularReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({popularReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
