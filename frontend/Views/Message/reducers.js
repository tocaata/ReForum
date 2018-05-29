import {
  FETCH_USER_MESSAGES_START,
  FETCH_USER_MESSAGES_SUCCESS,
  FETCH_USER_MESSAGES_FAILURE
} from './constants';

const initialState = {
  fetchingMessages: true,
  messages: {},
  error: null,
};

export const userMessageReducer = (state = initialState, action) => {
  switch(action) {
    case FETCH_USER_MESSAGES_START:
      return Object.assign({}, { fetchingMessages: true});

    case FETCH_USER_MESSAGES_SUCCESS:
      console.log(action.payload.messages);
      return Object.assign({}, {
        fetchingMessages: false,
        messages: action.payload.messages,
      });

    case FETCH_USER_MESSAGES_FAILURE:
      return Object.assign({}, {
        fetchingMessages: false,
        error: 'Unable to fetch user messages, please check your user name.',
        messages: {},
      });

    default:
      return state;
  }
}