import {
  GET_POPULAR_PROPERTIES_PENDING,
  GET_POPULAR_PROPERTIES_REJECTED,
  GET_POPULAR_PROPERTIES_SUCCESS,
} from "../types/popularTypes";

const initialState = {
  isLoading: false,
  popularProperties: [],
};

export const popularReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POPULAR_PROPERTIES_PENDING:
      return {
        ...state,
        isLoading: true,
        popularProperties: [],
      };
    case GET_POPULAR_PROPERTIES_REJECTED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_POPULAR_PROPERTIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        popularProperties: payload,
      };
    default:
      return { ...state };
  }
};
