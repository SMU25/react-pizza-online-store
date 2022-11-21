export const ACTION_TYPES = {
  ADD_PIZZA_TO_CART: "ADD_PIZZA_TO_CART",
  SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
  SET_TOTAL_ITEMS_COUNT: "SET_TOTAL_ITEMS_COUNT",
};

export const addPizzaToCart = (payload) => ({
  type: ACTION_TYPES.ADD_PIZZA_TO_CART,
  payload,
});
