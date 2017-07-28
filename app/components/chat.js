import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Keyboard,
	Button,
	Alert,
	TouchableOpacity,
	ScrollView,
	Image,
} from 'react-native';
import {
	Link,
	withRouter,
} from 'react-router-native';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';
import Menu from './platform/menu';
import { fetchMessages, sendMessage, deleteConversation } from '../redux/actions/conversations';

const backArrowImage = require('../assets/left-arrow.png');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		backgroundColor: '#FFFFFF',
	},
	me: {
		marginTop: 10,
		alignSelf: 'flex-end',
		overflow: 'visible',
		position: 'relative',
	},
	friend: {
		marginTop: 10,
		alignSelf: 'flex-start',
		overflow: 'visible',
		position: 'relative',
	},
	textMe: {
		fontSize: 16,
		color: '#484E55',
		padding: 14,
		backgroundColor: '#F8F9FA',
		borderRadius: 5,
		overflow: 'hidden',
	},
	arrowMe: {
		width: 0,
		height: 0,
		borderTopColor: 'transparent',
		borderTopWidth: 6,
		borderBottomColor: 'transparent',
		borderBottomWidth: 6,
		borderLeftColor: '#F8F9FA',
		borderLeftWidth: 6,
		position: 'absolute',
		top: '50%',
		right: -4,
		zIndex: 1,
		marginTop: -6,
	},
	textFriend: {
		fontSize: 16,
		color: '#fff',
		padding: 14,
		backgroundColor: '#ADB5BC',
		borderRadius: 5,
		overflow: 'hidden',
	},
	arrowFriend: {
		width: 0,
		height: 0,
		borderTopColor: 'transparent',
		borderTopWidth: 6,
		borderBottomColor: 'transparent',
		borderBottomWidth: 6,
		borderRightColor: '#ADB5BC',
		borderRightWidth: 6,
		position: 'absolute',
		top: '50%',
		left: -4,
		zIndex: 1,
		marginTop: -6,
	},
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	input: {
		height: 40,
		borderTopColor: '#868E95',
		flex: 1,
	},
	back: {
		paddingLeft: 10,
	},
	backArrow: {
		width: 13,
		height: 23,
	},
	infoIcon: {
		width: 23,
		height: 23,
		marginRight: 10,
	},
	username: {
		fontSize: 16,
		color: '#FFFFFF',
		alignSelf: 'auto',
	},
	header: {
		right: 0,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: '#868E95',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	footer: {
		flex: 1,
		alignSelf: 'center',
		right: 0,
		left: 0,
		position: 'absolute',
		borderTopColor: '#B9B9B9',
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
	},
	scrollView: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 20,
	},
	dateHolder: {
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	date: {
		color: '#868E95',
	},
});

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			listHeight: 0,
			marginBottom: 40,
			scrollViewHeight: 0,
			refreshing: false,
		};
		this.onSend = this.onSend.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
		this.keyboardWillShow = this.keyboardWillShow.bind(this);
		this.keyboardWillHide = this.keyboardWillHide.bind(this);
		this.getUserInfo = this.getUserInfo.bind(this);
		this.viewUser = this.viewUser.bind(this);
		this.menuClicked = this.menuClicked.bind(this);
		this.userBlocked = this.userBlocked.bind(this);
	}
	componentWillMount() {
		Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
		Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
	}

	componentDidMount() {
		this.props.dispatch(fetchMessages(this.props.match.params.id));
		// TODO: use SSE instead of polling
		// this.props.setInterval(() => {
		this.props.dispatch(fetchMessages(this.props.match.params.id));
		// }, 3000);
	}

	componentDidUpdate() {
		// calculate the bottom
		const bottomOfList = this.state.listHeight - this.state.scrollViewHeight;
		// tell the scrollView component to scroll to it
		this.scrollView.scrollTo({ y: bottomOfList + 20, animated: false });
	}

	componentWillUnmount() {
		Keyboard.removeListener('keyboardWillShow', this.keyboardWillShow);
		Keyboard.removeListener('keyboardWillHide', this.keyboardWillHide);
	}

	onSend() {
		const { text } = this.state;
		if (text.length) {
			this.props.dispatch(sendMessage(this.props.match.params.id, text));
			this.setState({ text: '' });
		}
	}

	onRefresh() {
		this.setState({ refreshing: true });
		this.props.dispatch(fetchMessages(this.props.match.params.id))
			.catch(err => console.log(err))
			.then(() => {
				setTimeout(() => {
					this.setState({ refreshing: false });
				}, 500);
			});
	}

	getUserInfo() {
		const conversation = this.props.conversations[this.props.match.params.id];
		if (!conversation) {
			return '';
		}

		const filteredMembers = conversation.members.filter(member => member !== this.props.myUserId);

		const user = this.props.users[filteredMembers[0]];
		if (user) {
			return user;
		}

		console.log('Error finding user in users store');
		return '';
	}

	viewUser() {
		console.log('viewUser', this.props.match.params.id);
	}

	userBlocked(data) {
		Alert.alert(
			'Blocked',
			data.message,
			[
				{ text: 'OK', onPress: () => this.props.history.goBack() },
			],
			{ cancelable: false }
		);
	}

	keyboardWillHide() {
		this.setState({ marginBottom: 40 });
	}

	keyboardWillShow(keyboardInfo) {
		// console.log('keyboardInfo', keyboardInfo);
		this.setState({ marginBottom: keyboardInfo.startCoordinates.height + 40 });
	}

	menuClicked(index) {
		const { id } = this.getUserInfo();
		const { match: { params } } = this.props;
		switch (index) {
			case 0:
				this.viewUser(id);
				break;
			case 1:
				this.props.dispatch(deleteConversation(params.id));
				break;
			case 2:
				// this.props.dispatch(blockUser(id));
				break;
			default:
				break;
		}
	}

	renderRow(message, index) {
		const myMessage = (this.props.myUserId === message.creatorId);

		const viewStyle = myMessage ? styles.me : styles.friend;
		const textStyle = myMessage ? styles.textMe : styles.textFriend;
		const arrowStyle = myMessage ? styles.arrowMe : styles.arrowFriend;
		return (
			<View style={viewStyle} key={index}>
				<View style={arrowStyle} />
				<Text style={textStyle}>{message.message}</Text>
			</View>
		);
	}

	render() {
		const messages = this.props.messages[this.props.match.params.id] || [];
		const { username } = this.getUserInfo();
		const menu = { text: [`View ${username}`, 'Delete Conversation', `Block ${username}`, 'Cancel'], cancelIndex: 3 };

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Link
						style={styles.back}
						to="/conversations"
						component={TouchableOpacity}
						activeOpacity={0.8}
						>
						<Image style={styles.backArrow} source={backArrowImage} />
					</Link>
					<Menu menu={menu} value={username} fn={this.menuClicked} />
					<View style={styles.infoIcon} />
				</View>
				<View style={styles.dateHolder}>
					<Text style={styles.date}>Today</Text>
				</View>
				<ScrollView
					style={[styles.scrollView, { marginBottom: this.state.marginBottom }]}
					ref={(ref) => {
            this.scrollView = ref;
          }}
					onContentSizeChange={(contentWidth, contentHeight) => {
            this.setState({ listHeight: contentHeight });
          }}
					onLayout={(e) => {
            const height = e.nativeEvent.layout.height;
            this.setState({ scrollViewHeight: height });
          }}
					>
					{messages.map((message, index) => this.renderRow(message, index))}
				</ScrollView>
				<View style={[styles.footer, { bottom: this.state.marginBottom - 40 }]} >
					<TextInput
						style={styles.input}
						placeholder={'Type a message'}
						onChangeText={text => this.setState({ text })}
						value={this.state.text}
						onSubmitEditing={Keyboard.dismiss}
						/>
					<Button color="#868E95" onPress={this.onSend} title="Send" />
				</View>
			</View>
		);
	}
}

Chat.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
	history: PropTypes.shape({
		goBack: PropTypes.func.isRequired,
	}).isRequired,
	dispatch: PropTypes.func.isRequired,
	conversations: PropTypes.instanceOf(String).isRequired,
	myUserId: PropTypes.string.isRequired,
	users: PropTypes.instanceOf(String).isRequired,
	messages: PropTypes.instanceOf(String).isRequired,
};

function mapStateToProps(state) {
	return {
		messages: state.conversations.messages,
		conversations: state.conversations.entities.conversations,
		myUserId: state.app.user.id,
		users: state.conversations.entities.users,
	};
}

export default ReactTimeout(withRouter(connect(mapStateToProps)(Chat)));
