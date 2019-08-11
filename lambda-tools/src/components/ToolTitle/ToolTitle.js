import React from 'react';
import { Wrapper, TitleH2, TitleP } from './ToolTitle.styled';

function ToolTitle(props) {

	return (
        <Wrapper>
          <TitleH2>{props.titleData.title}</TitleH2>
          <TitleP>{props.titleData.titleDescription}</TitleP>
        </Wrapper>
	)
}

export default ToolTitle;