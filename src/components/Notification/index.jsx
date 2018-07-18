import React from "react";
import PropTypes from "prop-types";
import NotificationPanel from "./NotificationPanel";
import { Notifications, NotificationsActive } from "@material-ui/icons";
import { IconButton, withStyles } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
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
  };

  render() {
    const { dataSource, classes, badgeColor, ...others } = this.props;
    return (
      <React.Fragment>
        <IconButton onClick={this.onClick}>
          {dataSource.length > 0 && (
            <Badge badgeContent={dataSource.length} color={badgeColor}>
              <NotificationsActive className={classes.iconActive} />
            </Badge>
          )}
          {dataSource.length <= 0 && <Notifications className={classes.icon} />}
        </IconButton>
        <NotificationPanel
          dataSource={dataSource}
          open={this.state.panelOpen}
          onOpen={this.onPanelOpen}
          onClose={this.onPanelClose}
        />
      </React.Fragment>
    );
  }
}

NotificationCenter.defaultProps = {
  badgeColor: "secondary"
};

NotificationCenter.propTypes = {
  dataSource: PropTypes.array.isRequired,
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
