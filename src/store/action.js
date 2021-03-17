export const ActionType = {
  TOGGLE_POPUP: "TOGGLE_POPUP"
};

export const ActionCreator = {
  togglePopup: () => ({
    type: ActionType.TOGGLE_POPUP,
  })
};