import { ACTION_TYPES } from "redux/actions/cart";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  const pizzaId = action.payload?.id;

  switch (action.type) {
    case ACTION_TYPES.ADD_PIZZA_TO_CART:
      const newItems = {
        ...state.items,
        [pizzaId]: [...(state.items[pizzaId] || []), action.payload],
      };

      const allPizzaItems = [].concat.apply([], Object.values(newItems));

      const totalPrice = allPizzaItems.reduce(
        (result, item) => result + item.price,
        0
      );

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount: allPizzaItems.length,
      };

    default:
      return state;
  }
};

export default cartReducer;
