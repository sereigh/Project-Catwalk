import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicDisplay = ({characteristic, value}) => (
  <div>{characteristic + value}</div>
)

CharacteristicDisplay.propTypes = {
  characteristic: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
export default CharacteristicDisplay;