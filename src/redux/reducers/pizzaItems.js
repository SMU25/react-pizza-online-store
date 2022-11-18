import { ACTION_TYPE_NAME_PIZZA_ITEMS } from "redux/actions/pizzaItems";

const initialState = {
  items: [],
  isLoaded: false,
};

export const pizzaItems = (state = initialState, action) => {
  if (action.type === ACTION_TYPE_NAME_PIZZA_ITEMS) {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }

  return state;
};
