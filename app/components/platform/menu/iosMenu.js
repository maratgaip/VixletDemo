import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	ActionSheetIOS,
} from 'react-native';

const IosMenu = (props) => {
	const { menu: { text, cancelIndex }, fn, value } = props;
	const showActionSheet = () => {
		ActionSheetIOS.showActionSheetWithOptions({
				options: text,
				cancelButtonIndex: cancelIndex
			},
			(index) => fn(index));
	};
	return <Text onPress={showActionSheet}>{ value }</Text>
};

IosMenu.propTypes = {
	menu: PropTypes.shape({
		cancelIndex: PropTypes.number.isRequired,
		text: PropTypes.string.required
	}),
	value: PropTypes.string.isRequired,
	fn: PropTypes.func.isRequired,
};

export default IosMenu;