import Actions from "./NotificationActionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case Actions.NOTIFICATION_NEW:
      return [...state, ...action.payload];
    case Actions.NOTIFICATION_UPDATE_STATUS: {
      const newStatus = action.payload;
      return state.map(i => {
        const found = newStatus.find(n => n.id === i.id);
        return found ? { ...i, status: found.status } : i;
      });
    }
  }

  return state;
}
