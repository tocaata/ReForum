
import axios from 'axios';

export const fetchUserMessageApi = (userSlug) => {
  return axios.get(`/api/user/messages/${userSlug}`);
};


export const visitMessageApi = (messageId) => {
  return axios.put(`/api/message/visit/${messageId}`);
};