import React from 'react';

function RandomizerOutput(props) {

	return (
		<div className="randomizer-output">

			{typeof(props.shuffledNameArray) === "object" ? props.shuffledNameArray.map((name) =>
			<li key={name}>{name}</li>
			) : null}

		</div>
	)
}

export default RandomizerOutput;