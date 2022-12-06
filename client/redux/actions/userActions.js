import axios from "axios";
import { URL_BACK } from "../../config";
import {
  GET_USER_DATA_PENDING,
  GET_USER_DATA_REJECTED,
  GET_USER_DATA_SUCCESS,
  EDIT_USER_DATA_PENDING,
  EDIT_USER_DATA_REJECTED,
  EDIT_USER_DATA_SUCCESS
} from "../types/userTypes";

export const getUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: GET_USER_DATA_PENDING });
    try {
      const json = await axios(`${URL_BACK}/users/user/me`);
      return dispatch({
        type: GET_USER_DATA_SUCCESS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_USER_DATA_REJECTED });
    }
  };
};
export const editUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: EDIT_USER_DATA_PENDING });
    try {
      const json = await axios.put(
        `${URL_BACK}/users/user/${payload.id}`,
        payload
      );
      return dispatch({
        type: EDIT_USER_DATA_SUCCESS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: EDIT_USER_DATA_REJECTED });
    }
  };
};
