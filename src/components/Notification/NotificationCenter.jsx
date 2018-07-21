import React from "react";
import PropTypes from "prop-types";
import NotificationPanel from "./NotificationPanel";
import { Notifications, NotificationsActive } from "@material-ui/icons";
import { IconButton, withStyles, Badge } from "@material-ui/core";
import NotificationCenterStyle from "./jss";

@withStyles(NotificationCenterStyle)
export default class NotificationCenter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { panelOpen: false };
  }

  onClick = () => {
    this.setState({ panelOpen: !this.state.panelOpen });
  };

  onPanelOpen = () => {};

  onPanelClose = () => {
    this.setState({ panelOpen: false });
    //Changes status to READ.
  };

  onItemClose = items => {
    //Changes status to DELETE.
    alert(items.length);
  };

  render() {
    const { items, classes, badgeColor } = this.props;
    return (
      <React.Fragment>
        <IconButton onClick={this.onClick}>
          {items.length > 0 && (
            <Badge badgeContent={items.length} color={badgeColor}>
              <NotificationsActive className={classes.iconActive} />
            </Badge>
          )}
          {items.length <= 0 && <Notifications className={classes.icon} />}
        </IconButton>
        <NotificationPanel
          items={items}
          open={this.state.panelOpen}
          onPanelOpen={this.onPanelOpen}
          onPanelClose={this.onPanelClose}
          onItemClose={this.onItemClose}
        />
      </React.Fragment>
    );
  }
}

NotificationCenter.defaultProps = {
  badgeColor: "secondary"
};

NotificationCenter.propTypes = {
  items: PropTypes.array.isRequired,
  displayIn: PropTypes.number,
  onChange: PropTypes.func,
  badgeColor: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "default",
    "error"
  ])
};
