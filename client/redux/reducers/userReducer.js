import {
  GET_USER_DATA_PENDING,
  GET_USER_DATA_REJECTED,
  GET_USER_DATA_SUCCESS,
  EDIT_USER_DATA_PENDING,
  EDIT_USER_DATA_REJECTED,
  EDIT_USER_DATA_SUCCESS,
  USER_LOGIN_SUCCESS
} from "../types/userTypes";
const initialState = {
  isLoading: false,
  user: null,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case GET_USER_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        user: null,
      };
    case GET_USER_DATA_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case EDIT_USER_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        user: null,
      };
    case EDIT_USER_DATA_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    case EDIT_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    default:
      return { ...state };
  }
};
