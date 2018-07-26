import moment from "moment";
import { NotificationStatus } from "../../components/Notification";
import { newGuid } from "../../commons/commonFuncs";
import Actions from "./NotificationActionTypes";

/**
 * Load notification from server
 *
 * @export loadNotifications
 * @returns
 */
export function loadNotifications() {
  return dispatch => {
    //TODO: call Web Api to load the notifications from server.

    dispatch({
      type: Actions.NOTIFICATION_NEW,
      payload: []
    });
  };
}
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
 * Update the status of existing notifications
 *
 * @export changeStatus
 * @param {Array of NotificationItemPropTypes} items
 * @returns
 */
export function changeNotificationStatus(items) {
  return dispatch => {
    //TODO: Call Api to update the status at Server side.

    //Then update back the new status to Store.
    dispatch({
      type: Actions.NOTIFICATION_UPDATE_STATUS,
      payload: items
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
 * Notify the message.
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
  if (typeof title === "function" && !onClick) {
    onClick = title;
    title = "";
  }

  if (typeof group === "function" && !onClick) {
    onClick = group;
    group = "";
  }

  return dispatch => {
    dispatch({
      type: Actions.NOTIFICATION_NEW,
      payload: [newNotification(type, message, title, group, onClick)]
    });
  };
}
