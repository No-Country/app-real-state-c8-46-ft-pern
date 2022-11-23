import axios from "axios";
import { URL_BACK } from "../../config";
import {
  GET_MY_FAVORITES_PENDING,
  GET_MY_FAVORITES_REJECTED,
  GET_MY_FAVORITES_SUCCESS,
  ADD_TO_FAVORITES_PENDING,
  ADD_TO_FAVORITES_REJECTED,
  ADD_TO_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES_PENDING,
  REMOVE_FROM_FAVORITES_REJECTED,
  REMOVE_FROM_FAVORITES_SUCCESS,
} from "../types/favoritesTypes";
export const getMyFavorites = (payload) => {
  return async function (dispatch) {
    dispatch({ type: GET_MY_FAVORITES_PENDING });
    try {
      const json = await axios(`${URL_BACK}/favorites/me`, payload);
      return dispatch({ type: GET_MY_FAVORITES_SUCCESS, payload: json.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_MY_FAVORITES_REJECTED });
    }
  };
};

export const addToFavorites = (payload) => {
  return async function (dispatch) {
    dispatch({ type: ADD_TO_FAVORITES_PENDING });
    try {
      const json = await axios.post(`${URL_BACK}/favorites/me`, payload);
      return dispatch({ type: ADD_TO_FAVORITES_SUCCESS, payload: json.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: ADD_TO_FAVORITES_REJECTED });
    }
  };
};

export const removeFromFavorites = (payload) => {
  return async function (dispatch) {
    dispatch({ type: REMOVE_FROM_FAVORITES_PENDING });
    try {
      const json = await axios.delete(
        `${URL_BACK}/favorites/me/${payload.favId}`
      );
      return dispatch({
        type: REMOVE_FROM_FAVORITES_SUCCESS,
        payload: json.data,
      });
    } catch (e) {
      return dispatch({ type: REMOVE_FROM_FAVORITES_REJECTED });
    }
  };
};
