import {
  REGISTER_USER_PENDING,
  REGISTER_USER_REJECTED,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
} from "../types/registerTypes";

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  error: null,
};

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_PENDING:
      console.log('pending');
      return { ...state, isLoading: true, user: null, token: null };
    case REGISTER_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
        token: null,
        error: payload,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        error: null,
      };
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        user: null,
        error: null,
        token: null,
      };
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: payload,
        token: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        token: payload.token,
        error: null,
      };
    default:
      return { ...state };
  }
};
