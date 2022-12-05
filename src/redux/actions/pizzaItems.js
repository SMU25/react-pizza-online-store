import axios from "axios";
import { CATEGORY_NAME_ALL } from "constants/categories";
import { API_URL_PIZZA_ITEMS } from "constants/urls";

export const ACTION_TYPES = {
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_PIZZA_ITEMS: "SET_PIZZA_ITEMS",
};

export const setIsLoading = (payload) => ({
  type: ACTION_TYPES.SET_IS_LOADING,
  payload,
});

export const setPizzaItems = (payload) => ({
  type: ACTION_TYPES.SET_PIZZA_ITEMS,
  payload,
});

export const getPizzaItems =
  (filterBy = "", { type, order }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const category = filterBy !== CATEGORY_NAME_ALL ? filterBy : "";
      const url = `/pizzaItems?category_like=${category}&_sort=${type}&_order=${order}`;
      const { data } = await axios(url);

      dispatch(setPizzaItems(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
