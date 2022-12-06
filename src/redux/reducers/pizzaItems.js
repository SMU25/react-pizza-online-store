import { ACTION_TYPES } from "redux/actions/pizzaItems";
import { PRICE_TYPES } from "constants/prices";

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

    case ACTION_TYPES.ON_CHANGE_PIZZA_PARAMS:
      const { id, activeType, activeSize, sizes } = action.payload;

      const pizzaItems = state.items.map((item) => {
        if (item.id === id) {
          const numericalRatio = activeSize / sizes[0];
          const totalPricePizza =
            Math.round(numericalRatio * item.price) + PRICE_TYPES[activeType];

          return { ...item, totalPricePizza };
        }
        return item;
      });

      return {
        ...state,
        items: pizzaItems,
      };

    default:
      return state;
  }
};

export default pizzaItemsReducer;
