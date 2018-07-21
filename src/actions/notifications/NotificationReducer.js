import Actions from "./NotificationActionTypes";
import { NotificationStatus } from "../../components/Notification";
import linq from "linq";

export default function(state = [], action) {
  switch (action.type) {
    case Actions.NOTIFICATION_NEW:
      return [...state, ...action.payload];
    case Actions.NOTIFICATION_UPDATE_STATUS: {
      const query = linq.from(action.payload);

      const deleteItems = query
        .where(i => i.status === NotificationStatus.DELETED)
        .select(i => i.id)
        .toArray();

      const otherStatus = query
        .where(i => i.status !== NotificationStatus.DELETED)
        .toArray();

      return linq
        .from(state)
        .where(i => deleteItems.indexOf(i.id) < 0)
        .select(i => {
          const found = otherStatus.find(n => n.id === i.id);
          return found ? { ...i, status: found.status } : i;
        })
        .toArray();
    }
  }

  return state;
}
