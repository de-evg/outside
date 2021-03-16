export const ActionType = {
  HIDE_START_POPUP: "HIDE_START_POPUP"
};

export const ActionCreator = {
  closePopup: () => ({
    type: ActionType.HIDE_START_POPUP,
  })
};