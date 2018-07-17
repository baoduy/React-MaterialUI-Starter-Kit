import React from "react";
import PropTypes from "prop-types";
import NotificationType from "./NotificationType";
import moment from "moment";
import * as helper from "./helper";

function defaultFormatDate(date) {
  //convert Date to moment
  if (date instanceof Date) date = moment(date);
  //Check if it is nothing then just return out
  if (!date || !moment.isMoment(date)) return date;

  //If less than 1 minutes => now
  //If today then => Today hh:mm
  //If Yesterday then => yesterday hh:mm
  //else => dd MM yy hh:mm
  return date.format();
}

export default function NotificationItem() {
  return <React.Fragment />;
}

NotificationItem.defaultProps = {
  type: NotificationType.INFO,
  icon: true,
  formatDate: defaultFormatDate
};

NotificationItem.propTypes = {
  //The Tye of notification
  type: PropTypes.oneOf([
    NotificationType.CONFIRM,
    NotificationType.DANGER,
    NotificationType.INFO,
    NotificationType.SUCCESS,
    NotificationType.WARNING
  ]),
  //The message of notification
  message: PropTypes.string.isRequired,
  //the title of notification
  title: PropTypes.string,
  //This should be a moment object
  createdOn: PropTypes.object,
  //The function to format moment object to string
  formatDate: PropTypes.func,
  //Close handler.
  onClose: PropTypes.func,
  //click event handler.
  onClick: PropTypes.func,
  //The icon of notification. set to false to hide the default icon.
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
};
