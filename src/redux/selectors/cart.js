export const selectCartState = ({ cart }) => cart;

export const selectCartItems = ({ cart }) => cart.items;

export const selectTotalPrice = ({ cart }) => cart.totalPrice;

export const selectTotalCount = ({ cart }) => cart.totalCount;
