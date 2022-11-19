import axios from "axios";
import { API_URL_PIZZA_ITEMS, ORDER_ASC, ORDER_DESC } from "constants/urls";

export const ACTION_TYPE_NAME_IS_LOADING = "SET_IS_LOADING";
export const ACTION_TYPE_NAME_PIZZA_ITEMS = "SET_PIZZA_ITEMS";

export const setIsLoading = (payload) => ({
  type: ACTION_TYPE_NAME_IS_LOADING,
  payload,
});

export const setPizzaItems = (payload) => ({
  type: ACTION_TYPE_NAME_PIZZA_ITEMS,
  payload,
});

const CATEGORY_NAME_ALL = "all";
const SORT_NAME_POPULAR = "rating";

export const getPizzaItems =
  (filterBy = "", sortBy = "") =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const category = filterBy !== CATEGORY_NAME_ALL ? filterBy : "";
      const order = sortBy !== SORT_NAME_POPULAR ? ORDER_ASC : ORDER_DESC;
      const { data } = await axios(
        `${API_URL_PIZZA_ITEMS}?category_like=${category}&_sort=${sortBy}&_order=${order}`
      );

      dispatch(setPizzaItems(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
