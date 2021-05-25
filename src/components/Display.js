import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <h1 className="display">
    { result || '0' }
  </h1>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};
export default Display;
