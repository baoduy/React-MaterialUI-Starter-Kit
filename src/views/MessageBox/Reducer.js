import * as actionTypes from "./ActionTypes";
import linq from "linq";

export function MessageBoxReducer(state = {}, action) {
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

export function NotificationReducer(
  state = [],
  action
) {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      {
        //filter out the closed notification and add new item on top
        const items = linq
          .from(state)
          .where(i => i.open)
          .toArray();
        return [Object.assign(action.payload, {
          open: true
        }), ...items];
      }
    case actionTypes.HIDE_NOTIFICATION:
      {
        //set open to false
        const items = linq
          .from(state)
          .where(i => i.id != action.payload.id)
          .toArray();
        return [...items, Object.assign(action.payload, {
          message: "",
          open: false
        })];
      }
    default:
      return state;
  }
}