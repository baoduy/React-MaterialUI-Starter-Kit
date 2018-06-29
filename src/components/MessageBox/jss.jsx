import {
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "../../assets/jss/material-dashboard-react.jsx";

const titleType = {
  paddingTop: "12px",
  paddingBottom: "12px",
  color: "white",
  fontWeight: "550"
};

const MessageBoxStyle = {
  dialog: {
    minWidth: "30%"
  },
  content: {
    marginTop: "10px"
  },
  confirm: {
    backgroundColor: primaryColor,
    ...titleType
  },
  info: {
    backgroundColor: infoColor,
    ...titleType
  },
  success: {
    backgroundColor: successColor,
    ...titleType
  },
  warning: {
    backgroundColor: warningColor,
    ...titleType
  },
  danger: {
    backgroundColor: dangerColor,
    ...titleType
  }
};

export default MessageBoxStyle;
