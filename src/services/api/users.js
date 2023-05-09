import { Axios } from '../axios/config';

export const loginUser = ({ username, password, type }) => {
  let url;
  switch (type) {
    case 'safe':
      url = `/api/users/login?username=${username}&password=${password}`;
      break;
    case 'unsafe':
      url = `/users/login?username=${username}&password=${password}`;
      break;

    default:
      break;
  }
  return Axios.post(url);
};
