import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';

export const loadMessages = messages => {
	return {
		type: LOAD_MESSAGES,
		messages
	}
}

export const remove = id => {
	return {
		type: REMOVE_MESSAGE,
		id
	}
}

export const removeMessage = (userId, messageId) => {
	return dispatch => {
		apiCall('delete', `/api/users/${userId}/messages/${messageId}`)
			.then(() => dispatch(remove(messageId)))
			.catch(err => dispatch(addError(err.message)));
	}
}

export const fetchMessages = () => {
	return dispatch => {
		apiCall('get', '/api/messages')
			.then(res => dispatch(loadMessages(res)))
			.catch(err => dispatch(addError(err.message)));
	}
}

export const postNewMessage = text => {
	return (dispatch, getState) => {
		const id = getState().currentUser.user.id;
		apiCall('post', `/api/users/${id}/messages`, {text})
			.then(res => {})
			.catch(err => dispatch(addError(err.message)));
	}
}