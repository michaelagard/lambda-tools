import React from 'react';
function Button(props) {
	return (
		<button type="button" onClick={props.onClickAction}>{props.title}</button>
	)
}

export default Button;