import React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import NotificationPanelStyle from "./NotificationPanelStyle";
import { withStyles, List } from "@material-ui/core";
import NotificationGroup from "./NotificationGroup";
import NotificationItemPropTypes from "./NotificationItemPropTypes";
//helper
import { getGroupItems } from "./helper";

function defaultGroupComponent({ classes, onClose, items }) {
  return (
    <List className={classes.list}>
      {items.map((g, i) => (
        <NotificationGroup key={i} {...g} onClose={onClose} open={i === 0} />
      ))}
    </List>
  );
}
function NotificationPanel({
  position,
  open,
  onPanelClose,
  onPanelOpen,
  onItemClose,
  classes,
  items,
  GroupComponent,
  ...others
}) {
  const groups = getGroupItems(items);

  return (
    <SwipeableDrawer
      anchor={position}
      open={open}
      onClose={() => onPanelClose(items)}
      onOpen={onPanelOpen}
    >
      <GroupComponent
        {...others}
        classes={classes}
        items={groups}
        onClose={onItemClose}
      />
    </SwipeableDrawer>
  );
}

NotificationPanel.defaultProps = {
  GroupComponent: defaultGroupComponent,
  position: "right",
  open: false
};

NotificationPanel.propTypes = {
  GroupComponent: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes))
    .isRequired,
  position: PropTypes.oneOf(["left", "top", "right", "bottom"]),
  open: PropTypes.bool,
  onPanelClose: PropTypes.func.isRequired,
  onPanelOpen: PropTypes.func.isRequired,
  onItemClose: PropTypes.func.isRequired
};

export default withStyles(NotificationPanelStyle)(NotificationPanel);
