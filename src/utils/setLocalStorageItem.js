export const setLocalStorageItem = (key, value = null) =>
  localStorage.setItem(key, JSON.stringify(value));
