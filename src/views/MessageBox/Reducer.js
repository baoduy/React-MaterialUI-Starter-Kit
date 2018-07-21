import * as actionTypes from "./ActionTypes";

export default function MessageBoxReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.SHOW_MESSAGE_BOX:
      return Object.assign(action.payload, {
        open: true
      });
    case actionTypes.HIDE_MESSAGE_BOX:
      return Object.assign({}, state, {
        message: "",
        handler: undefined,
        open: false
      });
    default:
      return state;
  }
}
