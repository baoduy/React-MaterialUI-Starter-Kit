import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont
} from "../../assets/jss/material-dashboard-react";

const width = drawerWidth + 30;

const NotificationPanelStyle = () => ({
  drawerPaper: {
    position: "fixed",
    zIndex: "1",
    top: "0",
    ...boxShadow,
    transform: `translate3d(${width}px, 0, 0)`,
    ...transition,
    width: width
  },
  background: {
    position: "absolute",
    zIndex: "0",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: "''",
      display: "block",
      background: "#000",
      opacity: ".8"
    }
  },
  containWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    zIndex: "10000",
    overflowScrolling: "touch",
    display: "block",
    top: "0",
    left: "0"
  },
  logo: {
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(180, 180, 180, 0.3)"
    }
  },
  logoText: {
    ...defaultFont,
    textTransform: "uppercase",
    padding: "5px 0 0 40px",
    display: "block",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: "#FFFFFF"
    }
  },
  icon: {
    width: "35px",
    top: "22px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0",
    color: "#00acc1"
  }
});

export default NotificationPanelStyle;
