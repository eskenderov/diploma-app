import { Axios } from 'services/axios/config';

export const getCommentAll = () => Axios.get('/api/comments/allComment');
export const postNewComment = ({ author, text }) =>
  Axios.post('/api/comments/addComment', { author, text });
