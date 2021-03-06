import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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