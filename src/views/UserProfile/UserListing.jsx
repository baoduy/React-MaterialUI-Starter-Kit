import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserActions from '../../actions/Users';
import urljoin from 'url-join';
import UserTable from '../../components/User/UserTable';

@connect(
  state => {
    return {
      users: state.users.data,
      isLoading: state.users.isLoading
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(UserActions, dispatch)
    };
  }
)
class UserListing extends Component {
  constructor(props) {
    super(props);
    // this.onEditClick = this.onEditClick.bind(this);
    // this.onDeleteClick = this.onDeleteClick.bind(this);
    // this.onAddClick = this.onAddClick.bind(this);
  }
  componentWillMount() {
    this.props.actions.getAllUsers();
  }
  onEditClick = rowData => {
    this.props.history.push(
      urljoin(this.props.match.url, `${rowData.original.id}`)
    );
  };
  onDeleteClick = rowData => {
    this.props.actions.deleteUser(rowData.original.id);
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
