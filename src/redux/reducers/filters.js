import { ACTION_TYPES } from "redux/actions/filters";

const initialState = {
  category: "all",
  sortBy: { type: "rating", order: "desc" },
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case ACTION_TYPES.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
