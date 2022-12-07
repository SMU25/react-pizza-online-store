import { NULL_TYPE, UNDEFINED_TYPE } from "constants/types";

export const getLocalStorageItem = (key) => {
  const stringifyItem = localStorage.getItem(key);

  if (
    !stringifyItem ||
    stringifyItem.includes(NULL_TYPE) ||
    stringifyItem.includes(UNDEFINED_TYPE)
  ) {
    return null;
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};
