import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	ActivityIndicator,
	Text,
	TextInput,
	ListView,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { searchUsers } from '../redux/actions/conversations';
import UserRow from './userRow';
import styles from '../styles/create';

class Create extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			search: '',
		};
		this.runQuery = this.runQuery.bind(this);
		this.onChange = debounce(text => this.runQuery(text), 500, { leading: false, trailing: true });
	}

	runQuery(text) {
		this.setState({ search: text });
		if (text.length) {
			this.props.dispatch(searchUsers(text));
		}
	}

	render() {
		const { isFetching, searchedUsers, users, userIds } = this.props;
		const { search } = this.state;
		let suggested = <Text style={styles.suggested}>Suggested</Text>;

		if (search.length) {
			suggested = null;
		}

		let data = <View style={styles.content}><ActivityIndicator /></View>;

		if (!isFetching) {
			if (!searchedUsers.length && search.length) {
				data = <View style={styles.content}><Text>No results found</Text></View>;
			} else {
				// if no searched data get conversation user data.
				const userData = searchedUsers.length ? searchedUsers : userIds;
				const dataSource = this.ds.cloneWithRows(userData.map(n => users[n]));
				data = (
					<ScrollView style={styles.scrollView}>
						<ListView
							dataSource={dataSource}
							enableEmptySections
							renderRow={rowData => <UserRow {...rowData} />}
							/>
					</ScrollView>
				);
			}
		}
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.cancel}>
						<Link
							to="/conversations"
							component={TouchableOpacity}
							activeOpacity={0.8}
							>
							<Text style={styles.headerText}>Cancel</Text>
						</Link>
					</View>
					<View style={styles.title}>
						<Text style={styles.headerText}>New Message</Text>
					</View>
				</View>
				<View style={styles.search}>
					<Text style={styles.searchText}>To:</Text>
					<TextInput
						style={styles.input}
						placeholder={'Search for a user'}
						onChangeText={this.onChange}
						/>
				</View>
				{ suggested }
				{ data }
			</View>
		);
	}
}

Create.defaultProps = {
	searchedUsers: [],
	userIds: [],
	users: {},
};

Create.propTypes = {
	dispatch: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	searchedUsers: PropTypes.instanceOf(Object).isRequired,
	userIds: PropTypes.instanceOf(Array).isRequired,
	users: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps(state) {
	const {
		entities: {
			users,
			},
		isFetching,
		searchedUsers,
		} = state.conversations;

	const userIds = Object.keys(users).filter(id => id !== state.app.user.id);
	return {
		users,
		userIds,
		searchedUsers,
		isFetching,
	};
}

export default withRouter(connect(mapStateToProps)(Create));
