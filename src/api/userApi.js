import {
  users
} from '../../tests/_dummy_data/users';
import urljoin from 'url-join';
import * as evnConfig from '../envconfigs';
import axios from 'axios';

const Root = urljoin(evnConfig.webSerrvice, '/users/');
export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get(Root).then(response => {
      resolve(response.data);
    });
  });
};
export const getUserById = id => {
  return new Promise((resolve, reject) => {
    const user = users.filter(i => i.id == id)[0];
    setTimeout(resolve(user), 1000);
  });
};
export const saveUser = user => {
  return new Promise((resolve, reject) => {
    axios.post(Root, user).then(response => {
      resolve(response.data);
    });
  });
};
export const deleteUser = id => {
  return new Promise((resolve, reject) => {
    axios.delete(urljoin(Root, `${id}`)).then(response => {
      resolve(response.data);
    });
  });
};