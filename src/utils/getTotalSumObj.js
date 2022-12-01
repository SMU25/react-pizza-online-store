export const getTotalSumObj = (items, dataKey, initialValue = 0) =>
  Object.keys(items).reduce(
    (sum, key) => sum + items[key][dataKey],
    initialValue
  );
