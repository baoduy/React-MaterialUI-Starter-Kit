import {
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "../../assets/jss/material-dashboard-react";

const marginRight = 0;

const NotificationItemStyle = theme => ({
  root: { padding: "6px" },
  title: { fontSize: theme.typography.pxToRem(14) },
  message: { fontSize: theme.typography.pxToRem(12) },
  iconButton: {
    width: "24px",
    height: "24px"
  },
  close: {
    width: "11px",
    height: "11px"
  },
  success: {
    color: successColor,
    marginRight
  },
  danger: {
    color: dangerColor,
    marginRight
  },
  warning: {
    color: warningColor,
    marginRight
  },
  info: {
    color: infoColor,
    marginRight
  },
  confirm: {
    color: primaryColor,
    marginRight
  }
});

export default NotificationItemStyle;
