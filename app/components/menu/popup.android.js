import React from 'react';
import PropTypes from 'prop-types';
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu';

const style = {
	menuStyle: {
		optionsContainer: {
			padding: 5,
			paddingLeft: 10,
			marginTop: 30,
		},
	},
	triggerStyle: {
		triggerText: {
			textAlign: 'center',
			color: '#fff',
			fontSize: 16,
		}
	},
};

const PopUp = (props) => {
	const { menu: { text }, fn, value } = props;
	const menuOption = (
		<MenuOptions customStyles={style.menuStyle}>
			{ text.map((item, index) => (
				<MenuOption onSelect={() => fn(index)} text={item} key={item} />
			)) }
		</MenuOptions>
	);
	return (
			<Menu>
				<MenuTrigger customStyles={style.triggerStyle} text={value} />
				{ menuOption }
			</Menu>
	);
};

PopUp.propTypes = {
	menu: PropTypes.shape({
		text: PropTypes.instanceOf(Object).isRequired,
	}).isRequired,
	value: PropTypes.string.isRequired,
	fn: PropTypes.func.isRequired,
};

export default PopUp;
