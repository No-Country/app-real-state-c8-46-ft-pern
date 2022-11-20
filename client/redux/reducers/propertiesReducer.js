import {
  GET_PROPERTIES_PENDING,
  GET_PROPERTIES_REJECTED,
  GET_PROPERTIES_SUCCESS,
} from "../types/propertiesTypes";

const initialState = {
  isLoading: false,
  properties: [],
};
export const propertiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROPERTIES_PENDING:
      return {
        ...state,
        isLoading: true,
        properties: [],
      };
    case GET_PROPERTIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        properties: payload,
      };
    case GET_PROPERTIES_REJECTED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
