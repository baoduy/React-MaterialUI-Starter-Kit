import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Collapse,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  IconButton,
  Tooltip
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import classnames from 'classnames';

import NotificationGroupStyle from './NotificationGroupStyle';
import NotificationItem from './NotificationItem';
import NotificationItemPropTypes from './NotificationItemPropTypes';
//helper
import { getUnreadItems } from './helper';

@withStyles(NotificationGroupStyle)
export default class NotificationGroup extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = { open: props.open };
  }

  onClick = () => this.setState(p => ({ open: !p.open }));

  onItemClose = item => {
    const { onClose } = this.props;
    if (onClose) onClose([item]);
  };

  onClose = () => {
    const { onClose, items } = this.props;
    if (onClose) onClose(items);
  };

  render() {
    const { title, items, classes } = this.props;
    const unReadItems = getUnreadItems(items);

    return (
      <React.Fragment>
        <ListItem
          className={classnames(
            classes.root,
            this.state.open ? classes.blue : ''
          )}
          button
          onClick={this.onClick}
        >
          <ListItemAvatar>
            <Avatar
              className={classnames(
                classes.avatar,
                unReadItems.length > 0
                  ? classes.avatarNew
                  : this.state.open
                    ? classes.avatarHighlight
                    : ''
              )}
            >
              {unReadItems.length > 0 ? unReadItems.length : items.length}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{ className: classes.title }}
            primary={title}
          />
          {this.state.open && (
            <Tooltip
              classes={{ tooltip: classes.tooltip }}
              title="clear"
              placement="top"
            >
              <IconButton className={classes.iconButton} onClick={this.onClose}>
                <CloseIcon className={classes.close} />
              </IconButton>
            </Tooltip>
          )}
        </ListItem>
        <Divider />
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List className={classes.details} component="div" disablePadding>
            {items.map((n, i) => (
              <React.Fragment key={i}>
                <NotificationItem
                  {...n}
                  onClose={e => {
                    this.onItemClose(n);
                    //stop event bubbling on click
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }}
                />
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Collapse>
        <Divider />
      </React.Fragment>
    );
  }
}

NotificationGroup.defaultProps = {
  badgeColor: 'primary',
  open: false
};

NotificationGroup.propTypes = {
  //the title of notification
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(NotificationItemPropTypes))
    .isRequired,
  //Close handler.
  onClose: PropTypes.func,
  open: PropTypes.bool,
  badgeColor: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'default',
    'error'
  ])
};
