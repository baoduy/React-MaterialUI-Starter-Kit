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
import NotificationItemPropTypes from "./NotificationItemPropTypes";
import NotificationStatus from "./NotificationStatus";

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
  status,
  onClose,
  onClick
}) {
  const Icon = helper.getIcon(type);
  const color =
    status === NotificationStatus.NEW || status === NotificationStatus.NOTIFIED
      ? "primary"
      : "textSecondary";
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
        primaryTypographyProps={{
          className: classes.title,
          color: color
        }}
        primary={title}
        secondaryTypographyProps={{ className: classes.message, color: color }}
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
  ...NotificationItemPropTypes,
  //The function to format moment object to string
  formatDate: PropTypes.func
};

export default withStyles(NotificationItemStyle)(NotificationItem);
