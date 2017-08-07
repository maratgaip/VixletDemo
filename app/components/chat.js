import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
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
import PopUp from './menu/popup';
import { fetchMessages, sendMessage, deleteConversation, blockUser } from '../redux/actions/conversations';
const backArrowImage = require('../images/left-arrow.png');
import styles from '../styles/chat';

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
		this.props.setInterval(() => {
			this.props.dispatch(fetchMessages(this.props.match.params.id));
		}, 3000);
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
   debugger;
		// TODO use deeplinking to send user id back to native app
		console.log('viewUser', this.props.myUserId);
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
		this.setState({ marginBottom: keyboardInfo.startCoordinates.height + 40 });
	}

	menuClicked(index) {
		const { match: { params } } = this.props;
		const { id } = this.getUserInfo();
		switch (index) {
			case 0:
				this.viewUser();
				break;
			case 1:
				this.props.dispatch(deleteConversation(params.id));
				break;
			case 2:
				this.props.dispatch(blockUser(id));
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
					<PopUp menu={menu} value={username} fn={this.menuClicked} />
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
	conversations: PropTypes.instanceOf(Object).isRequired,
	setInterval: PropTypes.func.isRequired,
	myUserId: PropTypes.string.isRequired,
	users: PropTypes.instanceOf(Object).isRequired,
	messages: PropTypes.instanceOf(Object).isRequired,
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
