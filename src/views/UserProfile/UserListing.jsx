import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserActions from '../../actions/Users';
import MessageBoxActions from '../../actions/MessageBox';
import MessageBoxType from '../../components/MessageBox/MessageBoxType';

import urljoin from 'url-join';
import UserTable from '../../components/User/UserTable';

@connect(
  state => {
    return { users: state.users.data, isLoading: state.users.isLoading };
  },
  dispatch => {
    return {
      actions: bindActionCreators(UserActions, dispatch),
      messageBoxActions: bindActionCreators(MessageBoxActions, dispatch)
    };
  }
)
class UserListing extends Component {
  componentWillMount() {
    this.props.actions.getAllUsers();
  }
  onEditClick = rowData => {
    this.props.history.push(urljoin(this.props.match.url, `${rowData.id}`));
  };
  onDeleteClick = rowData => {
    this.props.messageBoxActions.showMessage(
      MessageBoxType.CONFIRM,
      `User ${rowData.firstName} will be deleted, are you sure?`,
      event => {
        if (event.currentTarget.value === 'OK') {
          this.props.actions.deleteUser(rowData.id);
        }
      }
    );
  };
  onAddClick = () => {
    this.props.history.push(urljoin(this.props.match.url, '0'));
  };
  render() {
    const columns = [
      {
        Header: 'Username',
        accessor: 'username'
      },
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      }
    ];
    return (
      <React.Fragment>
        <UserTable
          columns={columns}
          data={this.props.users}
          onEditClick={this.onEditClick}
          onAddClick={this.onAddClick}
          onDeleteClick={this.onDeleteClick}
          loading={this.props.isLoading}
        />
        <Route path={`${this.props.match.url}/:id`} component={UserProfile} />
      </React.Fragment>
    );
  }
}
export default UserListing;
