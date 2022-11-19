import {
  ACTION_TYPE_NAME_IS_LOADING,
  ACTION_TYPE_NAME_PIZZA_ITEMS,
} from "redux/actions/pizzaItems";

const initialState = {
  items: [],
  isLoading: true,
};

export const pizzaItems = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_NAME_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ACTION_TYPE_NAME_PIZZA_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
