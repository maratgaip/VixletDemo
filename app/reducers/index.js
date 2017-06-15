import { combineReducers } from 'redux'
import conversations from './dataReducer'

const rootReducer = combineReducers({
  conversations
})

export default rootReducer