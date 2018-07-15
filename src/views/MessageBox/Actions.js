import * as actionTypes from "./ActionTypes";
import * as guard from "../../commons/guard";

function createMessageId() {
  return new Date().getTime();
}

export function showMessage(type, message, handler) {
  return function(dispatch) {
    const id = createMessageId();

    const callback = event => {
      try {
        if (handler) handler(event);
      } finally {
        dispatch({
          type: actionTypes.HIDE_MESSAGE_BOX,
          payload: undefined
        });
      }
    };

    dispatch({
      type: actionTypes.SHOW_MESSAGE_BOX,
      payload: {
        id,
        type,
        message,
        actionHandler: callback
      }
    });
  };
}

//The action for notification centor.
function newNotify(id, type, message, callback) {
  guard.argumentNotEmpty(id, "id");
  guard.argumentNotEmpty(type, "type");
  guard.argumentNotEmpty(message, "message");
  guard.argumentIsFunc(callback, "callback");

  if (!id) id = createMessageId();
  return { id, type, message, closeNotification: callback };
}

export function notify(type, message) {
  return function(dispatch) {
    const id = createMessageId();

    const callback = () => {
      dispatch({
        type: actionTypes.HIDE_NOTIFICATION,
        payload: { id }
      });
    };

    dispatch({
      type: actionTypes.SHOW_NOTIFICATION,
      payload: newNotify(id, type, message, callback)
    });
  };
}
