import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	View,
	Text,
	Image,
	ListView,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';

import SingleConversation from './singleConversation';
import { fetchConversations } from '../redux/actions/conversations';

import styles from '../styles/conversations';
const chatIcon = require('../images/chat.png');

class Conversations extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
	}

	componentWillMount() {
		if (!this.props.conversationIds.length) {
			this.props.dispatch(fetchConversations());
			this.props.setInterval(() => {
				this.props.dispatch(fetchConversations());
			}, 2000);
		}
	}

	render() {
		const { conversationIds, conversations, isFetching } = this.props;
		let inbox = <ActivityIndicator />;
		if (!isFetching) {
			if (!conversationIds.length) {
				inbox = (
					<View><Text style={styles.description}>no conversations found</Text></View>
				);
			} else {
				const data = this.ds.cloneWithRows(Object.keys(conversations).map(item => item));
				inbox = (
					<ScrollView style={styles.container}>
						<ListView
							dataSource={data}
							renderRow={rowData => <SingleConversation message={conversations[rowData]} />}
							/>
					</ScrollView>
				);
			}
		}
		return (
			<View style={styles.container}>
				{ inbox }
				<Link
					style={styles.icon}
					to="/create"
					component={TouchableOpacity}
					activeOpacity={0.8}
					>
					<Image style={styles.iconImg} source={chatIcon} />
				</Link>
			</View>
		);
	}
}

Conversations.defaultProps = {
	conversations: {},
	conversationIds: [],
};

Conversations.propTypes = {
	conversations: PropTypes.instanceOf(Object).isRequired,
	conversationIds: PropTypes.instanceOf(Array).isRequired,
	isFetching: PropTypes.bool.isRequired,
	setInterval: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	const {
		isFetching,
		entities: { conversations },
		conversations: conversationIds,
		} = state.conversations;

	return {
		conversationIds,
		conversations,
		isFetching,
		token: state.app.token,
	};
}

export default ReactTimeout(withRouter(connect(mapStateToProps)(Conversations)));
