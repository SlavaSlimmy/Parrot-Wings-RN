/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
// eslint-disable-next-line import/no-cycle
import { setUser } from './authReducer';

export const slice = createSlice({
  name: 'restoreAuth',
  initialState: {
    loading: true,
  },
  reducers: {
    restoreTokenFinished: (state) => {
      console.log('restoreTokenFinished');
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const { restoreTokenFinished } = slice.actions;

export const restoreToken = () => async (dispatch) => {
  let token;
  let decoded;
  try {
    token = await AsyncStorage.getItem('token');
    decoded = jwt_decode(token);
    console.log('decoded', decoded);
    const now = new Date().valueOf();
    const expDate = decoded.exp * 1000; // sec to ms
    if (now > expDate) {
      // expired token
      await AsyncStorage.setItem('token', null);
      dispatch(restoreTokenFinished());
    } else {
      dispatch(setUser(token, true));
    }
  } catch (e) {
    console.log(e.message);
    // Restoring token failed
    // dispatch(setError(e.message));
    dispatch(restoreTokenFinished());
  }
};

export const selectLoading = (state) => state.restoreAuth.loading;

export default slice.reducer;
