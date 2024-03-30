import { createSlice } from '@reduxjs/toolkit';
import { registration, logIn, logOut } from './authOperations';

const initialState = {
  user: {
    userId: null,
    name: null,
    email: null,
  },
  isLoggedIn: true,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getCurrentUser: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
      email: payload.email,
      isLoggedIn: true,
    }),
  },

  extraReducers: builder => {
    builder
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, (state, { payload }) => {
        if (!payload.error) {
          state.user.userId = payload.uid;
          state.user.name = payload.displayName;
          state.user.email = payload.email;
          state.isLoggedIn = true;
          state.isLoading = false;
        } else {
          console.error(payload.error);
          state.isLoading = false;
        }
      })
      .addCase(registration.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        if (!payload.error) {
          state.user.userId = payload.uid;
          state.user.name = payload.displayName;
          state.user.email = payload.email;
          state.isLoggedIn = true;
          state.isLoading = false;
        } else {
          state.isLoading = false;
          console.error(payload.error);
        }
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user.userId = null;
        state.user.name = null;
        state.user.email = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { getCurrentUser } = authSlice.actions;
