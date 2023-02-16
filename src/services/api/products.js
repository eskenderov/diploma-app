import { Axios } from '../axios/config';

export const callGetProducts = () => Axios.get('/api/products/allProduct');

export const callGetProductById = (id) => {
  return Axios.get(`/collections/authored/${id}/`, {});
};
