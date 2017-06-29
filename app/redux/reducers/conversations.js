import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  SET_CONVERSATIONS,
  SET_USERS,
} from '../actions/conversations';

const initialState = {
  data: [],
  users: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

export default function conversations(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        //data: [],
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
    case SET_CONVERSATIONS:
      return {
        ...state,
        isFetching: false,
        data: action.conversations,
      };
    case SET_USERS:
      return {
        ...state,
        isFetching: false,
        users: action.users,
      };
    default:
      return state;
  }
}
