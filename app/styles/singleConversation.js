import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		padding: 12,
		flexDirection: 'row',
	},
	body: {
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
		color: '#777',
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
	check: {
		height: 25,
		width: 25,
		marginLeft: 10,
		marginTop: 10,
		marginRight: 20,
	},
});