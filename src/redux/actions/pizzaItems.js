import axios from "axios";
import { API_URL_PIZZA_ITEMS } from "constants/urls";

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

export const getPizzaItems =
  (filterBy = "", { type, order }) =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const category = filterBy !== CATEGORY_NAME_ALL ? filterBy : "";
      const { data } = await axios(
        `${API_URL_PIZZA_ITEMS}?category_like=${category}&_sort=${type}&_order=${order}`
      );

      dispatch(setPizzaItems(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
