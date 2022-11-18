import { combineReducers } from "redux";
import { filters } from "./filters";
import { pizzaItems } from "./pizzaItems";

export const rootReducer = combineReducers({
  filters,
  pizzaItems,
});
