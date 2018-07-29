import Actions from './NotificationActionTypes';
import linq from 'linq';
import { Merge } from '../../commons/commonFuncs';

export default function(state = [], action) {
  switch (action.type) {
    //DELETE
    case Actions.NOTIFICATION_DELETE: {
      const deleteItems = action.payload;
      return linq
        .from(state)
        .where(i => !deleteItems.find(n => n.id === i.id))
        .toArray();
    }
    //ADD ro UPDATE
    case Actions.NOTIFICATION_ADD_UPDATE: {
      return Merge(state, action.payload);
    }
  }

  return state;
}
