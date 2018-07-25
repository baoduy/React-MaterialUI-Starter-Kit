import {
  primaryColor,
  infoColor,
  warningColor
} from "../../assets/jss/material-dashboard-react";

import { closeButton, tooltip } from "./jss";

const NotificationGroupStyle = theme => ({
  root: {
    width: "auto",
    transition: "all 300ms linear",
    margin: "5px 5px 0",
    borderRadius: "3px",
    position: "relative",
    padding: "10px 10px",
    borderBottom: "1px solid rgba(180, 180, 180, 0.3)"
  },
  title: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 600,
    color: "white",
    textTransform: "uppercase"
  },
  ...closeButton,
  ...tooltip(theme),
  avatar: {
    width: "24px",
    height: "24px",
    fontSize: theme.typography.pxToRem(13),
    backgroundColor: "transparent",
    border: "1px solid rgba(180, 180, 180, 0.3)"
  },
  avatarHighlight: {
    backgroundColor: primaryColor
  },
  avatarNew: {
    backgroundColor: warningColor
  },
  summary: {
    paddingRight: 0
  },
  details: {
    margin: 0,
    padding: 0,
    width: "100%"
  },
  blue: {
    border: 0,
    backgroundColor: infoColor,
    boxShadow:
      "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)",
    "&:hover": {
      backgroundColor: infoColor,
      boxShadow:
        "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
    }
  }
});

export default NotificationGroupStyle;
