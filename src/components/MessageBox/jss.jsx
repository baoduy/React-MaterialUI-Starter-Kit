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
  paddingLeft: "25px",
  paddingRight: "25px",
  color: "white",
  fontWeight: "600"
};

const MessageBoxStyle = {
  dialog: {
    minWidth: "40%",
    maxWidth: "65%"
  },
  dialogContent: { padding: "1px !important", margin: "1px !important" },
  content: {
    fontSize: "20px",
    display: "table"
  },
  button: {
    minWidth: "80px"
  },
  confirm: {
    backgroundColor: primaryColor,
    ...titleType
  },
  confirmIcon: {
    color: primaryColor
  },
  info: {
    backgroundColor: infoColor,
    ...titleType
  },
  infoIcon: {
    color: infoColor
  },
  success: {
    backgroundColor: successColor,
    ...titleType
  },
  successIcon: {
    color: successColor
  },
  warning: {
    backgroundColor: warningColor,
    ...titleType
  },
  warningIcon: {
    color: warningColor
  },
  danger: {
    backgroundColor: dangerColor,
    ...titleType
  },
  dangerIcon: {
    color: dangerColor
  }
};

export default MessageBoxStyle;
