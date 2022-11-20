import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  nearbyReducer,
  popularReducer,
  propertiesReducer,
  rentReducer,
} from "./reducers";

const rootReducer = combineReducers({
  popular: popularReducer,
  properties: propertiesReducer,
  rent: rentReducer,
  nearby: nearbyReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
