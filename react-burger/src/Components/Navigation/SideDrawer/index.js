import React from 'react';
import Logo from '../../Logo';
import Aux from '../../hoc/Aux';
import Backdrop from '../../UI/Backdrop';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
	const { SideDrawer, Logo: LogoClass, Open, Close } = classes;
	const { isOpen, close } = props;
	const attachedClasses =  isOpen ? [SideDrawer, Open] : [SideDrawer, Close];

	console.log(props, attachedClasses)

	return (
		<Aux>
			<Backdrop show={props.isOpen} clicked={close}  />
			<div className={attachedClasses.join(' ')}>
				<div className={LogoClass}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
}

export default sideDrawer;
