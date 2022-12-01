export const getTotalPrice = (items, initialValue = 0) =>
  items.reduce((sum, item) => sum + item.price, initialValue);
