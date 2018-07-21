import React from "react";
import PropTypes from "prop-types";
import NotificationPanel from "./NotificationPanel";
import NotificationPopup from "./NotificationPopup";
import { Notifications, NotificationsActive } from "@material-ui/icons";
import { withStyles, Badge, Tooltip } from "@material-ui/core";
import Button from "../CustomButtons/Button";
import NotificationCenterStyle from "./jss";
import NotificationItemPropTypes from "./NotificationItemPropTypes";
import NotificationStatus from "./NotificationStatus";

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

    this.state = { panelOpen: false, arrowRef: null };
  }

  onClick = () => {
    this.setState({ panelOpen: !this.state.panelOpen });
  };

  //Panel Open NoAction
  onPanelOpen = () => {};

  //Changes status to READ when Panel closed.
  onPanelClose = items => {
    this.setState({ panelOpen: false });
    //Changes status to READ.
    const finalItems = items.map(i => ({
      ...i,
      status: NotificationStatus.READ
    }));
    this.updateStatus(finalItems);
  };

  //changes status to DELETE when the close button clicked
  onItemClose = items => {
    const finalItems = items.map(i => ({
      ...i,
      status: NotificationStatus.DELETED
    }));
    this.updateStatus(finalItems);
  };

  //changes status to Notified when Popup closed
  onPopupClose = item =>
    this.updateStatus([{ ...item, status: NotificationStatus.NOTIFIED }]);

  updateStatus = items => {
    if (!items || items.length <= 0) return;

    const { onChange } = this.props;
    if (onChange) onChange(items);
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node
    });
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
      badgeColor,
      displayIn,
      subsequentDelay
    } = this.props;

    return (
      <React.Fragment>
        <Tooltip
          classes={{ tooltip: classes.tooltip, popper: classes.arrowPopper }}
          title={
            <React.Fragment>
              {title}
              <span className={classes.arrowArrow} ref={this.handleArrowRef} />
            </React.Fragment>
          }
          placement="bottom"
          PopperProps={{
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(this.state.arrowRef),
                  element: this.state.arrowRef
                }
              }
            }
          }}
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
        <NotificationPopup
          displayIn={displayIn}
          subsequentDelay={subsequentDelay}
          onClose={this.onPopupClose}
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
  NotificationPanelProps: {},
  displayIn: 3000,
  subsequentDelay: 1000
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
  subsequentDelay: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  badgeColor: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "default",
    "error"
  ])
};
