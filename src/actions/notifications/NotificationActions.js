import moment from 'moment';
import { NotificationStatus } from '../../components/Notification';
import { newGuid } from '../../commons/commonFuncs';
import Actions from './NotificationActionTypes';
import * as checks from '../../commons/checks';
/**
 * Create new notification item
 *
 * @export changeStatus
 * @param {NotificationType} type [Default is INFO] the type of the notification
 * @param {string} message the notification message
 * @param {string?} title the notification message
 * @param {string?} group group notification by group name.
 * @param {func?} onClick the click action of notification.
 * @returns {NotificationItemPropTypes}
 */
export function newNotification(type, message, title, group, onClick) {
  if (typeof title === 'function' && !onClick) {
    onClick = title;
    title = '';
  }

  if (typeof group === 'function' && !onClick) {
    onClick = group;
    group = '';
  }

  return {
    id: newGuid(),
    type,
    message,
    title,
    group,
    createdOn: moment(),
    onClick,
    status: NotificationStatus.NEW
  };
}

/**
 * Add or Update Notifications to Redux Store.
 *
 * @export addOrUpdateNotification
 * @param {Array of NotificationItemPropTypes} items
 * @returns
 */
export function addOrUpdateNotification(items) {
  return dispatch => {
    //TODO: Call Resful API to update status at Server side.

    //Then update back the new status to Store.
    dispatch({
      type: Actions.NOTIFICATION_ADD_UPDATE,
      payload: checks.IsArray(items) ? items : [items]
    });
  };
}
/**
 * Delete the Notitications
 *
 * @export deleteNotifications
 * @param {Array of NotificationItemPropTypes} items
 * @returns
 */
export function deleteNotifications(items) {
  return dispatch => {
    //TODO: Call Api to delete at Server side.

    //Then update back the new status to Store.
    dispatch({
      type: Actions.NOTIFICATION_DELETE,
      payload: items
    });
  };
}

/**
 * Create notification Item by calling newNotification and then call addOrUpdateNotification to add to Redux Store.
 *
 * @export notify
 * @param {NotificationType} type
 * @param {string} message
 * @param {string?} title
 * @param {string?} group
 * @param {func?} onClick
 * @returns
 */
export function notify(type, message, title, group, onClick) {
  return addOrUpdateNotification(
    newNotification(type, message, title, group, onClick)
  );
}
