import * as actionTypes from "./ActionTypes";

function createMessageId() {
    return new Date().getTime();
}
export function showMessage(type, message, handler) {
    return function (dispatch) {
        const callback = event => {
            try {
                if (handler) handler(event);
            } finally {
                dispatch({
                    type: actionTypes.HIDE_MESSAGE_BOX
                });
            }
        };

        dispatch({
            type: actionTypes.SHOW_MESSAGE_BOX,
            payload: {
                id: createMessageId(),
                type,
                message,
                open: true,
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
                    message: ""
                }
            });
        };

        dispatch({
            type: actionTypes.SHOW_NOTIFICATION,
            payload: {
                id,
                type,
                message,
                open: true,
                closeNotification: callback
            }
        });
    };
}