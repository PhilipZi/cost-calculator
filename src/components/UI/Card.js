/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';


function Card(props) {
	const classes = 'card ' + props.className;
	return (
		<div className={classes}>{props.children}</div>
	);
}

export default Card;