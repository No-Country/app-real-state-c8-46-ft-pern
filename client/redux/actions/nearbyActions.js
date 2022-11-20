import axios from "axios";
import { URL_BACK } from "../../config";
import {
  GET_NEARBY_PROPERTIES_PENDING,
  GET_NEARBY_PROPERTIES_REJECTED,
  GET_NEARBY_PROPERTIES_SUCCESS,
} from "../types/nearbyTypes";

export const getNearbyProperties = () => {
  return async function (dispatch) {
    dispatch({ type: GET_NEARBY_PROPERTIES_PENDING });
    try {
      const json = await axios(`${URL_BACK}/nearby`);
      return dispatch({
        type: GET_NEARBY_PROPERTIES_SUCCESS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_NEARBY_PROPERTIES_REJECTED });
    }
  };
};
