import React from 'react';
import Logo from '../../Logo';
import Aux from '../../hoc/Aux';
import Backdrop from '../../UI/Backdrop';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = ({ isAuthenticated, isOpen, close }) => {
	const { SideDrawer, Logo: LogoClass, Open, Close } = classes;
	const attachedClasses =  isOpen ? [SideDrawer, Open] : [SideDrawer, Close];

	return (
		<Aux>
			<Backdrop show={isOpen} click={close}  />
			<div className={attachedClasses.join(' ')}>
				<div className={LogoClass}>
					<Logo />
				</div>
				<nav>
					<NavigationItems isAuthenticated={isAuthenticated} />
				</nav>
			</div>
		</Aux>
	);
}

export default sideDrawer;
