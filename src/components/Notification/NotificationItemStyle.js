import {
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from '../../assets/jss/material-dashboard-react';
import { closeButton, tooltip } from './jss';

const marginRight = 0;

const NotificationItemStyle = theme => ({
  root: {
    width: 'auto',
    transition: 'all 300ms linear',
    margin: '5px 5px 0',
    borderRadius: '3px',
    position: 'relative',
    padding: '10px 10px',
    border: '1px solid rgba(180, 180, 180, 0.3)'
  },
  highlight: {
    border: `1px solid ${warningColor}`
  },
  date: {
    textAlign: 'right',
    fontSize: theme.typography.pxToRem(10),
    fontWeight: 400,
    color: 'white'
  },
  title: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 550,
    color: 'white',
    paddingLeft: '10px'
  },
  message: {
    fontSize: theme.typography.pxToRem(12),
    textAlign: 'justify',
    color: 'white'
  },
  ...closeButton,
  ...tooltip(theme),

  success: {
    color: successColor,
    marginRight
  },
  danger: {
    color: dangerColor,
    marginRight
  },
  warning: {
    color: warningColor,
    marginRight
  },
  info: {
    color: infoColor,
    marginRight
  },
  confirm: {
    color: primaryColor,
    marginRight
  }
});

export default NotificationItemStyle;
