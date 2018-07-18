import * as guard from "../../commons/guard";
import { newGuid } from "../../commons/commonFuncs";
import NotificationType from "./NotificationType";
import confirmIcon from "@material-ui/icons/Help";
import errorIcon from "@material-ui/icons/Error";
import infoIcon from "@material-ui/icons/Info";
import warningIcon from "@material-ui/icons/Warning";
import successIcon from "@material-ui/icons/CheckCircle";

export function getColor(type) {
  switch (type) {
    case NotificationType.CONFIRM:
      return "primary";
    case NotificationType.DANGER:
      return "danger";
    case NotificationType.WARNING:
      return "warning";
    case NotificationType.SUCCESS:
      return "success";
    case NotificationType.INFO:
    default:
      return "info";
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
 *
 *
 * @export create new Notification data
 * @param {*} type
 * @param {*} message
 * @param {*} onClick
 * @param {*} group
 * @returns
 */
export function newNotify(type, message, onClick, group) {
  guard.argumentIsStringAndNotEmpty(type, "type");
  guard.argumentIsStringAndNotEmpty(message, "message");

  if (onClick) guard.argumentIsFunc(onclick);
  if (group) guard.argumentIsString(group);

  const id = newGuid();
  return { id, type, message, onClick, group };
}
