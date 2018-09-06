import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import GridItem from '../Grid/GridItem.jsx';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MessageBoxStyle from './jss';
import MessageBoxType from './MessageBoxType';
import * as helper from './helper';

function MessageBox({
  type,
  open,
  title,
  message,
  actionHandler,
  icon,
  okText,
  cancelText,
  classes,
  ...other
}) {
  let finalIcon = icon;
  if (icon === true) finalIcon = helper.getIcon(type, classes);

  return (
    <Dialog
      {...other}
      classes={{ paper: classes.dialog }}
      maxWidth={false}
      fullScreen={false}
      open={open || false}
      aria-labelledby={`message-box-title-${type}`}
    >
      <Typography
        variant="title"
        className={helper.getTitleClasses(type, classes)}
        id={`message-box-title-${type}`}
      >
        {title || helper.getTitle(type)}
      </Typography>
      <DialogContent className={classes.dialogContent}>
        <Grid
          className={classes.content}
          container
          alignItems="baseline"
          direction="row"
          justify="flex-start"
        >
          {finalIcon && (
            <GridItem xs={4} sm={2} md={2} style={{ padding: '0px' }}>
              {finalIcon}
            </GridItem>
          )}

          <GridItem>
            <p>{message}</p>
          </GridItem>
        </Grid>
      </DialogContent>
      <DialogActions>
        {helper.getActions(type, actionHandler, classes, okText, cancelText)}
      </DialogActions>
    </Dialog>
  );
}

MessageBox.defaultProps = {
  type: MessageBoxType.INFO,
  okText: 'Ok',
  cancelText: 'Cancel',
  open: true,
  icon: true
};

MessageBox.propTypes = {
  //The type of Message box
  type: PropTypes.oneOf([
    MessageBoxType.CONFIRM,
    MessageBoxType.DANGER,
    MessageBoxType.INFO,
    MessageBoxType.SUCCESS,
    MessageBoxType.WARNING
  ]),
  //The title of message box
  title: PropTypes.string,
  //show/hide message box
  open: PropTypes.bool.isRequired,
  //the message
  message: PropTypes.string,
  //the text of Ok button
  okText: PropTypes.string,
  //the text of cancel button
  cancelText: PropTypes.string,
  //buttons action handler.
  actionHandler: PropTypes.func,
  //The icon of notification. set to false to hide the default icon.
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
};

export default withStyles(MessageBoxStyle)(MessageBox);
