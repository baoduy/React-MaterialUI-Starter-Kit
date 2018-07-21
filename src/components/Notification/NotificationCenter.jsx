import React from "react";
import PropTypes from "prop-types";
import NotificationPanel from "./NotificationPanel";
import { Notifications, NotificationsActive } from "@material-ui/icons";
import { withStyles, Badge, Tooltip } from "@material-ui/core";
import classnames from "classnames";
import Button from "../CustomButtons/Button";
import NotificationCenterStyle from "./jss";
import NotificationItemPropTypes from "./NotificationItemPropTypes";

function defaultButtonComponent({
  onClick,
  items,
  classes,
  badgeColor,
  ...others
}) {
  return (
    <Button className={classes.button} onClick={onClick} {...others}>
      {items.length > 0 && (
        <Badge badgeContent={items.length} color={badgeColor}>
          <NotificationsActive
            className={classes.icon + " " + classes.iconActive}
          />
        </Badge>
      )}
      {items.length <= 0 && <Notifications className={classes.icon} />}
    </Button>
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
      classes,
      ButtonComponent,
      ButtonProps,
      NotificationPanelComponent,
      NotificationPanelProps,
      items,
      title,
      badgeColor
    } = this.props;

    return (
      <React.Fragment>
        <Tooltip
          classes={{ tooltip: classes.tooltip }}
          title={title}
          placement="bottom"
        >
          <ButtonComponent
            {...ButtonProps}
            classes={{
              ...classes,
              ...ButtonProps.classes
            }}
            badgeColor={badgeColor}
            items={items}
            onClick={this.onClick}
          />
        </Tooltip>
        <NotificationPanelComponent
          {...NotificationPanelProps}
          items={items}
          title={title}
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
  badgeColor: "secondary",
  items: [],
  title: "Notification Center",
  ButtonProps: {},
  NotificationPanelProps: {}
};

NotificationCenter.propTypes = {
  //The custom Button render
  ButtonComponent: PropTypes.func,
  //the custom Props of Button
  ButtonProps: PropTypes.object,
  //The custom Panel render
  NotificationPanelComponent: PropTypes.func,
  //The custom Props of NotificationPanelComponent
  NotificationPanelProps: PropTypes.object,

  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes)),
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
