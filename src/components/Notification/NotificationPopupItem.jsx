import React from "react";
import PropTypes from "prop-types";
import Snackbar from "../Snackbar/Snackbar";
import NotificationType from "./NotificationType";
import NotificationPopupItemStyle from "./NotificationPopupItemStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import * as helper from "./helper";

@withStyles(NotificationPopupItemStyle)
export default class NotificationPopupItem extends React.Component {
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

  //Handling the internal closing event and call onClose with id
  onClosing = () => {
    const { onClose, id } = this.props;
    onClose({ id });
    this._timeout = undefined;
  };

  render() {
    const {
      id,
      type,
      icon,
      displayIn,
      autoClose,
      title,
      message,
      classes,
      ...others
    } = this.props;

    return (
      <Snackbar
        {...others}
        key={id}
        onClose={this.onClosing}
        color={helper.getColor(type)}
        close
        icon={icon === true ? helper.getIcon(type) : icon}
        message={
          <React.Fragment>
            {title && <div className={classes.title}>{title}</div>}
            {message}
          </React.Fragment>
        }
      />
    );
  }
}

NotificationPopupItem.defaultProps = {
  place: "tr", //Top right
  displayIn: 4000,
  autoClose: true,
  type: NotificationType.INFO,
  open: true,
  icon: true
};

NotificationPopupItem.propTypes = {
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
  //the title of notification
  title: PropTypes.string,
  //Close handler.
  onClose: PropTypes.func,
  //click event handler.
  onClick: PropTypes.func,
  //The icon of notification. set to false to hide the default icon.
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
};
