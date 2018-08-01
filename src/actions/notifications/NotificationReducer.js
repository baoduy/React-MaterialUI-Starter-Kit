import { makeReducer } from 'redux-toolbelt';
import { isArray } from 'lodash';
import {
  addOrUpdateNotifications,
  deleteNotifications
} from './NotificationActions';
import linq from 'linq';
import { Merge } from '../../commons/commonFuncs';

export default makeReducer(
  {
    [addOrUpdateNotifications]: (state, { payload }) => {
      return Merge(state, isArray(payload) ? payload : [payload]);
    },
    [deleteNotifications]: (state, { payload }) => {
      const deleteItems = isArray(payload) ? payload : [payload];

      return linq
        .from(state)
        .where(i => !deleteItems.find(n => n.id === i.id))
        .toArray();
    }
  },
  { defaultState: [] }
);
