import React from 'react';
import { UnorderedList, ListItem, TimeItem } from './RandomizerOutput.styled';

function RandomizerOutput(props) {

	return (
		<UnorderedList>

			{typeof(props.shuffledNameArray) === "object" ? props.shuffledNameArray.map((object) =>
			<ListItem key={object.id}><TimeItem>{object.time.hour}:{object.time.minute}</TimeItem> - {object.name} </ListItem>
			) : null}

		</UnorderedList>
	)
}

export default RandomizerOutput;