import { combineReducers } from "redux";
import pizzaItems from "./pizzaItems";
import filters from "./filters";
import cart from "./cart";

export const rootReducer = combineReducers({
  pizzaItems,
  filters,
  cart,
});
