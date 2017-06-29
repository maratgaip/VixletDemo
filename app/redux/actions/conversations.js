export const FETCHING_DATA = 'directmessage/FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'directmessage/FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'directmessage/FETCHING_DATA_FAILURE';

export const SET_CONVERSATIONS = 'directmessage/SET_CONVERSATIONS';
export const SET_USERS = 'directmessage/SET_USERS';

export function getData() {
  return {
    type: FETCHING_DATA,
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  };
}

export const setConversations = conversations => ({
  type: SET_CONVERSATIONS,
  conversations,
});

export const fetchConversations = () => (dispatch, getState) => {
  dispatch(getData());

  const state = getState();
  const {
    originApi,
    token,
    user,
    domain,
  } = state.app;

  return fetch(`${originApi}/directmessage/user/${user.id}/conversation`, {
    headers: {
      authorization: `Bearer ${token}`,
      domain: domain.domainId,
    },
  })
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(new Error('Bad response from conversations'));
    }

    return res.json();
  })
  .then(({ data }) => dispatch(setConversations(data)))
  .catch((err) => {
    console.log(err);
    dispatch(getDataFailure());
  });
};

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

export const fetchUsers = query => (dispatch, getState) => {
  dispatch(getData());

  const state = getState();
  const {
    originApi,
    token,
    domain,
  } = state.app;

  // FIXME: we probably shouldn't be passing the query in without url encoding it
  return fetch(`${originApi}/search/user?query=${query}`, {
    headers: {
      authorization: `Bearer ${token}`,
      domain: domain.domainId,
    },
  })
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(new Error('Bad response from conversations'));
    }

    return res.json();
  })
  .then(({ data }) => dispatch(setUsers(data)))
  .catch((err) => {
    console.log(err);
  });
};
