import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import NotificationPanelStyle from './NotificationPanelStyle';
import MessageIcon from '@material-ui/icons/Message';
import NotificationGroup from './NotificationGroup';
import NotificationItemPropTypes from './NotificationItemPropTypes';
//helper
import { getGroupItems } from './helper';

function defaultGroupComponent({ classes, onClose, items }) {
  return (
    <List className={classes.list}>
      {items.map((g, i) => (
        <NotificationGroup
          key={i}
          {...g}
          onClose={onClose}
          open={items.length <= 1 && i === 0}
        />
      ))}
    </List>
  );
}

function defaultBackgroundComponent({ image, classes }) {
  if (!image) return null;
  return (
    <div
      className={classes.background}
      style={{ backgroundImage: 'url(' + image + ')' }}
    />
  );
}

function defaultTitleComponent({ classes, title }) {
  if (!title) return null;

  return (
    <div className={classes.logo}>
      <MessageIcon className={classes.icon} />
      <span className={classes.logoText}>{title}</span>
    </div>
  );
}

function NotificationPanel({
  GroupComponent,
  BackgroundComponent,
  TitleComponent,
  position,
  open,
  onPanelClose,
  onItemClose,
  classes,
  items,
  ...others
}) {
  const groups = getGroupItems(items);

  return (
    <Drawer
      variant="temporary"
      anchor={position}
      open={open}
      onClose={() => onPanelClose(items)}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        //keepMounted: true // Better open performance on mobile.
        BackdropProps: {
          invisible: true
        }
      }}
    >
      <BackgroundComponent classes={classes} {...others} />
      <div className={classes.containWrapper}>
        <TitleComponent classes={classes} {...others} />
        <GroupComponent
          {...others}
          classes={classes}
          items={groups}
          onClose={onItemClose}
        />
      </div>
    </Drawer>
  );
}

NotificationPanel.defaultProps = {
  GroupComponent: defaultGroupComponent,
  BackgroundComponent: defaultBackgroundComponent,
  TitleComponent: defaultTitleComponent,
  position: 'right',
  open: false
};

NotificationPanel.propTypes = {
  GroupComponent: PropTypes.func,
  BackgroundComponent: PropTypes.func,
  TitleComponent: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes))
    .isRequired,
  position: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  open: PropTypes.bool,
  onPanelClose: PropTypes.func.isRequired,
  onItemClose: PropTypes.func.isRequired,
  //The background image of Notification Panel
  image: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(NotificationPanelStyle)(NotificationPanel);
