import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside';

const MessageTimeLine = props => {
	const {username, profileImageUrl} = props;
	
	return (
		<div className='row'>
			<UserAside username={username} profileImageUrl={profileImageUrl}/>
			<MessageList />
		</div>
	);
};

export default MessageTimeLine;