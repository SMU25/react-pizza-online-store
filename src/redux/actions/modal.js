export const ACTION_TYPES = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
};

export const showModal = (payload) => ({
  type: ACTION_TYPES.SHOW_MODAL,
  payload,
});

export const hideModal = () => ({
  type: ACTION_TYPES.HIDE_MODAL,
});
