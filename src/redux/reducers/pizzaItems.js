const initialState = {
  items: [],
  isLoaded: false,
};

export const pizzaItems = (state = initialState, action) => {
  if (action.type === "SET_PIZZA_ITEMS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};
