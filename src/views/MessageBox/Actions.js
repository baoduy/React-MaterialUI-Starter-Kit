import * as actionTypes from "./ActionTypes";
import moment from "moment";
import { NotificationStatus } from "../../components/Notification";

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

//The action for notification center.
function newNotify(type, message, title, group, callback, onClick) {
  // guard.argumentNotEmpty(type, "type");
  // guard.argumentNotEmpty(message, "message");
  // guard.argumentIsFunc(callback, "callback");

  // if (title) guard.argumentIsString(title, "title");
  // if (group) guard.argumentIsString(group, "group");

  const id = createMessageId();
  const createdOn = moment();

  return {
    id,
    type,
    message,
    title,
    group,
    createdOn,
    onClose: callback,
    onClick,
    status: NotificationStatus.NEW
  };
}

export function notify(type, message, title, group, onClick) {
  if (typeof title === "function" && !onClick) {
    onClick = title;
    title = "";
  }

  if (typeof group === "function" && !onClick) {
    onClick = group;
    group = "";
  }

  return function(dispatch) {
    const callback = item => {
      dispatch({
        type: actionTypes.HIDE_NOTIFICATION,
        payload: item
      });
    };

    dispatch({
      type: actionTypes.SHOW_NOTIFICATION,
      payload: newNotify(type, message, title, group, callback, onClick)
    });
  };
}
