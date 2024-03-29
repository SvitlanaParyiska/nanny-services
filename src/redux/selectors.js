export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectItems = state => state.nanny.items;
export const selectFavorites = state => state.nanny.favorites;
export const selectFilter = state => state.nanny.filter;
