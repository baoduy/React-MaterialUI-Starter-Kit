import React from "react";
import PropTypes from "prop-types";
import MomentPropTypes from "react-moment-proptypes";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import NotificationPanelStyle from "./NotificationPanelStyle";
import { withStyles, List, ListSubheader } from "@material-ui/core";
import NotificationGroup from "./NotificationGroup";
import linq from "linq";

function NotificationPanel({
  position,
  open,
  onPanelClose,
  onPanelOpen,
  onItemClose,
  classes,
  items,
  ...others
}) {
  const groups = linq
    .from(items)
    .groupBy(i => i.group)
    .select(g => ({ title: g.key(), items: g.toArray() }))
    .toArray();

  return (
    <SwipeableDrawer
      anchor={position}
      open={open}
      onClose={onPanelClose}
      onOpen={onPanelOpen}
    >
      <List className={classes.list}>
        {groups.map((g, i) => (
          <NotificationGroup key={i} {...g} onClose={onItemClose} />
        ))}
      </List>
    </SwipeableDrawer>
  );
}

NotificationPanel.defaultProps = {
  position: "right",
  open: false
};

NotificationPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      createdOn: MomentPropTypes.momentObj,
      message: PropTypes.string,
      group: PropTypes.string
    })
  ).isRequired,
  position: PropTypes.oneOf(["left", "top", "right", "bottom"]),
  open: PropTypes.bool,
  onPanelClose: PropTypes.func.isRequired,
  onPanelOpen: PropTypes.func.isRequired,
  onItemClose: PropTypes.func.isRequired
};

export default withStyles(NotificationPanelStyle)(NotificationPanel);
