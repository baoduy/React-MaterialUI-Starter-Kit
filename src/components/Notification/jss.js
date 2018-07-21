import {
  grayColor,
  primaryColor
} from "../../assets/jss/material-dashboard-react";

const closeButton = {
  iconButton: {
    width: "24px",
    height: "24px"
  },
  close: {
    width: "11px",
    height: "11px"
  }
};

const tooltip = theme => ({
  background: theme.palette.common.white,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[1],
  fontSize: 11
});

const NotificationCenterStyle = {
  icon: {
    color: grayColor
  },
  iconActive: {
    color: primaryColor
  }
};

export { closeButton, tooltip, NotificationCenterStyle };
export default NotificationCenterStyle;
