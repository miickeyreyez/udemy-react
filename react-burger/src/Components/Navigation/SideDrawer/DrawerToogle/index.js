import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {
	return <div class={classes.DrawerToggle} onClick={props.click}>
		<div></div>
		<div></div>
		<div></div>
	</div>;
}

export default drawerToggle;