import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-native';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { createConversation } from '../redux/actions/conversations';

const styles = StyleSheet.create({
	container: {
		padding: 12,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	username: {
		fontSize: 16,
	},
	created: {
		fontSize: 16,
	},
	title: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	content: {
		flex: 1,
	},
	text: {
		fontSize: 15,
		color: '#b2b2b2',
	},
	unread: {
		width: 8,
		height: 8,
		marginTop: 20,
		marginLeft: 5,
		borderRadius: 5,
		backgroundColor: '#000',
	},
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginRight: 10,
	},
});

class UserRow extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.dispatch(createConversation([this.props.id]))
			.then((id) => {
				this.props.history.push(`/conversation/${id}`);
			})
			.catch(err => console.log(err));
	}

	render() {
		const { id, username, avatar: { small }, latestMessagesByUser } = this.props;
		const message = latestMessagesByUser[id] || '';

		return (
			<TouchableHighlight onPress={this.handleClick} underlayColor="#ddd" >
				<View style={styles.container} >
					<Image source={{ uri: small }} style={styles.avatar} />
					<View style={styles.content}>
						<View style={styles.title}>
							<Text style={styles.username}>{ username }</Text>
						</View>
						<View style={styles.title}>
							<Text style={styles.text}>{ message }</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
}

UserRow.propTypes = {
	dispatch: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	latestMessagesByUser: PropTypes.instanceOf(Object).isRequired,
	avatar: PropTypes.shape({
		small: PropTypes.string.isRequired,
	}).isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
};


function mapStateToProps(state) {
	const { latestMessagesByUser } = state.conversations;
	return {
		latestMessagesByUser,
	};
}

export default withRouter(connect(mapStateToProps)(UserRow));
