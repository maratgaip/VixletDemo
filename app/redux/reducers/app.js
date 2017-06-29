import {
  SET_DATA,
} from '../actions/app';

const initialState = {
  domain: null,
  initialView: 'conversations',
  originApi: 'https://api.vixletinternal.com/',
  token: '',
  user: null,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return action.data;
    default:
      return state;
  }
}
