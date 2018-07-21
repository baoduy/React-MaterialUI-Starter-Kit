import React from "react";
import PropTypes from "prop-types";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import NotificationPanelStyle from "./NotificationPanelStyle";
import { withStyles, List } from "@material-ui/core";
import NotificationGroup from "./NotificationGroup";
import linq from "linq";
import NotificationItemPropTypes from "./NotificationItemPropTypes";

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
  const groups = linq
    .from(items)
    .orderByDescending(i => i.createdOn)
    .groupBy(i => i.group || "")
    .select(g => ({ title: g.key(), items: g.toArray() }))
    .toArray();

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
