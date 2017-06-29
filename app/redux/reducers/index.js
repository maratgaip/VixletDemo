import { combineReducers } from 'redux';
import conversations from './conversations';
import app from './app';

const rootReducer = combineReducers({
  app,
  conversations,
});

export default rootReducer;
