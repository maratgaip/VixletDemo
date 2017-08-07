import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	cancel: {
		padding: 10,
		width: 100,
		position: 'absolute',
		zIndex: 1000,
	},
	title: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	headerText: {
		color: '#fff',
	},
	input: {
		height: 40,
		paddingLeft: 35,
		fontSize: 14,
	},
	searchText: {
		paddingLeft: 10,
		paddingTop: 11,
		fontSize: 14,
		position: 'absolute',
		color: '#878f96',
	},
	suggested: {
		paddingLeft: 10,
		paddingTop: 5,
		color: '#858d94',
	},
	search: {
		height: 40,
		backgroundColor: '#eee',
	},
	content: {
		justifyContent: 'center',
		flexDirection: 'row',
		paddingTop: 20,
	},
	header: {
		height: 40,
		paddingTop: 10,
		backgroundColor: '#868e95',
	},
});