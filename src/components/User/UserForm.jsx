import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "../CustomButtons/Button";
import Grid from "@material-ui/core/Grid";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CustomInput from "../CustomInput/CustomInput";
import CardBody from "../Card/CardBody";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import { getAvatar } from "../../commons/commonFuncs";
import Badge from "@material-ui/core/Badge";
import Update from "@material-ui/icons/CloudUpload";
import withStyles from "@material-ui/core/styles/withStyles";
import userStyles from "./userFormStyles";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { renderTextField } from "../../commons/commonControlRenderers";
function UserForm({ user, onSave, onClose, onChangeInput, classes }) {
  let inputFile = React.createRef();

  const handleAvatarClick = () => {
    inputFile.current.click();
  };
  return (
    <form onSubmit={onSave}>
      <input type="hidden" name="id" value={user.id} />
      <input
        name="avatar"
        type="file"
        ref={inputFile}
        className={classes.hiddenTag}
        accept="image/gif, image/jpeg, image/png"
        onChange={onChangeInput}
      />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Close
          </Typography>
          <Button color="success" type="submit" variant="contained">
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <Grid container justify="center">
                    <Badge
                      badgeContent={<Update />}
                      className={classes.pointer}
                      onClick={handleAvatarClick}
                      color="primary"
                      id="btnUpload"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={getAvatar(user.avatar)}
                      />
                    </Badge>
                  </Grid>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Grid container>
                    <GridItem xs={12} sm={12} md={6}>
                      <Field
                        component={renderTextField}
                        name="username"
                        label="Username"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.formControl
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <Field
                        component={renderTextField}
                        name="email"
                        label="Email address"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.formControl
                        }}
                      />
                    </GridItem>
                  </Grid>
                  <Grid container>
                    <GridItem xs={12} sm={12} md={6}>
                      <Field
                        component={renderTextField}
                        name="firstName"
                        label="First Name"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.formControl
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <Field
                        component={renderTextField}
                        name="lastName"
                        label="Last Name"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.formControl
                        }}
                      />
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </form>
  );
}

UserForm.propTypes = {
  user: PropTypes.object,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  onChangeInput: PropTypes.func
};
export default withStyles(userStyles)(UserForm);
