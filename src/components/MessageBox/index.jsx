import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MessageBoxStyle from "./jss";
import MessageBoxType from "./MessageBoxType";
import * as helper from "./helper";

function MessageBox({
  type = MessageBoxType.INFO,
  open,
  title,
  message,
  handler,
  icon,
  okText,
  cancelText,
  classes,
  ...other
}) {
   let finalIcon = undefined;
if(icon===true||icon===undefined)
   finalIcon = helper.getIcon(type, classes);
else if(icon)
   finalIcon = icon;

  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      maxWidth={false}
      fullScreen={false}
      open={open}
      aria-labelledby={`message-box-title-${type}`}
      {...other}
    >
      <Typography
        variant="title"
        className={helper.getTitleClasses(type, classes)}
        id={`message-box-title-${type}`}
      >
        {title || helper.getTitle(type)}
      </Typography>
      <DialogContent className={classes.dialogContent}>
      <Grid className={classes.content} container  alignItems="baseline"
            direction="row"
            justify="flex-start">
      {finalIcon &&
         <GridItem xs={4} sm={2} md={2} style={{ padding: "0px"}}>
         {finalIcon }
              </GridItem>}

              <GridItem>
                 <p>
              {message}
              </p>
              </GridItem>
      </Grid>
      </DialogContent>
      <DialogActions>
        {helper.getActions(type, handler, classes, okText, cancelText)}
      </DialogActions>
    </Dialog>
  );
}

MessageBox.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  handler: PropTypes.func.isRequired
};

export default withStyles(MessageBoxStyle)(MessageBox);
