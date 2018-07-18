import {
  primaryCardHeader,
  infoCardHeader,
  successCardHeader,
  warningCardHeader,
  dangerCardHeader
} from "../../assets/jss/material-dashboard-react";

const NotificationItemStyle = {
  success: {
    ...successCardHeader
  },
  danger: {
    ...dangerCardHeader
  },
  warning: {
    ...warningCardHeader
  },
  info: {
    ...infoCardHeader
  },
  confirm: {
    ...primaryCardHeader
  }
};

export default NotificationItemStyle;
