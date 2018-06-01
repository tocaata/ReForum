/**
 * user profile apis
 */

import axios from 'axios';

export const fetchUserProfileApi = (userSlug) => {
  return axios.get(`/api/user/profile/${userSlug}`);
};

export const visitMessageApi = (messageId) => {
  return axios.put(`/api/message/${messageId}`);
}