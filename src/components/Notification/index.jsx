import React from "react";
import PropTypes from "prop-types";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import NotificationType from "./NotificationType";
import * as helper from "./helper";

class Notification extends React.Component {
  constructor(props) {
    super(props);
  }

  setTimeout = props => {
    const { closeNotification, open } = props;
    let displayIn = props.displayIn;

    if (!displayIn || displayIn <= 0) displayIn = 6000;
    if (open) this.Timeout = setTimeout(closeNotification, displayIn);
  };
  componentDidMount() {
    this.setTimeout(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setTimeout(nextProps);
  }

  componentWillUnmount() {
    clearTimeout(this.Timeout);
  }

  render() {
    const {
      type = NotificationType.INFO,
      icon,
      place = "tr", //Top right
      close,
      ...other
    } = this.props;

    let finalIcon = undefined;
    if (icon === true || icon === undefined) finalIcon = helper.getIcon(type);
    else if (icon) finalIcon = icon;

    return (
      <Snackbar
        {...other}
        place={place}
        color={helper.getColor(type)}
        close={close || true}
        //icon={finalIcon}
      />
    );
  }
}

Notification.propTypes = {
  type: PropTypes.string,
  displayIn: PropTypes.number,
  message: PropTypes.string.isRequired,
  closeNotification: PropTypes.func.isRequired
};

export default Notification;
