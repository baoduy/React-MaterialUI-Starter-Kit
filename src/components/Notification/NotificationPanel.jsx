import React from "react";
import PropTypes from "prop-types";
import MomentPropTypes from "react-moment-proptypes";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import NotificationPanelStyle from "./NotificationPanelStyle";
import { withStyles } from "@material-ui/core";

function NotificationPanel({
  position,
  open,
  onClose,
  onOpen,
  classes,
  ...others
}) {
  return (
    <SwipeableDrawer
      anchor={position}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div className={classes.contain}>notification here</div>
    </SwipeableDrawer>
  );
}

NotificationPanel.defaultProps = {
  position: "right",
  open: false
};

NotificationPanel.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      createdOn: MomentPropTypes.momentObj,
      message: PropTypes.string,
      group: PropTypes.string
    })
  ).isRequired,
  position: PropTypes.oneOf(["left", "top", "right", "bottom"]),
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func
};

export default withStyles(NotificationPanelStyle)(NotificationPanel);
