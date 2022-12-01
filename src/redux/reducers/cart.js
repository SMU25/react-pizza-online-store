import { ACTION_TYPES } from "redux/actions/cart";
import { getTotalPrice } from "utils/getTotalPrice";
import { getTotalSumObj } from "utils/getTotalSumObj";

const DATA_KEYS = {
  TOTAL_PRICE: "totalPrice",
  TOTAL_COUNT: "totalCount",
};

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PIZZA_TO_CART: {
      const pizzaId = action.payload.id;
      const prevPizzasById = state.items[pizzaId]?.items || [];
      const allPizzasById = [...prevPizzasById, action.payload];

      const newItems = {
        ...state.items,
        [pizzaId]: {
          items: allPizzasById,
          totalPrice: getTotalPrice(allPizzasById),
          totalCount: allPizzasById.length,
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

    // case ACTION_TYPES.MINUS_CART_ITEM: {
    //   // const newItems = state.items[action.payload].items;
    //   const newItems = state.items;

    //   if (state.items[action.payload].items.length > 1) {
    //     state.items[action.payload].items.pop();
    //   } else {
    //     state.items[action.payload].items = [];
    //   }

    //   return {
    //     items: newItems,
    //     ...state,
    //   };
    // }

    case ACTION_TYPES.MINUS_CART_ITEM: {
      const allPizzasById = state.items[action.payload].items;

      if (allPizzasById.length > 1) {
        allPizzasById.pop();
      }

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: allPizzasById,
          totalPrice: getTotalPrice(allPizzasById),
          totalCount: allPizzasById.length,
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
      const prevPizzasById = state.items[action.payload].items;
      const allPizzasById = [...prevPizzasById, prevPizzasById[0]];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: allPizzasById,
          totalPrice: getTotalPrice(allPizzasById),
          totalCount: allPizzasById.length,
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
