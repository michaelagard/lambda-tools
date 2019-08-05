import React from 'react';
import PropTypes from 'prop-types';
function Output(props) {
  return (
    <div className="output">
      <textarea rows="4" cols="35" value={props.names} />
    </div>
  );
}

Output.propTypes = {
  output: PropTypes.array
};

export default Output;
