import axios from "axios";
import { URL_BACK } from "../../config";
import {
  GET_POPULAR_PROPERTIES_PENDING,
  GET_POPULAR_PROPERTIES_REJECTED,
  GET_POPULAR_PROPERTIES_SUCCESS,
} from "../types/popularTypes";

export const getPopularProperties = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POPULAR_PROPERTIES_PENDING })
    try {
      const json = await axios.get(`${URL_BACK}/popular`)
      return dispatch({
        type: GET_POPULAR_PROPERTIES_SUCCESS, 
        payload: json.data,
      });
    } catch (err) {
      console.log(err.message); 
      return dispatch({ type: GET_POPULAR_PROPERTIES_REJECTED });
    }
  };
};
