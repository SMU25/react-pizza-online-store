export const ACTION_TYPES = {
  ADD_PIZZA_TO_CART: "ADD_PIZZA_TO_CART",
  CLEAR_CART: "CLEAR_CART",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  PLUS_CART_ITEM: "PLUS_CART_ITEM",
  MINUS_CART_ITEM: "MINUS_CART_ITEM",
};

export const addPizzaToCart = (payload) => ({
  type: ACTION_TYPES.ADD_PIZZA_TO_CART,
  payload,
});

export const clearCart = () => ({
  type: ACTION_TYPES.CLEAR_CART,
});

export const removeCartItem = (id) => ({
  type: ACTION_TYPES.REMOVE_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: ACTION_TYPES.MINUS_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: ACTION_TYPES.PLUS_CART_ITEM,
  payload: id,
});
