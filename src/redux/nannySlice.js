import { createSlice } from '@reduxjs/toolkit';
import { getNanny } from './nannyOperations';

const initialState = {
  items: [],
  favorites: [],
  filter: 'all',
};

export const nannySlice = createSlice({
  name: 'nanny',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter();
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getNanny.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNanny.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getNanny.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { addFavorite, removeFavorite, setFilter } = nannySlice.actions;

export const nannyReducer = nannySlice.reducer;
