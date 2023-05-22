import { Axios } from 'services/axios/config';

export const getCSRFToken = () => Axios.get('/api/csrf-token');