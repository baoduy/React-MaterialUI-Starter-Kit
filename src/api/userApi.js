import urljoin from 'url-join';
import * as evnConfig from '../envconfigs';
import axios from 'axios';

const Root = urljoin(evnConfig.webService, '/users/');

export const getAllUsers = () =>
  axios.get(Root).then(response => response.data);

export const getUserById = id =>
  axios.get(urljoin(Root, `${id}`)).then(response => response.data);


export const saveUser = user =>
  axios.post(Root, user).then(response => response.data);

export const deleteUser = id =>
  axios.delete(urljoin(Root, `${id}`)).then(response => response.data);

export const isUsernameOrEmailExist = (usernameOrEmail, id) =>
  axios.get(urljoin(Root, 'IsEmailOrUserNameExist', usernameOrEmail, `${id}`)).then(response => response.data);