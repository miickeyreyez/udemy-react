import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer';
import Toolbar from '../../Components/Navigation/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerCloseHandler = () => this.setState({ showSideDrawer: false });

	sideDrawerToggleHandler = () => this.setState((prevState) => (
		{ showSideDrawer: !prevState.showSideDrawer }
	));

	render() {
		return (
			<Aux>
				<Toolbar click={this.sideDrawerToggleHandler} />
				<SideDrawer 
					isOpen={this.state.showSideDrawer}
					close={this.sideDrawerCloseHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout;
