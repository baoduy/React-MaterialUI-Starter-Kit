import * as actionTypes from "./ActionTypes";

const createMessageId = () => new Date().getTime();

export function showMessage(type, message, handler) {
    return function (dispatch) {
        const id = createMessageId();

        const callback = event => {
            try {
                if (handler) handler(event);
            } finally {
                dispatch({
                    type: actionTypes.HIDE_MESSAGE_BOX,
                    payload: {
                        id,
                        type
                    }
                });
            }
        };

        dispatch({
            type: actionTypes.SHOW_MESSAGE_BOX,
            payload: {
                id,
                type,
                message,
                handler: callback
            }
        });
    };
}

export function notify(type, message) {
    return function (dispatch) {
        const id = createMessageId();

        const callback = () => {
            dispatch({
                type: actionTypes.HIDE_NOTIFICATION,
                payload: {
                    id,
                    type
                }
            });
        };

        dispatch({
            type: actionTypes.SHOW_NOTIFICATION,
            payload: {
                id,
                type,
                message,
                closeNotification: callback
            }
        });
    };
}