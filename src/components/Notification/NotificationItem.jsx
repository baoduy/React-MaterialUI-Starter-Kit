import React from "react";
import PropTypes from "prop-types";
import Snackbar from "../Snackbar/Snackbar";
import NotificationType from "./NotificationType";
import NotificationItemStyle from "./jss";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import * as helper from "./helper";

@withStyles(NotificationItemStyle)
export default class NotificationItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._timeout = undefined;
  }

  setCallbackTimeout = props => {
    const { onClose, open, autoClose, displayIn } = props;

    if (!onClose || open !== true || autoClose !== true || displayIn <= 0)
      return;

    if (this._timeout) return;
    this._timeout = setTimeout(this.onClosing, displayIn);
  };

  componentDidMount() {
    this.setCallbackTimeout(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setCallbackTimeout(nextProps);
  }

  //Handling the internail closing event and call onClose with id
  onClosing = () => {
    const { onClose, id } = this.props;
    onClose({ id });
    this._timeout = undefined;
  };

  render() {
    const {
      id,
      type,
      message,
      icon,
      classes,
      displayIn,
      autoClose,
      onClick,
      ...others
    } = this.props;

    const color = helper.getColor(type);

    let finalIcon = icon;
    if (icon === true) finalIcon = helper.getIcon(type);

    return (
      <Snackbar
        {...others}
        key={id}
        onClose={this.onClosing}
        color={color}
        close={true}
        message={
          <Button onClick={onClick} className={classes.message}>
            {finalIcon}
            {" " + message}
          </Button>
        }
      />
    );
  }
}

NotificationItem.defaultProps = {
  place: "tr", //Top right
  displayIn: 4000,
  autoClose: true,
  type: NotificationType.INFO,
  open: true,
  icon: true
};

NotificationItem.propTypes = {
  //The Tye of notification
  type: PropTypes.oneOf([
    NotificationType.CONFIRM,
    NotificationType.DANGER,
    NotificationType.INFO,
    NotificationType.SUCCESS,
    NotificationType.WARNING
  ]),
  //The number of second will be displayed.
  displayIn: PropTypes.number,
  //Enable timeout to call onClose after displayIn second automatically.
  autoClose: PropTypes.bool,
  //The message of notification
  message: PropTypes.string.isRequired,
  //Close handler.
  onClose: PropTypes.func,
  //click event handler.
  onClick: PropTypes.func,
  //The icon of notification. set to false to hide the default icon.
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
};
