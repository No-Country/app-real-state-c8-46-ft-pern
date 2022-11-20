import axios from "axios";
import { URL_BACK } from "../../config";
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

export const getAllRents = () => {
  return async function (dispatch) {
    dispatch({ type: GET_ALL_RENTS_PENDING });
    try {
      const json = await axios(`${URL_BACK}/rent`);
      return dispatch({
        type: GET_ALL_RENTS_SUCCESS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_ALL_RENTS_REJECTED });
    }
  };
};

export const confirmRent = (payload) => {
  return async function (dispatch) {
    dispatch({ type: CONFIRM_RENT_PENDING });
    try {
      const res = axios.post(`${URL_BACK}/rent`, payload);
      dispatch({
        type: CONFIRM_RENT_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({ type: CONFIRM_RENT_REJECTED });
    }
  };
};

export const editRent = (payload) => {
  return async function (dispatch) {
    dispatch({ type: EDIT_RENT_PENDING });
    try {
      const json = await axios.put(`${URL_BACK}/rent/${payload.id}`, payload);
      return dispatch({
        type: EDIT_RENT_SUCCESS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({ type: EDIT_RENT_REJECTED });
    }
  };
};

export const cancelRentById = (id) => {
  return async function (dispatch) {
    dispatch({ type: CANCEL_RENT_PENDING });
    try {
      const json = await axios.delete(`${URL_BACK}/rent/${id}`);
      return dispatch({
        type: CANCEL_RENT_SUCCESS,
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({ type: CANCEL_RENT_REJECTED });
    }
  };
};
