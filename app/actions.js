import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_USERS, FETCHING_USERS_SUCCESS, FETCHING_USERS_FAILURE } from './constants'
import getConversations from './api'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    // here we make api call to get conversations
    getConversations()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}


/// get users
export function getUsers() {
  return {
    type: FETCHING_USERS
  }
}

export function getUsersSuccess(data) {
  return {
    type: FETCHING_USERS_SUCCESS,
    data,
  }
}

export function getUsersFailure() {
  return {
    type: FETCHING_USERS_FAILURE
  }
}
export function fetchUsers(text) {
  return (dispatch) => {
    dispatch(getUsers())
    // here we make api call to search user with typed text
    // we need to use debounce like we r using in search user module in webapp
    getConversations()
      .then((data) => {
        dispatch(getUsersSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}