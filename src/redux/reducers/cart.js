import { ACTION_TYPES } from "redux/actions/cart";
import { getTotalPrice } from "utils/getTotalPrice";
import { getTotalSumObj } from "utils/getTotalSumObj";
import { PIZZA_TYPES, PIZZA_SIZES } from "constants/pizzaParameters";
import { PIZZA_CART_STATE_KEY } from "constants/localStorage";
import { getLastArrayItem } from "utils/getLastArrayItem";
import { getLocalStorageItem } from "utils/getLocalStorageItem";

const DATA_KEYS = {
  TOTAL_PRICE: "totalPrice",
  TOTAL_COUNT: "totalCount",
};

const updateCountPizzaParams = (pizzaParamsInfo, addedItem, operator = "-") =>
  pizzaParamsInfo.map((item) => {
    const count = operator === "-" ? item.count - 1 : item.count + 1;

    return item.key === `${addedItem.type}-${addedItem.size}`
      ? { ...item, count }
      : item;
  });

//Filtering against empty values
const getFilteredPizzaParamsInfo = (pizzaParamsInfo) =>
  pizzaParamsInfo.filter(({ count }) => count);

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (
  state = getLocalStorageItem(PIZZA_CART_STATE_KEY) || initialState,
  action
) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PIZZA_TO_CART: {
      const pizzaId = action.payload.id;
      const prevPizzasById = state.items[pizzaId]?.items || [];
      const allPizzasById = [...prevPizzasById, action.payload];

      const pizzasSortedBySize = PIZZA_SIZES.map((size) =>
        allPizzasById.filter((pizza) => pizza.size === size)
      );

      //Count of each pizza by parameter. Divided into 2 arrays by type.
      //Returns an object with two properties { key: "string for translate", count: count pizzas }
      const pizzaParamsInfo = PIZZA_TYPES.map((type) =>
        pizzasSortedBySize.map((items) => {
          const filteredItems = items.filter((item) => item.type === type);
          if (filteredItems.length) {
            const firstItem = filteredItems[0];
            return {
              key: `${firstItem.type}-${firstItem.size}`,
              count: filteredItems.length,
            };
          }
          return null;
        })
      );

      //Combining all arrays into one
      const combinedPizzaParamsInfo = [].concat.apply([], pizzaParamsInfo);

      //Filtering against empty values
      const filteredPizzaParamsInfo = combinedPizzaParamsInfo.filter(
        (item) => item
      );

      const newItems = {
        ...state.items,
        [pizzaId]: {
          items: allPizzasById,
          totalPrice: getTotalPrice(allPizzasById),
          totalCount: allPizzasById.length,
          pizzaParamsInfo: filteredPizzaParamsInfo,
        },
      };

      const totalPrice = getTotalSumObj(newItems, DATA_KEYS.TOTAL_PRICE);

      const totalCount = getTotalSumObj(newItems, DATA_KEYS.TOTAL_COUNT);

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };
    }

    case ACTION_TYPES.MINUS_CART_ITEM: {
      const currentItemById = state.items[action.payload];
      const allPizzasById = currentItemById.items;
      const pizzaParamsInfo = currentItemById.pizzaParamsInfo;

      let deletedItem = null;

      if (allPizzasById.length > 1) {
        deletedItem = allPizzasById.pop();
      }

      const newPizzaParamsInfo = deletedItem
        ? updateCountPizzaParams(pizzaParamsInfo, deletedItem)
        : pizzaParamsInfo;

      const filteredPizzaParamsInfo =
        getFilteredPizzaParamsInfo(newPizzaParamsInfo);

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: allPizzasById,
          totalPrice: getTotalPrice(allPizzasById),
          totalCount: allPizzasById.length,
          pizzaParamsInfo: filteredPizzaParamsInfo,
        },
      };

      const totalPrice = getTotalSumObj(newItems, DATA_KEYS.TOTAL_PRICE);

      const totalCount = getTotalSumObj(newItems, DATA_KEYS.TOTAL_COUNT);

      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
        totalCount: totalCount,
      };
    }

    case ACTION_TYPES.PLUS_CART_ITEM: {
      const currentItemById = state.items[action.payload];
      const prevPizzasById = currentItemById.items;
      const pizzaParamsInfo = currentItemById.pizzaParamsInfo;
      const lastAddedItem = getLastArrayItem(prevPizzasById);
      const allPizzasById = [...prevPizzasById, lastAddedItem];

      const newPizzaParamsInfo = updateCountPizzaParams(
        pizzaParamsInfo,
        lastAddedItem,
        "+"
      );

      const filteredPizzaParamsInfo =
        getFilteredPizzaParamsInfo(newPizzaParamsInfo);

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: allPizzasById,
          totalPrice: getTotalPrice(allPizzasById),
          totalCount: allPizzasById.length,
          pizzaParamsInfo: filteredPizzaParamsInfo,
        },
      };

      const totalPrice = getTotalSumObj(newItems, DATA_KEYS.TOTAL_PRICE);

      const totalCount = getTotalSumObj(newItems, DATA_KEYS.TOTAL_COUNT);

      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
        totalCount: totalCount,
      };
    }

    case ACTION_TYPES.REMOVE_CART_ITEM: {
      const newItems = { ...state.items };

      const totalPrice =
        state.totalPrice - state.items[action.payload].totalPrice;

      const totalCount =
        state.totalCount - state.items[action.payload].totalCount;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };
    }

    case ACTION_TYPES.CLEAR_CART: {
      return initialState;
    }

    default:
      return state;
  }
};

export default cartReducer;
