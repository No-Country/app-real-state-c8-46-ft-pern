import {
  GET_NEARBY_PROPERTIES_PENDING,
  GET_NEARBY_PROPERTIES_REJECTED,
  GET_NEARBY_PROPERTIES_SUCCESS,
} from "../types/nearbyTypes";

const initialState = {
  isLoading: false,
  nearby: [],
};

export const nearbyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NEARBY_PROPERTIES_PENDING:
      return {
        ...state,
        isLoading: true,
        nearby: [],
      };
    case GET_NEARBY_PROPERTIES_REJECTED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_NEARBY_PROPERTIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        nearby: payload,
      };
  }
};
