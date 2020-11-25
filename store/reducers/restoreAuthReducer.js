/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import {
  setToken
} from './authReducer';

export const slice = createSlice({
  name: 'restoreAuth',
  initialState: {
    loading: true,
    error: null,
  },
  reducers: {
    restoreTokenFailed: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    },
    restoreTokenSuccess: (state) => {
      return {
        ...state,
        loading: false
      };
    }
  }
});

export const { restoreTokenFailed, restoreTokenSuccess } = slice.actions;

export const restoreToken = () => async (dispatch) => {
  let token;
  let decoded;
  try {
    token = await AsyncStorage.getItem('token');
    decoded = jwt_decode(token);
    const now = new Date().valueOf();
    if (now > decoded.exp) { // expired token
      dispatch(restoreTokenFailed('expired token'));
    } else {
      dispatch(setToken(token));
      dispatch(restoreTokenSuccess());
    }
  } catch (e) {
    // Restoring token failed
    dispatch(restoreTokenFailed(e.message));
  }
};

export const selectError = (state) => state.restoreAuth.error;
export const selectLoading = (state) => state.restoreAuth.loading;

export default slice.reducer;
