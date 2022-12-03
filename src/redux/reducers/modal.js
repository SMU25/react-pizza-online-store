import { ACTION_TYPES } from "redux/actions/modal";

const initialState = {
  isOpen: false,
  title: "",
  text: "",
  children: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_MODAL:
      const { title, text, children } = action.payload;

      return {
        ...state,
        isOpen: true,
        title,
        text,
        children,
      };

    case ACTION_TYPES.HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};

export default modalReducer;
