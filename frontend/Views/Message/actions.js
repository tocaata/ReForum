import {
  FETCH_USER_MESSAGES_START,
  FETCH_USER_MESSAGES_SUCCESS,
  FETCH_USER_MESSAGES_FAILURE,
  UPDATE_USER_MESSAGE_FAILURE,
  UPDATE_USER_MESSAGE_SUCCSEE,
} from './constants';

import {
  fetchUserMessageApi,
} from './api';


/**
 * fetch the users messages from the server
 * @param  {String} userSlug
 * @return {action}
 */
export const fetchUserMessages = (userSlug) => {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_USER_MESSAGES_START });

    fetchUserMessageApi(userSlug).then(
      data => {
        if (data.data.error) {
          dispatch({ type: FETCH_USER_MESSAGES_FAILURE });
        } else {
          dispatch({ type: FETCH_USER_MESSAGES_SUCCESS, payload: data.data });
        }
      },
      error => dispatch({ type: FETCH_USER_MESSAGES_FAILURE })
    );
  }
};


export const handleVisit = (messageId) => {
  return (dispatch, getState) => {
    visitMessageApi(messageId).then(
      data => {
        if (data.data.error) {
          dispatch({ type: UPDATE_USER_MESSAGE_FAILURE });
        } else {
          dispatch({ type: UPDATE_USER_MESSAGE_SUCCSEE, payload: data.data });
        }
      },
      error => {
        dispatch({ type: UPDATE_USER_MESSAGE_FAILURE });
      }
    );
  }
};