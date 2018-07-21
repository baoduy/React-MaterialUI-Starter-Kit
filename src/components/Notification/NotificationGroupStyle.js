import { primaryColor } from "../../assets/jss/material-dashboard-react";
import { closeButton, tooltip } from "./jss";

const NotificationGroupStyle = theme => ({
  root: {
    width: "100%",
    padding: "6px"
  },
  title: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 600
  },
  ...closeButton,
  tooltip: {
    ...tooltip(theme)
  },
  avatar: {
    width: "24px",
    height: "24px",
    fontSize: theme.typography.pxToRem(13)
  },
  avatarOpen: {
    backgroundColor: primaryColor
  },
  summary: {
    paddingRight: 0
  },
  details: {
    margin: 0,
    padding: 0,
    width: "100%"
  }
});

export default NotificationGroupStyle;
