import NotificationType from './NotificationType';
import confirmIcon from '@material-ui/icons/Help';
import errorIcon from '@material-ui/icons/Error';
import infoIcon from '@material-ui/icons/Info';
import warningIcon from '@material-ui/icons/Warning';
import successIcon from '@material-ui/icons/CheckCircle';
import linq from 'linq';
import NotificationStatus from './NotificationStatus';
import * as guard from '../../commons/guard';

export function getColor(type) {
  switch (type) {
    case NotificationType.CONFIRM:
      return 'primary';
    case NotificationType.DANGER:
      return 'danger';
    case NotificationType.WARNING:
      return 'warning';
    case NotificationType.SUCCESS:
      return 'success';
    case NotificationType.INFO:
    default:
      return 'info';
  }
}

export function getIcon(type) {
  switch (type) {
    case NotificationType.CONFIRM:
      return confirmIcon;
    case NotificationType.DANGER:
      return errorIcon;
    case NotificationType.WARNING:
      return warningIcon;
    case NotificationType.SUCCESS:
      return successIcon;
    case NotificationType.INFO:
    default:
      return infoIcon;
  }
}

/**
 * Get Unread Notification Items
 *
 * @export getUnreadItems
 * @param {NotificationItemPropTypes} items
 * @returns items which status is in [NEW,NOTIFIED]
 */
export function getUnreadItems(items) {
  if (!items) return items;
  guard.argumentIsArray(items, 'Notification Items');
  if (items.length <= 0) return items;

  return linq
    .from(items)
    .where(
      i =>
        i.status === NotificationStatus.NEW ||
        i.status === NotificationStatus.NOTIFIED
    )
    .toArray();
}
/**
 * Get Notification Items for Popup component
 *
 * @export getItemsForPopup
 * @param {NotificationItemPropTypes} items
 * @returns items which status is in [NEW,NOTIFIED], orderByDescending by i.createdOn and mark open based on NEW status
 */
export function getItemsForPopup(items) {
  const unreadItems = getUnreadItems(items);
  if (unreadItems.length <= 0) return unreadItems;

  return (
    linq
      .from(unreadItems)
      .orderByDescending(i => i.createdOn)
      //Tell the popup that only show the NEW status once.
      .select(i => ({ ...i, open: i.status === NotificationStatus.NEW }))
      .toArray()
  );
}
/**
 * Group notification by group
 *
 * @export getGroupItems
 * @param {NotificationItemPropTypes} items
 * @returns groups orderByDescending by i.createdOn and grouped by i.group
 */
export function getGroupItems(items) {
  if (!items) return items;
  guard.argumentIsArray(items, 'Notification Items');
  if (items.length <= 0) return items;

  return linq
    .from(items)
    .groupBy(i => i.group || '')
    .select(g => ({
      title: g.key(),
      items: g.orderByDescending(i => i.createdOn.valueOf()).toArray()
    }))
    .orderBy(i => i.title)
    .toArray();
}
