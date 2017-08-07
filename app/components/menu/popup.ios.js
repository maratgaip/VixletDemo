import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	ActionSheetIOS,
} from 'react-native';

const textStyle = {
	textAlign: 'center',
	color: '#fff',
	fontSize: 16,
};

const PopUp = (props) => {
	const { menu: { text, cancelIndex }, fn, value } = props;
	const showActionSheet = () => {
		ActionSheetIOS.showActionSheetWithOptions({
				options: text,
				cancelButtonIndex: cancelIndex,
			},
				index => fn(index));
	};
	return <Text style={textStyle} onPress={showActionSheet}>{ value }</Text>;
};

PopUp.propTypes = {
	menu: PropTypes.shape({
		cancelIndex: PropTypes.number.isRequired,
		text: PropTypes.instanceOf(Array).isRequired,
	}).isRequired,
	value: PropTypes.string.isRequired,
	fn: PropTypes.func.isRequired,
};

export default PopUp;