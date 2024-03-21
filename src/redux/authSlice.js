import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, favorites: [] },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.isLoggedIn = true;
    },
    removeUser: (state, action) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addUser, removeUser } = authSlice.actions;
