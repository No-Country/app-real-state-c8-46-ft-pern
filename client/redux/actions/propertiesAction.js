import axios from "axios";
import { URL_BACK } from "../../config";
import GET_PROPERTIES_PENDING, {
  GET_PROPERTIES_REJECTED,
  GET_PROPERTIES_SUCCESS,
} from "../types/propertiesTypes";

export const getProperties = () => {
  return async function (dispatch) {
    dispatch({ type: GET_PROPERTIES_PENDING });
    try {
      const json = await axios(`${URL_BACK}/properties`);
      return dispatch({
        type: GET_PROPERTIES_SUCCESS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_PROPERTIES_REJECTED });
    }
  };
};
