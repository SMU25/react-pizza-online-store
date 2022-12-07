export const setLocalStorageItem = (key, value = "") =>
  localStorage.setItem(key, JSON.stringify(value));
