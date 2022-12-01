export const selectPizzaItemsState = ({ pizzaItems }) => pizzaItems;

export const selectPizzaItems = ({ pizzaItems }) => pizzaItems.items;

export const selectIsLoading = ({ pizzaItems }) => pizzaItems.isLoading;
