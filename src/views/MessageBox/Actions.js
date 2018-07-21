import * as actionTypes from "./ActionTypes";
import { newGuid } from "../../commons/commonFuncs";

export function showMessage(type, message, handler) {
  return function(dispatch) {
    const id = newGuid();

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
