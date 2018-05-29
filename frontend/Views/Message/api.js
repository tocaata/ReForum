
import axios from 'axios';

export const fetchUserMessageApi = (userSlug) => {
  return axios.get(`/api/user/messages/${userSlug}`);
};
