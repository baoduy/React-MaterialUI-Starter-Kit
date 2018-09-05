import React, {Component} from "react";
import {Route} from "react-router-dom";
import UserProfile from "./UserProfile";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import UserActions from "../../actions/Users";
import urljoin from "url-join";
import UserTable from "../../components/User/UserTable";
import messageBoxActions from '../../actions/MessageBox';
import MessageBoxType from '../../components/MessageBox/MessageBoxType';

@connect(state => {
  return {users: state.users.data, isLoading: state.users.isLoading};
}, dispatch => {
  return {
    actions: bindActionCreators(UserActions, dispatch),
    messageBoxActions: bindActionCreators(messageBoxActions, dispatch)

  };
})
class UserListing extends Component {
  constructor(props) {
    super(props);
    this.onEditClick = this
      .onEditClick
      .bind(this);
    this.onDeleteClick = this
      .onDeleteClick
      .bind(this);
    this.onAddClick = this
      .onAddClick
      .bind(this);
  }
  componentWillMount() {
    this
      .props
      .actions
      .getAllUsers();
  }
  onEditClick = rowData => {
    this
      .props
      .history
      .push(urljoin(this.props.match.url, `${rowData.id}`));
  };
  onDeleteClick = rowData => {
    this
      .props
      .messageBoxActions
      .showMessage(MessageBoxType.CONFIRM, `User ${rowData.firstName} will be deleted, are you sure?`, event => {
        if (event.currentTarget.value === "OK") {
          this
            .props
            .actions
            .deleteUser(rowData.id);

        }
      });
  };
  onAddClick = () => {
    this
      .props
      .history
      .push(urljoin(this.props.match.url, "0"));
  };
  render() {
    const columns = [
      {
        Header: "First Name",
        accessor: "firstName"
      }, {
        Header: "Last Name",
        accessor: "lastName"
      }
    ];
    return (
      <div>
        <UserTable
          columns={columns}
          data={this.props.users}
          onEditClick={this.onEditClick}
          onAddClick={this.onAddClick}
          onDeleteClick={this.onDeleteClick}
          loading={this.props.isLoading}/>
        <Route path={`${this.props.match.url}/:id`} component={UserProfile}/>
      </div>
    );
  }
}
export default UserListing;
