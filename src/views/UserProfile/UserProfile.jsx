import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserActions from '../../actions/Users';
import Dialog from '@material-ui/core/Dialog';
import UserEditTransition from './UserEditTransition';
import UserForm from '../../components/User/UserForm';

@connect(
  (state, props) => {
    const id = props.match.params['id'];
    let result = state.users.data.find(i => i.id == id);
    return {
      user: result
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(UserActions, dispatch)
    };
  }
)
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user || {
        id: 0,
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        avatar: null
      },
      open: props.match.params['id'] != undefined
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose = () => {
    this.props.history.push('/users');
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
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
  onChangeInput = e => {
    let val = e.target.value;
    const name = e.target.name;
    let _this = this;
    if (e.target.type === 'file') {
      let reader = new FileReader();
      reader.onload = function(pe) {
        val = pe.target.result;
        _this.setState((prevState, props) => {
          return {
            user: {
              ...prevState.user,
              [name]: val
            }
          };
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      this.setState((prevState, props) => {
        return {
          user: {
            ...prevState.user,
            [name]: val
          }
        };
      });
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
          user={this.state.user}
          onClose={this.handleClose}
          onSave={this.handleSubmit}
          onChangeInput={this.onChangeInput}
        />
      </Dialog>
    );
  }
}

export default UserProfile;
