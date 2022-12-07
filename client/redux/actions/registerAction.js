// auth/register
// auth/login
import { URL_BACK } from "../../config";
import axios from "axios";
import {
  REGISTER_USER_PENDING,
  REGISTER_USER_REJECTED,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
} from "../types/registerTypes";

export const registerUser = (payload) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_USER_PENDING });
    try {
      const json = await axios.post(`${URL_BACK}/auth/register`, payload);
      return dispatch({ type: REGISTER_USER_SUCCESS, payload: json.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: REGISTER_USER_REJECTED });
    }
  };
};

export const loginUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: LOGIN_USER_PENDING });
    try {
      const json = await axios.post(`${URL_BACK}/auth/login`, payload);
      return dispatch({ type: LOGIN_USER_SUCCESS, payload: json.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: LOGIN_USER_REJECTED });
    }
  };
};

export const logoutUser = (payload) => {
  
}
