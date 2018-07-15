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
function newNotify(type, message, callback, onClick) {
  guard.argumentNotEmpty(type, "type");
  guard.argumentNotEmpty(message, "message");
  guard.argumentIsFunc(callback, "callback");

  const id = createMessageId();
  return { id, type, message, onClose: callback, onClick };
}

export function notify(type, message, onClick) {
  return function(dispatch) {
    const callback = item => {
      dispatch({
        type: actionTypes.HIDE_NOTIFICATION,
        payload: item
      });
    };

    dispatch({
      type: actionTypes.SHOW_NOTIFICATION,
      payload: newNotify(type, message, callback, onClick)
    });
  };
}
