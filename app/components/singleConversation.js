import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { distanceInWordsToNow } from 'date-fns';
import Swipeout from 'react-native-swipeout';
import {
	View,
	Text,
	Image,
} from 'react-native';
import { deleteConversation } from '../redux/actions/conversations';
import styles from '../styles/singleConversation';

class Conversation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			check: false,
		};
		this.getUserInfo = this.getUserInfo.bind(this);
		this.deleteConversation = this.deleteConversation.bind(this);
	}

	getUserInfo() {
		const { message } = this.props;
		if (!message) {
			return '';
		}
		const filteredMembers = message.members.filter(member => member !== this.props.myUserId);
		const user = this.props.users[filteredMembers[0]];
		if (user) {
			return user;
		}
		console.log('Error finding user in users store');
		return '';
	}

	deleteConversation(id) {
		return function () {
			this.props.dispatch(deleteConversation(id));
		}.bind(this);
	}

	render() {
		const {
			message: {
				id,
				lastMessage: message,
				lastMessageTimestamp,
				unread,
				},
			} = this.props;

		const { username, avatar: { original: avatar } } = this.getUserInfo();
		const swipeBtns = [{
			text: 'Delte',
			backgroundColor: 'red',
			underlayColor: '#ddd',
			onPress: this.deleteConversation(id),
		},
			{
				text: 'Block',
				backgroundColor: 'grey',
				underlayColor: '#ddd',
				onPress: () => {},
			}];
		return (
			<View style={styles.body}>
				<Swipeout
					right={swipeBtns}
					autoClose
					underlayColor="#ddd"
					backgroundColor="transparent"
					>
					<Link to={`/conversation/${id}`} underlayColor="#ddd">
						<View style={styles.container}>
							<Image source={{ uri: avatar }} style={styles.avatar} />
							<View style={styles.content}>
								<View style={styles.title}>
									<Text style={styles.username}>{ username }</Text>
									<Text style={styles.created}>{ !!lastMessageTimestamp && `${distanceInWordsToNow(lastMessageTimestamp)} ago` }</Text>
								</View>
								<Text style={styles.text}>{ message }</Text>
							</View>
							{ unread && <View style={styles.unread} /> }
						</View>
					</Link>
				</Swipeout>
			</View>
		);
	}
}

Conversation.propTypes = {
	users: PropTypes.instanceOf(Object).isRequired,
	myUserId: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired,
	message: PropTypes.shape({
		id: PropTypes.string.isRequired,
	}).isRequired,
};

function mapStateToProps(state) {
	const { users } = state.conversations.entities;
	return {
		myUserId: state.app.user.id,
		users,
	};
}

export default connect(mapStateToProps)(Conversation);
