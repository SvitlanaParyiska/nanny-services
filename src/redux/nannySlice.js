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
      const isUserId = state.favorites.findIndex(
        item => item.userId === payload.userId
      );
      if (isUserId === -1) {
        state.favorites.push({ userId: payload.userId, list: [payload.item] });
      } else {
        state.favorites[isUserId].list.push(payload.item);
      }
    },
    removeFavorite: (state, { payload }) => {
      const isUserId = state.favorites.findIndex(
        item => item.userId === payload.userId
      );
      const index = state.favorites[isUserId].list.findIndex(
        item => item.name === payload.itemName
      );
      state.favorites[isUserId].list.splice(index, 1);
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
