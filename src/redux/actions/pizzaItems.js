import axios from "axios";

export const ACTION_TYPE_NAME_PIZZA_ITEMS = "SET_PIZZA_ITEMS";

export const setPizzaItems = (items) => ({
  type: ACTION_TYPE_NAME_PIZZA_ITEMS,
  payload: items,
});

export const getPizzaItems = () => async (dispatch) => {
  try {
    await axios("http://localhost:5000/pizzaItems?category_like=").then(
      ({ data }) => {
        dispatch(setPizzaItems(data));
      }
    );
  } catch (error) {
    console.log(error);
  }
};
