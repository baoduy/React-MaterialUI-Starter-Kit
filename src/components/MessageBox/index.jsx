import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MessageBoxStyle from "./jss";
import MessageBoxType from "./MessageBoxType";
import { getTitleClasses, getTitle } from "./getTitleClasses";

function MessageBox({
  type = MessageBoxType.INFO,
  open,
  message,
  handleClose,
  classes,
  ...other
}) {
  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      maxWidth={false}
      fullScreen={false}
      open={open}
      onClose={handleClose}
      aria-labelledby={`message-box-title-${type}`}
      {...other}
    >
      <DialogTitle
        variant="subheading"
        className={getTitleClasses(type, classes)}
        id={`message-box-title-${type}`}
      >
        {getTitle(type)}
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.content}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

MessageBox.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(MessageBoxStyle)(MessageBox);
