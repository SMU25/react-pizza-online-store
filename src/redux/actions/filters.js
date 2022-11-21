export const ACTION_TYPES = {
  SET_SORT_BY: "SET_SORT_BY",
  SET_CATEGORY: "SET_CATEGORY",
};

export const setSortBy = (payload) => ({
  type: "SET_SORT_BY",
  payload,
});

export const setCategory = (name) => ({
  type: "SET_CATEGORY",
  payload: name,
});
