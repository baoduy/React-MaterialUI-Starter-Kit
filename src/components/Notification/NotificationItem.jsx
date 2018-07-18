import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClearIcon from "@material-ui/icons/Clear";
import NotificationType from "./NotificationType";
import NotificationItemStyle from "./NotificationItemStyle";
import moment from "moment";
import * as helper from "./helper";
import { WithStyles } from "@material-ui/core";

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
  createdOn,
  message,
  formatDate,
  type,
  classes
}) {
  return (
    <Card>
      <CardHeader
        className={classes[type]}
        avatar={<Avatar aria-label="Recipe">{helper.getIcon(type)}</Avatar>}
        action={
          <IconButton>
            <ClearIcon />
          </IconButton>
        }
        title={title}
        subheader={formatDate(createdOn)}
      />
    </Card>
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

export default WithStyles(NotificationItemStyle)(NotificationItem);
