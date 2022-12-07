import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { popularReducer } from "./reducers/popularReducer";
import { propertiesReducer } from "./reducers/propertiesReducer";
import { rentReducer } from "./reducers/rentReducer";
import { nearbyReducer } from "./reducers/nearbyReducer";
import { registerReducer } from "./reducers/registerReducer";
import { favoritesReducer } from "./reducers/favoritesReducer";
const rootReducer = combineReducers({
  popular: popularReducer,
  properties: propertiesReducer,
  rent: rentReducer,
  nearby: nearbyReducer,
  user: registerReducer,
  favorites: favoritesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
