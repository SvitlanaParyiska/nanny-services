export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectItems = state => state.nannies.items;
export const selectFavorites = state => state.nannies.favorites;
export const selectFilter = state => state.nannies.filter;
