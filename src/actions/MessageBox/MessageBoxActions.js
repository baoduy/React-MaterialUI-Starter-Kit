import { makeActionCreator } from 'redux-toolbelt';
//import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk';
import dayjs from 'dayjs';
import { NotificationStatus } from '../../components/Notification';
import { newGuid } from '../../commons/commonFuncs';

//Moved the type of all actions on top so it will be eaiser if need refectoring the names.
export const TYPES = {
  Shown: '@MessageBox/Shown',
  Hided: '@MessageBox/Hided'
};

export function showMessage(type, message, handler) {
  return dispatch => {
    const callback = event => {
      try {
        if (handler) handler(event);
      } finally {
        dispatch({
          type: TYPES.Hided
        });
      }
    };

    dispatch({
      type: TYPES.Shown,
      payload: {
        id: newGuid(),
        type,
        message,
        actionHandler: callback
      }
    });
  };
}
