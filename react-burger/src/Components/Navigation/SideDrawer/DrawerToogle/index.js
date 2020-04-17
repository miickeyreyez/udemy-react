import React from 'react';
import { DrawerToggle } from './DrawerToggle.module.css';

const drawerToggle = ({ click }) => {
	return <div className={DrawerToggle} onClick={click}>
		<div></div>
		<div></div>
		<div></div>
	</div>;
}

export default drawerToggle;
