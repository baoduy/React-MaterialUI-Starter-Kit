import PropTypes from "prop-types";
import MomentPropTypes from "react-moment-proptypes";
import NotificationType from "./NotificationType";
import NotificationStatus from "./NotificationStatus";

const NotificationItemPropTypes = {
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
  //Close handler.
  onClose: PropTypes.func,
  //click event handler.
  onClick: PropTypes.func,
  //The icon of notification. set to false to hide the default icon.
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  //Created date of Notification
  createdOn: MomentPropTypes.momentObj,
  //status of notification
  status: PropTypes.oneOf([
    NotificationStatus.NEW,
    NotificationStatus.DELETED,
    NotificationStatus.NOTIFIED,
    NotificationStatus.READ
  ])
};

export default NotificationItemPropTypes;
