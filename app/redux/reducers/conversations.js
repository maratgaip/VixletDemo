import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  SET_CONVERSATIONS,
  SET_SEARCHED_USERS,
  SET_MESSAGES,
  ADD_MESSAGE,
  SET_LATEST_MESSAGES_BY_USER,
} from '../actions/conversations';

const initialState = {
  entities: {
    users: {},
    conversations: {},
  },
  conversations: [],
  searchedUsers: [],
  messages: {},
  latestMessagesByUser: {},
  dataFetched: false,
  isFetching: false,
  error: false,
};

export default function conversations(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case SET_LATEST_MESSAGES_BY_USER:
      return {
        ...state,
        latestMessagesByUser: Object.assign({}, state.latestMessagesByUser, action.messagesByUser),
      };
    case SET_CONVERSATIONS:
      console.log('SET_CONVERSATIONS')
      if (!action.conversations.entities.users || !action.conversations.entities.conversations) {
        return {
          ...state,
          isFetching: false};
      }

      return {
        ...state,
        isFetching: false,
        conversations: action.conversations.result || state.conversations,
        entities: {
          conversations: Object.assign(
            {},
            state.entities.conversations,
            action.conversations.entities.conversations
          ),
          users: Object.assign(
            {},
            state.entities.users,
            action.conversations.entities.users
          ),
        },
      };
    case SET_SEARCHED_USERS:
      return {
        ...state,
        isFetching: false,
        searchedUsers: action.users.result,
        entities: {
          users: Object.assign({}, state.entities.users, action.users.entities.users),
          conversations: state.entities.conversations,
        },
      };
    case SET_MESSAGES:
      // i think we have api bug message is not coming api so it's cleaning all messages.
      // when api fixed remove of logic
      if (action.messages) {
        return {
          ...state,
          messages: Object.assign(
            {},
            state.messages,
            { [action.conversationId]: action.messages.reverse() }
          ),
        };
      }
      return state;
    case ADD_MESSAGE:
      const existingMessages = state.messages[action.conversationId] || [];
      const newMessages = [...existingMessages, action.message];

      return {
        ...state,
        messages: Object.assign({}, state.messages, { [action.conversationId]: newMessages }),
      };
    default:
      return state;
  }
}
