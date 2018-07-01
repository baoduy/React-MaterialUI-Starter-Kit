import React from "react";
import PropTypes from "prop-types";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import NotificationType from "./NotificationType";
import NotificationItemStyle from "./jss";
import { withStyles } from "@material-ui/core/styles";
import * as helper from "./helper";

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  setTimeout = props => {
    const { closeNotification, open, autoClose, displayIn } = props;
    if (open === true && autoClose === true && displayIn > 0) {
      this.timeout = setTimeout(closeNotification, displayIn);
    }
  };

  componentDidMount() {
    this.setTimeout(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setTimeout(nextProps);
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

    let finalIcon;
    if (icon === true || icon === undefined) finalIcon = helper.getIcon(type);
    else if (icon) finalIcon = icon;

    return (
      <Snackbar
        {...other}
        color={helper.getColor(type)}
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
  autoClose: true
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  displayIn: PropTypes.number,
  autoClose: PropTypes.bool,
  message: PropTypes.string.isRequired,
  closeNotification: PropTypes.func.isRequired
};

export default withStyles(NotificationItemStyle)(NotificationItem);
