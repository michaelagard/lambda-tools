import React from 'react';
import { UnorderedList, ListItem } from './RandomizerOutput.styled';

function RandomizerOutput(props) {

	return (
		<UnorderedList>

			{typeof(props.shuffledNameArray) === "object" ? props.shuffledNameArray.map((object) =>
			<ListItem key={object.id}>{object.time} - {object.name} </ListItem>
			) : null}

		</UnorderedList>
	)
}

export default RandomizerOutput;