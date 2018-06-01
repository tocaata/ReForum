import {
  FETCH_USER_MESSAGES_START,
  FETCH_USER_MESSAGES_SUCCESS,
  FETCH_USER_MESSAGES_FAILURE,
  UPDATE_USER_MESSAGE_FAILURE,
  UPDATE_USER_MESSAGE_SUCCSEE,
} from './constants';

const initialState = {
  fetchingMessages: true,
  messages: {},
  error: null,
};

export const userMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_MESSAGES_START:
      return Object.assign({}, state, { fetchingMessages: true});

    case FETCH_USER_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        fetchingMessages: false,
        messages: action.payload,
        error: null,
      });

    case FETCH_USER_MESSAGES_FAILURE:
      return Object.assign({}, state, {
        fetchingMessages: false,
        error: 'Unable to fetch user messages, please check your user name.',
        messages: {},
      });

    case UPDATE_USER_MESSAGE_SUCCSEE:
      const index = state.messages.findIndex((m) => m._id == action.payload._id);
      let messages = state.messages;
      messages[index] = action.payload;

      return Object.assign({}, state, {
         messages: messages,
      });

    case UPDATE_USER_MESSAGE_FAILURE:
      return Object.assign({}, state, {
        error: 'Fail to update user message.',
      });

    default:
      return state;
  }
}