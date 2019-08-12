import React from 'react';
import { UnorderedList, ListItem } from './RandomizerOutput.styled';

function RandomizerOutput(props) {

	return (
		<UnorderedList>

			{typeof(props.shuffledNameArray) === "object" ? props.shuffledNameArray.map((name) =>
			<ListItem key={name}>{name}</ListItem>
			) : null}

		</UnorderedList>
	)
}

export default RandomizerOutput;