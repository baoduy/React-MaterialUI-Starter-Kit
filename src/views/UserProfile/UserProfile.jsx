import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserActions from "../../actions/Users";
import Dialog from "@material-ui/core/Dialog";
import UserEditTransition from "./UserEditTransition";
import UserForm from "../../components/User/UserForm";
import { reduxForm } from "redux-form";
import { isValidEmail, convertToFormData } from "../../commons/commonFuncs";
import { isUsernameOrEmailExist } from "../../api/userApi";

const validate = values => {
  const errors = {};
  const requiredFields = ["username", "email", "firstName", "lastName"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (!isValidEmail(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
const asyncValidate = (values, dispatch, props, blurredField) => {
  const id = values.id !== undefined ? values.id : 0;
  if (blurredField === "email" && values.email) {
    return isUsernameOrEmailExist(values.email, id).then(response => {
      if (response) {
        throw { email: `${values.email} is already taken` };
      }
    });
  }
  return isUsernameOrEmailExist(values.username, id).then(response => {
    if (response) {
      throw { username: `${values.username} is already taken` };
    }
  });
};
@connect(
  (state, props) => {
    const id = props.match.params["id"];
    let result = state.users.data.find(i => i.id == id);
    return {
      user: result,
      initialValues: result
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(UserActions, dispatch)
    };
  }
)
@reduxForm({
  form: "UserProfile",
  validate,
  asyncValidate,
  asyncBlurFields: ["username", "email"]
})
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user || {
        id: 0,
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        avatar: ""
      },
      open: props.match.params["id"] != undefined,
      file: null,
      avatarChanged: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  handleClose = () => {
    this.props.history.push("/users");
  };
  onSave = e => {
    const data = convertToFormData(e);
    data.append("avatar", this.state.file);
    this.props.actions.saveUser(data);
    this.handleClose();
  };
  componentWillUpdate(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.setState((prevState, props) => {
        return { user: { ...props.user } };
      });
    }
  }
  onChangeAvatar = e => {
    let val = e.target.value;
    let _this = this;
    const file = e.target.files[0];
    if (e.target.type === "file") {
      let reader = new FileReader();
      reader.onload = function(pe) {
        val = pe.target.result;
        _this.setState((prevState, props) => {
          return {
            user: {
              ...prevState.user,
              avatar: val
            },
            file: file,
            avatarChanged: true
          };
        });
      };
      reader.readAsDataURL(file);
    }
  };
  render() {
    return (
      <Dialog
        TransitionComponent={UserEditTransition}
        fullScreen
        open={this.state.open}
      >
        <UserForm
          {...this.props}
          user={this.state.user}
          onClose={this.handleClose}
          onChangeAvatar={this.onChangeAvatar}
          onSave={this.onSave}
          avatarChanged={this.state.avatarChanged}
        />
      </Dialog>
    );
  }
}

export default UserProfile;
