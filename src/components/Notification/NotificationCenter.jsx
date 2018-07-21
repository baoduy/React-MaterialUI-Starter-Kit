import React from "react";
import PropTypes from "prop-types";
import NotificationPanel from "./NotificationPanel";
import { Notifications, NotificationsActive } from "@material-ui/icons";
import { IconButton, withStyles, Badge } from "@material-ui/core";
import NotificationCenterStyle from "./jss";
import NotificationItemPropTypes from "./NotificationItemPropTypes";

function defaultButtonComponent({ onClick, items, color, classes, ...others }) {
  return (
    <IconButton {...others} onClick={onClick}>
      {items.length > 0 && (
        <Badge badgeContent={items.length} color={color}>
          <NotificationsActive className={classes.iconActive} />
        </Badge>
      )}
      {items.length <= 0 && <Notifications className={classes.icon} />}
    </IconButton>
  );
}

function defaultNotificationPanelComponent(props) {
  return <NotificationPanel {...props} />;
}

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
    const {
      items,
      classes,
      badgeColor,
      ButtonComponent,
      NotificationPanelComponent,
      ...others
    } = this.props;

    return (
      <React.Fragment>
        <ButtonComponent
          {...others}
          onClick={this.onClick}
          items={items}
          classes={classes}
          color={badgeColor}
        />
        <NotificationPanelComponent
          {...others}
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
  ButtonComponent: defaultButtonComponent,
  NotificationPanelComponent: defaultNotificationPanelComponent,
  badgeColor: "secondary"
};

NotificationCenter.propTypes = {
  //The Button render
  ButtonComponent: PropTypes.func,
  NotificationPanelComponent: PropTypes.func,

  items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes))
    .isRequired,
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
