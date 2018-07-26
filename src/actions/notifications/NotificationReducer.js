import Actions from "./NotificationActionTypes";
import { NotificationStatus } from "../../components/Notification";
import linq from "linq";

export default function(state = [], action) {
  switch (action.type) {
    case Actions.NOTIFICATION_NEW:
      return [...state, ...action.payload];
    case Actions.NOTIFICATION_DELETE: {
      const deleteItems = action.payload;
      return linq
        .from(state)
        .where(i => !deleteItems.find(n => n.id === i.id))
        .toArray();
    }
    case Actions.NOTIFICATION_UPDATE_STATUS: {
      const changes = action.payload;

      return linq
        .from(state)
        .select(i => {
          const found = changes.find(n => n.id === i.id);
          return found ? { ...i, status: found.status } : i;
        })
        .toArray();
    }
  }

  return state;
}
