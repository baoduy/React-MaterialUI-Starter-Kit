import InitialState from "../../reducers/initialState";
import * as actionTypes from "./ActionTypes";
import linq from "linq";

export function MessageBoxReducer(state = InitialState.messageBox, action) {
  switch (action.type) {
    case actionTypes.SHOW_MESSAGE_BOX:
      return action.payload;
    case actionTypes.HIDE_MESSAGE_BOX:
      return Object.assign({}, state, { handler: undefined, open: false });
    default:
      return state;
  }
}

export function NotificationReducer(
  state = InitialState.notifications,
  action
) {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION: {
      //filter out the closed notification and add new item on top
      const items = linq
        .from(state)
        .where(i => i.open)
        .toArray();
      return [action.payload, ...items];
    }
    case actionTypes.HIDE_NOTIFICATION: {
      //set open to false
      const items = linq
        .from(state)
        .where(i => i.id != action.payload.id)
        .toArray();
      return [...items, Object.assign({}, action.payload, { open: false })];
    }
    default:
      return state;
  }
}
