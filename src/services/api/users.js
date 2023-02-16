import { Axios } from '../axios/config';

export const callGetUsers = ({ username }) =>
  Axios.get(`/users/?search=${username}`);
