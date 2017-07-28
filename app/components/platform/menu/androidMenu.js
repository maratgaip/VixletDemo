import React from 'react';
import PropTypes from 'prop-types';
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu';

const menuStyle = {
	optionsContainer: {
		padding: 5,
		paddingLeft: 10,
		marginTop: 30,
	},
};

const AndroidMenu = (props) => {
	const { menu: { text }, fn, value } = props;
	const menuOption = (
		<MenuOptions customStyles={menuStyle}>
			{ text.map((item, index) => (
				<MenuOption onSelect={() => fn(index)} text={item} key={item} />
			)) }
		</MenuOptions>
	);
	return (
		<Menu>
			<MenuTrigger text={value} />
			{ menuOption }
		</Menu>
	);
};

AndroidMenu.propTypes = {
	menu: PropTypes.shape({
		text: PropTypes.string.isRequired,
	}).isRequired,
	value: PropTypes.string.isRequired,
	fn: PropTypes.func.isRequired,
};

export default AndroidMenu;
