import React from 'react';
import { Backdrop } from './Backdrop.module.css'

const backdrop = ({ show, click }) => (
  show ?
		<div
			className={Backdrop}
			onClick={click}>
		</div>
		: null
);

export default backdrop;
