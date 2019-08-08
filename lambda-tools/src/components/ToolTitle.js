import React from 'react';

function ToolTitle(props) {

	return (
        <div className="title">
          <h2>{props.titleData.title}</h2>
          <p>{props.titleData.titleDescription}</p>
        </div>
	)
}

export default ToolTitle;