import {
  GET_MY_FAVORITES_PENDING,
  GET_MY_FAVORITES_REJECTED,
  GET_MY_FAVORITES_SUCCESS,
  ADD_TO_FAVORITES_PENDING,
  ADD_TO_FAVORITES_REJECTED,
  ADD_TO_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES_PENDING,
  REMOVE_FROM_FAVORITES_REJECTED,
  REMOVE_FROM_FAVORITES_SUCCESS,
} from "../types/favoritesTypes";
const initialState = {
  isLoading: false,
  favorites: [],
  allFavorites: [],
  error: null,
};
export const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MY_FAVORITES_PENDING:
      return { ...state, error: null, isLoading: true, favorites: null };
    case GET_MY_FAVORITES_REJECTED:
      return { ...state, error: payload, isLoading: false, favorites: null };
    case GET_MY_FAVORITES_SUCCESS:
      return { ...state, error: null, isLoading: false, favorites: payload };
    case ADD_TO_FAVORITES_PENDING:
      return { ...state, error: null, isLoading: true };
    case ADD_TO_FAVORITES_REJECTED:
      return { ...state, error: payload, isLoading: false };
    case ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        favorites: [payload, ...state.favorites],
      };
    case REMOVE_FROM_FAVORITES_PENDING:
      return { ...state, error: null, isLoading: true };
    case REMOVE_FROM_FAVORITES_REJECTED:
      return { ...state, error: payload, isLoading: false };
    case REMOVE_FROM_FAVORITES_SUCCESS:
      return { ...state, error: null, isLoading: false };
    default:
      return { ...state };
  }
};
