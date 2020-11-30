/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import {
  setUser,
  // setError
} from './authReducer';

export const slice = createSlice({
  name: 'restoreAuth',
  initialState: {
    loading: true,
  },
  reducers: {
    restoreTokenFinished: (state) => {
      return {
        ...state,
        loading: false
      };
    },
  }
});

export const { restoreTokenFinished } = slice.actions;

export const restoreToken = () => async (dispatch) => {
  let token;
  let decoded;
  try {
    token = await AsyncStorage.getItem('token');
    decoded = jwt_decode(token);
    const now = new Date().valueOf();
    if (now > decoded.exp) { // expired token
      await AsyncStorage.setItem('token', null);
    } else {
      dispatch(setUser(token));
    }
    dispatch(restoreTokenFinished());
  } catch (e) {
    // Restoring token failed
    // dispatch(setError(e.message));
    dispatch(restoreTokenFinished());
  }
};

export const selectLoading = (state) => state.restoreAuth.loading;

export default slice.reducer;
