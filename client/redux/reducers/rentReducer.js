import {
  CANCEL_RENT_PENDING,
  CANCEL_RENT_REJECTED,
  CANCEL_RENT_SUCCESS,
  CONFIRM_RENT_PENDING,
  CONFIRM_RENT_REJECTED,
  CONFIRM_RENT_SUCCESS,
  EDIT_RENT_PENDING,
  EDIT_RENT_REJECTED,
  EDIT_RENT_SUCCESS,
  GET_ALL_RENTS_PENDING,
  GET_ALL_RENTS_REJECTED,
  GET_ALL_RENTS_SUCCESS,
} from "../types/rentTypes";

const initialState = {
  isLoading: false,
  rents: [],
  rent: null,
};

export const rentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //----------------- GET ALL RENTS --------------- //
    case GET_ALL_RENTS_PENDING:
      return {
        ...state,
        isLoading: true,
        rents: [],
        rent: null,
      };
    case GET_ALL_RENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rents: payload,
        rent: null,
      };
    case GET_ALL_RENTS_REJECTED:
      return {
        ...state,
        isLoading: false,
        rents: [],
        rent: null,
      };

    //----------------- CONFIRM RENT --------------- //

    case CONFIRM_RENT_PENDING:
      return {
        ...state,
        isLoading: true,
        rents: [],
        rent: null,
      };
    case CONFIRM_RENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rents: [],
        rent: payload,
      };
    case CONFIRM_RENT_REJECTED:
      return {
        ...state,
        isLoading: false,
        rents: [],
        rent: null,
      };

    //----------------- EDIT RENT --------------- //

    case EDIT_RENT_PENDING:
      return {
        ...state,
        rents: [],
        isLoading: true,
      };

    case EDIT_RENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rents: [],
        rent: payload,
      };

    case EDIT_RENT_REJECTED:
      return {
        ...state,
        isLoading: false,
        rents: [],
        rent: null,
      };
    //----------------- CANCEL RENTS --------------- //

    case CANCEL_RENT_PENDING:
      return {
        ...state,
        isLoading: true,
        rents: [],
        rent: null,
      };
    case CANCEL_RENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        rents: [],
        rent: payload,
      };
    case CANCEL_RENT_REJECTED:
      return {
        ...state,
        isLoading: false,
        rents: [],
        rent: null,
      };
    default:
      return { ...state };
  }
};
