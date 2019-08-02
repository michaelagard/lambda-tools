import React from 'react';
import PropTypes from 'prop-types';

function Output(props) {
  return (
    <div className="output">
      {props.output.map(name =>
        <li key={name}>{name}</li>)}
    </div>
  );
}

Output.propTypes = {
  output: PropTypes.array
};

export default Output;
