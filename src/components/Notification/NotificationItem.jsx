import React from "react";
import PropTypes from "prop-types";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import NotificationType from "./NotificationType";
import NotificationItemStyle from "./jss";
import { withStyles } from "@material-ui/core/styles";
import * as helper from "./helper";

@withStyles(NotificationItemStyle)
export default class NotificationItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  setCallbackTimeout = props => {
    const { closeNotification, open, autoClose, displayIn } = props;

    if (
      !closeNotification ||
      open !== true ||
      autoClose !== true ||
      displayIn <= 0
    )
      return;

    setTimeout(closeNotification, displayIn);
  };

  componentDidMount() {
    this.setCallbackTimeout(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setCallbackTimeout(nextProps);
  }

  render() {
    const {
      id,
      type = NotificationType.INFO,
      message,
      icon,
      close,
      classes,
      ...other
    } = this.props;

    const color = helper.getColor(type);

    let finalIcon = icon;
    if (icon === true) finalIcon = helper.getIcon(type);

    return (
      <Snackbar
        {...other}
        color={color}
        close={close || true}
        message={
          <span id={id} className={classes.message}>
            {finalIcon}
            {" " + message}
          </span>
        }
      />
    );
  }
}

NotificationItem.defaultProps = {
  place: "tr", //Top right
  displayIn: 6000,
  autoClose: true,
  open: true,
  icon: true
};

NotificationItem.propTypes = {
  type: PropTypes.oneOf([
    NotificationType.CONFIRM,
    NotificationType.DANGER,
    NotificationType.INFO,
    NotificationType.SUCCESS,
    NotificationType.WARNING
  ]),
  displayIn: PropTypes.number,
  autoClose: PropTypes.bool,
  message: PropTypes.string.isRequired,
  closeNotification: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};
