import {
  FETCH_USER_MESSAGES_START,
  FETCH_USER_MESSAGES_SUCCESS,
  FETCH_USER_MESSAGES_FAILURE,
  UPDATE_USER_MESSAGE_FAILURE,
  UPDATE_USER_MESSAGE_SUCCESS,

  DELETE_MESSAGES_START,
  DELETE_MESSAGES_SUCCESS,
  DELETE_MESSAGES_FAILURE,
} from './constants';

import Message from 'Libs/Message';

const initialState = {
  fetchingMessages: true,
  messages: {},
  error: null,
  deletingMessage: null,
};

export const userMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_MESSAGES_START:
      return Object.assign({}, state, { fetchingMessages: true});

    case FETCH_USER_MESSAGES_SUCCESS:
      let msgs = action.payload.map((m) => Message.toObject(m));

      return Object.assign({}, state, {
        fetchingMessages: false,
        messages: msgs,
        error: null,
      });

    case FETCH_USER_MESSAGES_FAILURE:
      return Object.assign({}, state, {
        fetchingMessages: false,
        error: 'Unable to fetch user messages, please check your user name.',
        messages: {},
      });

    case UPDATE_USER_MESSAGE_SUCCESS:
      const index = state.messages.findIndex((m) => m.id == action.payload._id);
      let messages = state.messages;
      messages[index] = action.payload;

      return Object.assign({}, state, {
         messages: messages,
      });

    case UPDATE_USER_MESSAGE_FAILURE:
      return Object.assign({}, state, {
        error: 'Fail to update user message.',
      });

    case DELETE_MESSAGES_START:
      return Object.assign({}, state, {
        deletingMessage: action.payload,
      });

    case DELETE_MESSAGES_SUCCESS:
      const matched = state.messages.findIndex((m) => m.id == action.payload);
      state.messages.splice(matched, 1);

      return Object.assign({}, state, {
        deletingMessage: null,
        messages: state.messages,
      });

    case DELETE_MESSAGES_FAILURE:
      return Object.assign({}, state, {
        deletingMessage: null,
        error: 'Fail to delete user message.',
      });

    default:
      return state;
  }
}