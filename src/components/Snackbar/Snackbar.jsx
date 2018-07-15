import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Snack from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import snackbarContentStyle from "./snackbarContentStyle";

function Snackbar({
  classes,
  message,
  color,
  close,
  place,
  open,
  onClose,
  ...others
}) {
  let action = [];
  const messageClasses = classNames({
    [classes.iconMessage]: others.icon !== undefined
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={onClose}
      >
        <Close className={classes.close} />
      </IconButton>
    ];
  }
  return (
    <Snack
      anchorOrigin={{
        vertical: place.indexOf("t") === -1 ? "bottom" : "top",
        horizontal:
          place.indexOf("l") !== -1
            ? "left"
            : place.indexOf("c") !== -1
              ? "center"
              : "right"
      }}
      open={open}
      message={
        <div>
          {others.icon !== undefined ? (
            <others.icon className={classes.icon} />
          ) : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          root: classes.root + " " + classes[color],
          message: classes.message
        }
      }}
    />
  );
}

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  //The color of the Snackbar
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  //Show/Hide close button
  close: PropTypes.bool,
  icon: PropTypes.func,
  //The position the Snackbar:top-left, top-right, top-center, buttom-right, buttom-left,buttom-center.
  place: PropTypes.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
  open: PropTypes.bool,
  onClose: PropTypes.func
};

export default withStyles(snackbarContentStyle)(Snackbar);
