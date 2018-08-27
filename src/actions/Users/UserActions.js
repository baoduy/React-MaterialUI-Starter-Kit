import {
  makeThunkAsyncActionCreator
} from 'redux-toolbelt-thunk';

import * as api from '../../api/userApi';
export const TYPES = {
  GetAllUsers: '@User/GetAllUsers',
  GetUserById: '@User/GetUserById',
  SaveUser: '@User/GetUserById',
  DeleteUser: '@User/DeleteUser'
};
// export const getAllUsers = makeThunkAsyncActionCreator(
//   TYPES.GetAllUsers,
//   api.getAllUsers
// );
// export const getUserById = makeThunkAsyncActionCreator(
//   TYPES.GetUserById,
//   api.getUserById
// );
function getUserSuccess(users) {
  return {
    type: TYPES.GetAllUsers,
    payload: users
  };
}
export const getAllUsers = () => {
  return dispatch => {
    return api.getAllUsers().then(users => {
      dispatch(getUserSuccess(users));
    });
  };
};

function saveUserSuccess(user) {
  return {
    type: TYPES.SaveUser,
    payload: user
  };
}
export const saveUser = user => {
  return dispatch => {
    return api.saveUser(user).then(response => {
      dispatch(saveUserSuccess(response));
    });
  };
};

function deleteUserSuccess(id) {
  return {
    type: TYPES.DeleteUser,
    payload: id
  };
}
export const deleteUser = id => {
  return dispatch => {
    return api.deleteUser(id).then(response => {
      let payload = null;
      if (response) {
        payload = id;
      }
      dispatch(deleteUserSuccess(payload));
    });
  };
};