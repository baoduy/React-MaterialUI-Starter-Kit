import { users } from '../../tests/_dummy_data/users';
import urljoin from 'url-join';
import * as evnConfig from '../envconfigs';
import axios from 'axios';

const Root = urljoin(evnConfig.webService, '/users/');

export const getAllUsers = () =>
  axios.get(Root).then(response => response.data);

export const getUserById = id =>
  //Should call Api instaed getting user from dummy data.
  new Promise(resolve => {
    const user = users.filter(i => i.id == id)[0];
    setTimeout(resolve(user), 1000);
  });

export const saveUser = user =>
  axios.post(Root, user).then(response => response.data);

export const deleteUser = id =>
  axios.delete(urljoin(Root, `${id}`)).then(response => response.data);
