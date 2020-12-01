import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfo, signupUser, loginUser } from '../../api/index';
import { restoreTokenFinished } from './restoreAuthReducer';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    id: null,
    name: null,
    email: null,
    balance: null,
    token: null,
    error: null
  },
  reducers: {
    setToken: (state, action) => {
      console.log('setToken', action);
      return {
        ...state,
        token: action.payload
      };
    },
    setUserInfo: (state, action) => {
      console.log('setUserInfo', action);
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
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

export const setUser = (token, isStartApp = false) => async (dispatch) => {
  const data = await getUserInfo(token);
  console.log('getUserInfo', data);
  if (!data.user_info_token) {
    dispatch(setError(data));
  } else {
    dispatch(setError(null));
    dispatch(setToken(token));
    await AsyncStorage.setItem('token', token);
    dispatch(setUserInfo(data.user_info_token));
  }
  if (isStartApp) {
    dispatch(restoreTokenFinished());
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  const response = await loginUser({ email, password });
  if (!response.id_token) {
    dispatch(setError(response));
  } else {
    dispatch(setUser(response.id_token));
  }
};

export const signUp = ({ username, password, email }) => async (dispatch) => {
  const response = await signupUser({ username, password, email });
  if (!response.id_token) {
    dispatch(setError(response));
  } else {
    dispatch(setUser(response.id_token));
  }
};

export const selectToken = (state) => state.auth.token;
export const selectError = (state) => state.auth.error;
export const selectUserInfo = (state) => state.auth;

export default slice.reducer;
