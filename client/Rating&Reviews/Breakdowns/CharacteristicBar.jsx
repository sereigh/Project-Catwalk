import React from 'react';
import PropTypes from 'prop-types';

const CharacteristicBar = ({characteristic, value}) => (
  <div>{characteristic + value}</div>
)

CharacteristicBar.propTypes = {
  characteristic: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
export default CharacteristicBar;