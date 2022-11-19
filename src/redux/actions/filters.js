export const setSortBy = (payload) => ({
  type: "SET_SORT_BY",
  payload,
});

export const setCategory = (name) => ({
  type: "SET_CATEGORY",
  payload: name,
});
