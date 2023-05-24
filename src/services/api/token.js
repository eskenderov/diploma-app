import { Axios } from 'services/axios/config';

export const getCSRFToken = async () => Axios.get('/api/csrf-token');
