import React from "react";
import PropTypes from "prop-types";
import NotificationType from "./NotificationType";
import NotificationItemStyle from "./NotificationItemStyle";
import moment from "moment";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Tooltip
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import * as helper from "./helper";

function defaultFormatDate(date) {
  //convert Date to moment
  if (date instanceof Date) date = moment(date);
  //Check if it is nothing then just return out
  if (!date || !moment.isMoment(date)) return date;
  const now = moment();

  //Less than 1 minutes => now
  if (date.diff(now, "minutes") <= 1) return "now";

  //Less than 5hours => hours ago
  if (date.diff(now, "hours") <= 5) return date.format("h") + "s ago";

  //If today then => Today hh:mm
  if (date.diff(now, "days") <= 1) return "today " + date.format("HH:mm");

  //If Yesterday then => yesterday hh:mm
  if (date.diff(now, "days") <= 2) return "yesterday " + date.format("HH:mm");

  //else => dd MM yy hh:mm
  return date.format("dd.MM.yy HH:mm");
}

function NotificationItem({
  title,
  message,
  type,
  classes,
  onClose,
  onClick,
  ...others
}) {
  const Icon = helper.getIcon(type);
  return (
    <ListItem
      className={classes.root}
      onClick={onClick}
      button={onClick !== undefined}
    >
      <ListItemIcon className={classes[type]}>
        <Icon />
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{ className: classes.title }}
        primary={title}
        secondaryTypographyProps={{ className: classes.message }}
        secondary={message}
      />
      <ListItemSecondaryAction>
        <Tooltip
          classes={{ tooltip: classes.tooltip }}
          title={"close"}
          placement="top"
        >
          <IconButton className={classes.iconButton} onClick={onClose}>
            <CloseIcon className={classes.close} />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
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

export default withStyles(NotificationItemStyle)(NotificationItem);
