import React from 'react';
import PropTypes from 'prop-types';
import NotificationType from './NotificationType';
import NotificationItemStyle from './NotificationItemStyle';
import dayjs from 'dayjs';
import { ListItem, IconButton, Tooltip, Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import * as helper from './helper';
import NotificationItemPropTypes from './NotificationItemPropTypes';
import NotificationStatus from './NotificationStatus';
import classnames from 'classnames';

function defaultFormatDate(date) {
  //convert Date to dayjs
  if (date instanceof Date) date = dayjs(date);
  //Check if it is nothing then just return out
  if (!date || !dayjs.isDayjs(date)) return date;
  const now = dayjs();

  //Less than 1 minutes => now
  if (now.diff(date, 'minutes') <= 1) return 'now';

  //Less than 5hours => hours ago
  if (now.diff(date, 'hours') <= 5) return date.format('h') + ' ago';

  //If today then => Today hh:mm
  if (now.diff(date, 'days') <= 1) return 'today ' + date.format('HH:mm');

  //If Yesterday then => yesterday
  const diff = now.diff(date, 'days');
  if (diff > 1 && diff <= 2) return 'yesterday';

  return `${diff} days`;
}

function NotificationItem({
  title,
  message,
  type,
  classes,
  status,
  onClose,
  onClick,
  formatDate,
  createdOn
}) {
  const Icon = helper.getIcon(type);
  const isNew =
    status === NotificationStatus.NEW || status === NotificationStatus.NOTIFIED;

  return (
    <ListItem
      className={classnames(classes.root, isNew ? classes.highlight : '')}
      onClick={onClick}
      button={onClick !== undefined}
    >
      <Grid container spacing={0}>
        <Grid item xs={1} className={classes[type]}>
          <Icon />
        </Grid>
        <Grid item xs={8} className={classes.title}>
          {title}
        </Grid>
        <Grid item xs={3} className={classes.date}>
          {formatDate(createdOn)}
        </Grid>
        <Grid item xs={11} className={classes.message}>
          {message}
        </Grid>
        <Grid item xs={1}>
          <Tooltip
            classes={{ tooltip: classes.tooltip }}
            title={'close'}
            placement="top"
          >
            <IconButton className={classes.iconButton} onClick={onClose}>
              <CloseIcon className={classes.close} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </ListItem>
  );
}

NotificationItem.defaultProps = {
  type: NotificationType.INFO,
  icon: true,
  formatDate: defaultFormatDate
};

NotificationItem.propTypes = {
  ...NotificationItemPropTypes,
  //The function to format dayjs object to string
  formatDate: PropTypes.func
};

export default withStyles(NotificationItemStyle)(NotificationItem);
