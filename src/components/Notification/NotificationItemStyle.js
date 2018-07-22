import {
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  grayColor
} from "../../assets/jss/material-dashboard-react";
import { closeButton, tooltip } from "./jss";

const marginRight = 0;

const NotificationItemStyle = theme => ({
  root: {
    padding: "6px",
    paddingRight: "15px"
  },
  ...tooltip(theme),
  title: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 550
  },
  message: {
    fontSize: theme.typography.pxToRem(12),
    textAlign: "justify"
  },
  ...closeButton,
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
