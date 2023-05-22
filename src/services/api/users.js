import { Axios } from '../axios/config';

export const loginUser = ({ username, password, type }) => {
  let url;
  if (type === 'safe')
    url = `/api/users/login?username=${username}&password=${password}`;
  else if (type === 'unsafe')
    url = `/users/login?username=${username}&password=${password}`;
  else return false;
  return Axios.post(url);
};

export const editUser = ({ type }) => {
  let url;
  if (type === 'safe') url = `/api/users/edit/safe`;
  else if (type === 'unsafe') url = `/api/users/edit/unsafe`;
  else return false;
  return Axios.post(url);
};
