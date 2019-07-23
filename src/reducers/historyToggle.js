const ToggleHistoryReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_HISTORY":
      return !state;
    default:
      return state;
  }
};
export default ToggleHistoryReducer;
