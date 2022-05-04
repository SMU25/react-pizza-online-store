import axios from "axios";

export const getPizzaItems = () => (dispatch) => {
  try {
    axios("http://localhost:5000/pizzaItems?category_like=").then(
      ({ data }) => {
        dispatch(setPizzaItems(data));
      }
    );
  } catch (error) {
    console.log(error);
  } finally {
  }
};

export const setPizzaItems = (items) => ({
  type: "SET_PIZZA_ITEMS",
  payload: items,
});
