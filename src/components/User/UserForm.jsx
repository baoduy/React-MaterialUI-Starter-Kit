import {
  renderInputFile,
  renderTextField
} from '../../commons/commonControlRenderers';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';
import Close from '@material-ui/icons/Close';
import { Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import GridItem from '../Grid/GridItem';
import PropTypes from 'prop-types';
import React from 'react';
import Save from '@material-ui/icons/Save';
import Update from '@material-ui/icons/CloudUpload';
import { getAvatar } from '../../commons/commonFuncs';
import userStyles from './userFormStyles';
import withStyles from '@material-ui/core/styles/withStyles';

function UserForm({
  user,
  handleSubmit,
  onClose,
  onChangeAvatar,
  classes,
  pristine,
  submitting,
  onSave,
  avatarChanged
}) {
  let inputFile = React.createRef();

  const handleAvatarClick = () => {
    inputFile.current.click();
  };

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <input type="hidden" name="id" value={user.id} />
      <Field
        name="a"
        component={renderInputFile}
        type="file"
        accept="image/gif, image/jpeg, image/png"
        fileRef={inputFile}
        onChangeFile={onChangeAvatar}
        className={classes.hiddenTag}
      />
      <Grid container>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <Grid container justify="space-between" alignItems="center">
                <GridItem>
                  <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                </GridItem>
                <GridItem>
                  <Grid container>
                    <GridItem>
                      <Button
                        mini={true}
                        color="primary"
                        type="submit"
                        variant="fab"
                        disabled={(pristine && !avatarChanged) || submitting}
                      >
                        <Save />
                      </Button>
                    </GridItem>
                    <GridItem>
                      <Button
                        mini={true}
                        color="secondary"
                        variant="fab"
                        onClick={onClose}
                        aria-label="Close"
                      >
                        <Close />
                      </Button>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
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
  handleSubmit: PropTypes.func,
  onChangeInput: PropTypes.func
};
export default withStyles(userStyles)(UserForm);
