import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';

class Modal extends Component {
	showComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}

	render () {
    const { show, modalClosed, children } = this.props;

		return (
			<Aux>
				<Backdrop show={show} click={modalClosed} />
				<div 
					className={classes.Modal}
					style={
						{
							transform: show ? 'translateY(0)' : 'translateY(-100vh)',
							opacity: show ? 1 : 0,
						}
					}>
					{ children }
				</div>
			</Aux>
		);
	}
}

export default Modal;
