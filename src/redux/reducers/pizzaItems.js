import { ACTION_TYPES } from "redux/actions/pizzaItems";

const initialState = {
  items: [],
  isLoading: true,
};

const pizzaItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ACTION_TYPES.SET_PIZZA_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default pizzaItemsReducer;
