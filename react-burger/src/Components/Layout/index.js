import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { isAuthenticated } = this.props;
		return (
			<Aux>
				<Toolbar
          isAuthenticated={isAuthenticated}
          click={this.sideDrawerToggleHandler} />
				<SideDrawer
          isAuthenticated={isAuthenticated}
					isOpen={this.state.showSideDrawer}
					close={this.sideDrawerCloseHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.idToken,
});

export default connect(mapStateToProps)(Layout);
