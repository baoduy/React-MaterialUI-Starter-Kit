import * as actionTypes from "./ActionTypes";
import linq from "linq";
import * as guard from "../../commons/guard";

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

export function NotificationReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION: {
      const item = action.payload;
      guard.argumentNotEmpty(item.id, "id");

      return [
        Object.assign(item, {
          open: true
        }),
        ...state
      ];
    }
    case actionTypes.HIDE_NOTIFICATION: {
      //set open to false
      const { id } = action.payload;
      guard.argumentNotEmpty(id, "id");

      const query = linq.from(state);
      const item = query.first(i => i.id === id);
      const items = query.where(i => i.id != id).toArray();

      return [
        ...items,
        Object.assign({}, item, {
          message: "",
          open: false
        })
      ];
    }
    default:
      return state;
  }
}
