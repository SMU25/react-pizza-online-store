import { combineReducers } from "redux";
import pizzaItems from "./pizzaItems";
import filters from "./filters";
import cart from "./cart";
import modal from "./modal";

export const rootReducer = combineReducers({
  pizzaItems,
  filters,
  cart,
  modal,
});
