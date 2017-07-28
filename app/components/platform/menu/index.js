import React from 'react';
import PropTypes from 'prop-types';
import IosMenu from './iosMenu';
import AndroidMenu from './androidMenu';

const Menu = (props, context) => {
	const { platform } = context;
	if (platform==='ios') {
		return <IosMenu { ...props }/>
	}
	return <AndroidMenu { ...props }/>
};

Menu.contextTypes = {
	platform: PropTypes.string.isRequired
};

export default Menu;