import { createSlice } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfo } from '../../api/index';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    username: null,
    email: null,
    balance: null,
    token: null,
    error: null
  },
  reducers: {
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload
      };
    },
    setUserInfo: (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.name,
        email: action.payload.email,
        balance: action.payload.balance
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload
      };
    },
  }
});

export const { setToken, setUserInfo, setError } = slice.actions;

export const setUser = (token) => async (dispatch) => {
  const userInfo = await getUserInfo(token);
  console.log('getUserInfo', userInfo);
  if (!userInfo.id) {
    dispatch(setError(userInfo));
  } else {
    dispatch(setToken(token));
    // await AsyncStorage.setItem('token', token);
    dispatch(setUserInfo(userInfo));
  }
};

export const selectToken = (state) => state.auth.token;
export const selectError = (state) => state.auth.error;

export default slice.reducer;
