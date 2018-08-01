import { makeActionCreator } from 'redux-toolbelt';
//import { makeThunkAsyncActionCreator } from 'redux-toolbelt-thunk';
import moment from 'moment';
import { NotificationStatus } from '../../components/Notification';
import { newGuid } from '../../commons/commonFuncs';

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
export const addOrUpdateNotifications = makeActionCreator(
  'NOTIFICATION_ADD_UPDATE'
);

/**
 * Delete the Notitications
 *
 * @export deleteNotifications
 * @param {Array of NotificationItemPropTypes} items
 * @returns
 */
export const deleteNotifications = makeActionCreator('NOTIFICATION_DELETE');

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
  return addOrUpdateNotifications(
    newNotification(type, message, title, group, onClick)
  );
}
