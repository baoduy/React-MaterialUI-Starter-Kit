import React from "react";
import PropTypes from "prop-types";
import NotificationPanel from "./NotificationPanel";
import NotificationPopup from "./NotificationPopup";
import NotificationStatus from "./NotificationStatus";
import { Notifications, NotificationsActive } from "@material-ui/icons";
import { Badge, Tooltip } from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles';
import Button from "../CustomButtons/Button";
import NotificationCenterStyle from "./jss";
import NotificationItemPropTypes from "./NotificationItemPropTypes";
import linq from "linq";
//helper
import { getUnreadItems, getItemsForPopup } from "./helper";

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
        <Badge
          classes={{
            badge: classes.badge,
            colorSecondary: classes.colorSecondary
          }}
          badgeContent={items.length > 99 ? 99 : items.length}
          color={badgeColor}
        >
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

  //Changes status from NOTIFIED to READ when Panel closed.
  onPanelClose = items => {
    this.setState({ panelOpen: false });
    //Changes status to READ.
    const finalItems = linq
      .from(items)
      .where(i => i.status !== NotificationStatus.READ)
      .select(i => ({
        id: i.id,
        status: NotificationStatus.READ
      }))
      .toArray();
    this.updateStatus(finalItems);
  };

  //changes status to DELETE when the close button clicked
  onItemClose = items => {
    const { onDelete } = this.props;
    if (onDelete) onDelete(items);
  };

  //changes status from NEW to NOTIFIED when Popup closed
  onPopupClose = item => {
    this.updateStatus([{ id: item.id, status: NotificationStatus.NOTIFIED }]);
  };

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
      unReadBadgeColor,
      displayIn,
      subsequentDelay,
      image
    } = this.props;

    const unReadItems = getUnreadItems(items);
    const popupItems = getItemsForPopup(items);

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
            badgeColor={unReadItems.length > 0 ? unReadBadgeColor : badgeColor}
            items={unReadItems.length > 0 ? unReadItems : items}
            onClick={this.onClick}
          />
        </Tooltip>

        <NotificationPanelComponent
          {...NotificationPanelProps}
          image={image}
          items={items}
          title={title}
          open={this.state.panelOpen}
          onPanelClose={this.onPanelClose}
          onItemClose={this.onItemClose}
        />
        <NotificationPopup
          items={popupItems}
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
  unReadBadgeColor: "error",
  items: [],
  title: "Notification Center",
  ButtonProps: {},
  NotificationPanelProps: {},
  displayIn: 3000,
  subsequentDelay: 600
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
  onDelete: PropTypes.func.isRequired,
  badgeColor: PropTypes.oneOf(["primary", "secondary", "error"]),
  unReadBadgeColor: PropTypes.oneOf(["primary", "secondary", "error"]),
  //The background image of Notification Panel
  image: PropTypes.string
};
