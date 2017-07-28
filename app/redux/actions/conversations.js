import { normalize, schema } from 'normalizr';
import { fetchJsonV2 as fetchJson } from '@vixlet/fetch-helpers';

const usersSchema = new schema.Entity('users');
const conversationSchema = new schema.Entity('conversations', { members: [usersSchema] });

export const FETCHING_DATA = 'directmessage/FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'directmessage/FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'directmessage/FETCHING_DATA_FAILURE';

export const SET_CONVERSATIONS = 'directmessage/SET_CONVERSATIONS';
export const SET_LATEST_MESSAGES_BY_USER = 'directmessage/SET_LATEST_MESSAGES_BY_USER';
export const SET_SEARCHED_USERS = 'directmessage/SET_SEARCHED_USERS';
export const SET_MESSAGES = 'directmessage/SET_MESSAGES';
export const ADD_MESSAGE = 'directmessage/ADD_MESSAGE';

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

export const setLatestMessagesByUser = messagesByUser => ({
	type: SET_LATEST_MESSAGES_BY_USER,
	messagesByUser,
});

export const setMessagesForConversation = (conversationId, messages) => ({
	type: SET_MESSAGES,
	conversationId,
	messages,
});

export const addMessageToConversation = (conversationId, message) => ({
	type: ADD_MESSAGE,
	conversationId,
	message,
});

export const fetchConversations = () => (dispatch, getState) => {
	const state = getState();
	const {
		originApi,
		token,
		domain,
		} = state.app;
	const { conversations } = state.conversations;

	// only show loading indicator when we have no conversations
	if (!conversations || !conversations.length) {
		dispatch(getData());
	}

	return fetchJson(`${originApi}directmessage/conversation`, {
		headers: {
			authorization: `Bearer ${token}`,
			domain: domain.domainId,
		},
	})
		.then(({ data }) => {
			const filteredData = data.filter(conversation => conversation.lastMessageId);

			const messagesByUser = filteredData.reduce((messages, item) => {
				// track last message for each user
				item.members.forEach(({ id }) => {
					// TODO user is defined here, fix it
					// if (user.id !== id) {
					Object.assign(messages, { [id]: item.lastMessage });
					// }
				});

				return messages;
			}, {});

			dispatch(setLatestMessagesByUser(messagesByUser));
			const normalizedData = normalize(filteredData, [conversationSchema]);
			dispatch(setConversations(normalizedData));
		})
		.catch((err) => {
			console.log(err);
			dispatch(getDataFailure());
		});
};

export const createConversation = members => (dispatch, getState) => {
	const state = getState();
	const {
		originApi,
		token,
		domain,
		user,
		} = state.app;

	members.push(user.id);

	return fetchJson(`${originApi}v4/directmessage/conversation`, {
		method: 'POST',
		headers: {
			authorization: `Bearer ${token}`,
			domain: domain.domainId,
		},
		body: {
			members,
		},
	})
		.then((data) => {
			const normalizedData = normalize(data, conversationSchema);
			dispatch(setConversations({
				entities: normalizedData.entities,
			}));

			return data.id;
		});
};

export const deleteConversation = conversationId => (dispatch, getState) => {
	const state = getState();
	const {
		originApi,
		token,
		domain,
		} = state.app;
	return fetchJson(`${originApi}v4/directmessage/conversation/${conversationId}`, {
		method: 'DELETE',
		headers: {
			authorization: `Bearer ${token}`,
			domain: domain.domainId,
		},
	})
		.then(() => {
		});
};

export const fetchMessages = conversationId => (dispatch, getState) => {
	const state = getState();
	const {
		originApi,
		token,
		domain,
		} = state.app;

	return fetchJson(`${originApi}v4/directmessage/conversation/${conversationId}/message`, {
		headers: {
			authorization: `Bearer ${token}`,
			domain: domain.domainId,
		},
	})
		.then(({ data }) => dispatch(setMessagesForConversation(conversationId, data)));
};

export const sendMessage = (conversationId, message) => (dispatch, getState) => {
	const state = getState();
	const {
		originApi,
		token,
		domain,
		user,
		} = state.app;

	return fetchJson(`${originApi}v4/directmessage/conversation/${conversationId}/message`, {
		method: 'POST',
		headers: {
			authorization: `Bearer ${token}`,
			domain: domain.domainId,
		},
		body: {
			message,
		},
	})
		.then(() => dispatch(addMessageToConversation(conversationId,
			{ creatorId: user.id, message })));
};

export const setSearchedUsers = users => ({
	type: SET_SEARCHED_USERS,
	users,
});

export const searchUsers = query => (dispatch, getState) => {
	dispatch(getData());

	const state = getState();
	const {
		originApi,
		token,
		domain,
		} = state.app;

	// FIXME: we probably shouldn't be passing the query in without url encoding it
	return fetchJson(`${originApi}v4/search/user?query=${encodeURIComponent(query)}`, {
		headers: {
			authorization: `Bearer ${token}`,
			domain: domain.domainId,
		},
	})
		.then(({ data }) => {
			const normalizedData = normalize(data, [usersSchema]);
			dispatch(setSearchedUsers(normalizedData));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const blockUser = id => (dispatch, getState) => {
	// TODO correct api end point when api is ready.
	const state = getState();
	const {
		originApi,
		token,
		domain,
		} = state.app;
	return fetchJson(`${originApi}v4/directmessage/block`, {
		method: 'POST',
		headers: {
			authorization: `Bearer ${token}`,
			domain: domain.domainId,
		},
		body: {
			id,
		},
	})
		.then(() => {

		});
};
