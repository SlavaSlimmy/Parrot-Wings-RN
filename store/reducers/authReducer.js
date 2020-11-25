import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    email: null,
    balance: null,
    token: null
  },
  reducers: {
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload
      };
    },
  }
});

export const { setToken } = slice.actions;

export const selectToken = (state) => state.auth.token;

export default slice.reducer;
